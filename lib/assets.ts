/**
 * Resolves local assets from the site root for static export.
 */

export const BASE_PATH = "";

const optimizedAssets: Record<string, string> = {
  "/images/hero-bg.webp": "/images/optimized/hero-bg.webp",
  "/images/destinations/varanasi-ganga-aarti.jpg":
    "/images/optimized/varanasi-ganga-aarti.webp",
  "/images/destinations/triveni-sangam-prayagraj.jpg":
    "/images/optimized/triveni-sangam-prayagraj.webp",
  "/images/destinations/saryu-river-ayodhya.jpg":
    "/images/optimized/saryu-river-ayodhya.webp",
  "/images/khushi-travels-logo-white.png":
    "/images/optimized/khushi-travels-logo-white.webp",
  "/images/khushi-travels-logo-black.png":
    "/images/optimized/khushi-travels-logo-black.webp",
};

const responsiveAssets = new Set([
  "/images/hero-bg.webp",
  "/images/destinations/mysore.webp",
  "/images/destinations/ayodhya.webp",
  "/images/destinations/varanasi-ganga-aarti.jpg",
  "/images/destinations/triveni-sangam-prayagraj.jpg",
  "/images/destinations/saryu-river-ayodhya.jpg",
  "/images/khushi-travels-logo-white.png",
  "/images/khushi-travels-logo-black.png",
  "/images/destinations/jyotirlingas/somnath.webp",
  "/images/destinations/jyotirlingas/mallikarjuna.webp",
  "/images/destinations/jyotirlingas/mahakaleshwar.webp",
  "/images/destinations/jyotirlingas/omkareshwar.webp",
  "/images/destinations/jyotirlingas/kedarnath.webp",
  "/images/destinations/jyotirlingas/bhimashankar.webp",
  "/images/destinations/jyotirlingas/kashi-vishwanath.webp",
  "/images/destinations/jyotirlingas/trimbakeshwar.webp",
  "/images/destinations/jyotirlingas/baidyanath.webp",
  "/images/destinations/jyotirlingas/nageshwar.webp",
  "/images/destinations/jyotirlingas/ramanathaswamy.webp",
  "/images/destinations/jyotirlingas/grishneshwar.webp",
]);

function getResponsiveBasePath(cleanPath: string): string {
  const imagePath = cleanPath.replace(/^\/images\//, "");
  const directory = imagePath.includes("/")
    ? imagePath.slice(0, imagePath.lastIndexOf("/") + 1)
    : "";
  const fileName = imagePath.slice(imagePath.lastIndexOf("/") + 1);
  const baseName = fileName.replace(/\.[^.]+$/, "");
  return `/images/optimized/${directory}${baseName}`;
}

export function getAssetPath(path: string | undefined | null): string {
  if (!path) return "";

  // If already absolute or data URL, return as-is
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  // If already prefixed with BASE_PATH, return as-is
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const responsiveBase = responsiveAssets.has(cleanPath)
    ? getResponsiveBasePath(cleanPath)
    : undefined;
  const resolvedPath =
    optimizedAssets[cleanPath] ?? (responsiveBase ? `${responsiveBase}.webp` : cleanPath);
  return `${BASE_PATH}${resolvedPath}`;
}

export function getResponsiveImageProps(
  path: string,
  sizes = "(max-width: 768px) 100vw, 33vw"
) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (!responsiveAssets.has(cleanPath)) {
    return { src: getAssetPath(path), sizes };
  }

  const basePath = getResponsiveBasePath(cleanPath);
  const widths = cleanPath === "/images/hero-bg.webp"
    ? [480, 768, 1200, 1600]
    : [480, 768, 1200];
  return {
    src: `${basePath}-1200w.webp`,
    srcSet: widths.map((width) => `${basePath}-${width}w.webp ${width}w`).join(", "),
    sizes,
  };
}
