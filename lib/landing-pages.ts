import { readFileSync } from "node:fs";
import path from "node:path";

export interface LandingPageRecord {
  tier: "1" | "2" | "3";
  slug: string;
  fullUrl: string;
  parentSlug: string;
  name: string;
  zoneOrRegion: string;
  h1: string;
  dataQualityNotes: string;
}

const INVALID_LANDING_PAGE_SLUGS: string[] = [];

function parseCsvRow(line: string): string[] {
  const values: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      values.push(value);
      value = "";
    } else {
      value += character;
    }
  }

  values.push(value);
  return values;
}

function loadLandingPages(): LandingPageRecord[] {
  const csvPath = path.join(process.cwd(), "landing-pages-master.csv");
  const lines = readFileSync(csvPath, "utf8")
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .filter(Boolean);

  if (lines.length < 2) {
    throw new Error("The landing page CSV must contain a header and data rows.");
  }

  const headers = parseCsvRow(lines[0]);
  const column = (values: string[], name: string) => values[headers.indexOf(name)] ?? "";
  const seen = new Set<string>();
  const records: LandingPageRecord[] = [];

  for (const line of lines.slice(1)) {
    const values = parseCsvRow(line);
    const slug = column(values, "slug").trim();

    if (!/^best-travel-agency-(?:karnataka|[a-z0-9]+(?:-[a-z0-9]+)*-(?:karnataka|bengaluru))$/.test(slug)) {
      INVALID_LANDING_PAGE_SLUGS.push(slug);
      continue;
    }
    if (seen.has(slug)) {
      throw new Error(`Duplicate landing page slug in CSV: ${slug}`);
    }
    seen.add(slug);

    const tier = column(values, "tier");
    if (tier !== "1" && tier !== "2" && tier !== "3") {
      throw new Error(`Unsupported landing page tier for ${slug}: ${tier}`);
    }

    records.push({
      tier,
      slug,
      fullUrl: column(values, "full_url"),
      parentSlug: column(values, "parent_slug"),
      name: column(values, "name"),
      zoneOrRegion: column(values, "zone_or_region"),
      h1: column(values, "H1"),
      dataQualityNotes: column(values, "data_quality_notes"),
    });
  }

  return records;
}

export const LANDING_PAGES = loadLandingPages();
export { INVALID_LANDING_PAGE_SLUGS };

export function getLandingPage(slug: string): LandingPageRecord | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

export function getLandingPageUrl(slug: string): string {
  return `/${slug}/`;
}
