const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUTPUT_DIR = path.join(PUBLIC_DIR, "images", "optimized");
const ALT_TEXT = require("./alt-text.json");

const IMAGE_TARGETS = [
  "images/hero-bg.webp",
  "images/destinations/mysore.webp",
  "images/destinations/ayodhya.webp",
  "images/destinations/varanasi-ganga-aarti.jpg",
  "images/destinations/triveni-sangam-prayagraj.jpg",
  "images/destinations/saryu-river-ayodhya.jpg",
  "images/destinations/jyotirlingas/somnath.webp",
  "images/destinations/jyotirlingas/mallikarjuna.webp",
  "images/destinations/jyotirlingas/mahakaleshwar.webp",
  "images/destinations/jyotirlingas/omkareshwar.webp",
  "images/destinations/jyotirlingas/kedarnath.webp",
  "images/destinations/jyotirlingas/bhimashankar.webp",
  "images/destinations/jyotirlingas/kashi-vishwanath.webp",
  "images/destinations/jyotirlingas/trimbakeshwar.webp",
  "images/destinations/jyotirlingas/baidyanath.webp",
  "images/destinations/jyotirlingas/nageshwar.webp",
  "images/destinations/jyotirlingas/ramanathaswamy.webp",
  "images/destinations/jyotirlingas/grishneshwar.webp",
  "images/khushi-travels-logo-white.png",
  "images/khushi-travels-logo-black.png",
];

const VARIANTS = [
  { width: 480, quality: 80, maxBytes: 30 * 1024 },
  { width: 768, quality: 75, maxBytes: 80 * 1024 },
  { width: 1200, quality: 60, maxBytes: 150 * 1024 },
];
const HERO_VARIANT = { width: 1600, quality: 60, maxBytes: 150 * 1024 };

function getTargetPaths(input) {
  const parsed = path.parse(input);
  const parentPath = path.dirname(input);
  const relativeDirectory =
    parentPath === "images" ? "" : parentPath.replace(/^images[\\/]/, "");
  const outputDirectory = path.join(OUTPUT_DIR, relativeDirectory === "." ? "" : relativeDirectory);
  const baseName = parsed.name;
  return {
    outputDirectory,
    baseName,
    legacyOutput:
      input === "images/hero-bg.webp"
        ? path.join(OUTPUT_DIR, "hero-bg.webp")
        : input.startsWith("images/destinations/")
        ? path.join(OUTPUT_DIR, `${baseName}.webp`)
        : input.startsWith("images/khushi-travels-logo-")
        ? path.join(OUTPUT_DIR, `${baseName}.webp`)
        : undefined,
  };
}

async function encodeVariant(inputPath, width, quality, maxBytes) {
  let currentQuality = quality;
  let output;
  while (true) {
    output = await sharp(inputPath, { failOn: "error" })
      .rotate()
      .resize({ width })
      .webp({
        quality: currentQuality,
        alphaQuality: Math.min(currentQuality, 60),
        effort: 6,
        smartSubsample: true,
      })
      .toBuffer();
    if (output.length <= maxBytes || currentQuality <= 10) break;
    currentQuality -= 5;
  }
  return { output, quality: currentQuality };
}

async function optimizeImage(input) {
  const inputPath = path.join(PUBLIC_DIR, input);
  const inputStats = await fs.stat(inputPath);
  const metadata = await sharp(inputPath, { failOn: "error" }).metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error(`Image dimensions are missing: ${input}`);
  }

  const { outputDirectory, baseName, legacyOutput } = getTargetPaths(input);
  await fs.mkdir(outputDirectory, { recursive: true });

  const variants = input === "images/hero-bg.webp"
    ? [...VARIANTS, HERO_VARIANT]
    : VARIANTS;
  const manifestVariants = [];
  const auditRows = [];
  let primaryOutput;

  for (const variant of variants) {
    const { output, quality } = await encodeVariant(
      inputPath,
      variant.width,
      variant.quality,
      variant.maxBytes
    );
    const variantName = `${baseName}-${variant.width}w.webp`;
    const outputPath = path.join(outputDirectory, variantName);
    await fs.writeFile(outputPath, output);
    const outputMetadata = await sharp(output).metadata();
    const sourcePath = `/images/optimized/${path.relative(OUTPUT_DIR, outputPath).split(path.sep).join("/")}`;
    manifestVariants.push({
      width: outputMetadata.width,
      src: sourcePath,
      bytes: output.length,
      quality,
    });
    if (variant.width === 1200) primaryOutput = { outputPath, output, outputMetadata };
    auditRows.push({
      input,
      variant: sourcePath,
      width: outputMetadata.width,
      height: outputMetadata.height,
      sourceBytes: inputStats.size,
      outputBytes: output.length,
      targetBytes: variant.maxBytes,
      withinTarget: output.length <= variant.maxBytes,
      altText: ALT_TEXT[`/${input}`] || "",
      altMapped: Boolean(ALT_TEXT[`/${input}`]),
    });
  }

  if (!primaryOutput) {
    throw new Error(`1200px image variant was not generated for ${input}`);
  }

  await fs.copyFile(
    primaryOutput.outputPath,
    path.join(outputDirectory, `${baseName}.webp`)
  );
  if (legacyOutput) {
    await fs.copyFile(primaryOutput.outputPath, legacyOutput);
  }

  const socialDirectory = path.join(OUTPUT_DIR, "og");
  await fs.mkdir(socialDirectory, { recursive: true });
  const socialOutput = await sharp(inputPath, { failOn: "error" })
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .webp({ quality: 80, effort: 5, smartSubsample: true })
    .toFile(path.join(socialDirectory, `${baseName}.webp`));

  return {
    input,
    alt: ALT_TEXT[`/${input}`] || "",
    src: `/images/optimized/${path.relative(OUTPUT_DIR, primaryOutput.outputPath).split(path.sep).join("/")}`,
    srcSet: manifestVariants.map(({ src, width }) => `${src} ${width}w`).join(", "),
    variants: manifestVariants,
    socialImage: `/images/optimized/og/${baseName}.webp`,
    socialWidth: socialOutput.width,
    socialHeight: socialOutput.height,
    auditRows,
  };
}

async function createDuplicateReport() {
  const hashGroups = new Map();
  for (const input of IMAGE_TARGETS) {
    const contents = await fs.readFile(path.join(PUBLIC_DIR, input));
    const hash = crypto.createHash("sha256").update(contents).digest("hex");
    const group = hashGroups.get(hash) || [];
    group.push(`/${input}`);
    hashGroups.set(hash, group);
  }

  return [...hashGroups.entries()]
    .filter(([, files]) => files.length > 1)
    .map(([sha256, files]) => ({ sha256, files }));
}

function csvCell(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

async function main() {
  const manifest = [];
  const auditRows = [];

  for (const target of IMAGE_TARGETS) {
    const result = await optimizeImage(target);
    manifest.push({
      input: `/${result.input}`,
      alt: result.alt,
      src: result.src,
      srcSet: result.srcSet,
      socialImage: result.socialImage,
      socialWidth: result.socialWidth,
      socialHeight: result.socialHeight,
      variants: result.variants,
    });
    auditRows.push(...result.auditRows);
  }

  await fs.writeFile(
    path.join(OUTPUT_DIR, "image-manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8"
  );
  await fs.writeFile(
    path.join(OUTPUT_DIR, "duplicate-images.json"),
    `${JSON.stringify(await createDuplicateReport(), null, 2)}\n`,
    "utf8"
  );

  const columns = [
    "input",
    "variant",
    "width",
    "height",
    "sourceBytes",
    "outputBytes",
    "targetBytes",
    "withinTarget",
    "altText",
    "altMapped",
  ];
  const csv = [
    columns.join(","),
    ...auditRows.map((row) => columns.map((column) => csvCell(row[column])).join(",")),
  ].join("\n");
  await fs.writeFile(path.join(PUBLIC_DIR, "image-audit.csv"), `${csv}\n`, "utf8");

  console.log(
    `Optimized ${manifest.length} curated images into responsive WebP variants and 1200x630 social crops.`
  );
  console.log("Original images were left unchanged.");
  console.log(`Measured image audit written to ${path.join(PUBLIC_DIR, "image-audit.csv")}.`);
}

main().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exitCode = 1;
});
