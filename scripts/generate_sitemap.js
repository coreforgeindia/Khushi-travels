const fs = require('fs');
const path = require('path');

// Read the slug and representative image for each statically rendered page.
function extractPageAssets(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return [...content.matchAll(/slug:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g)]
    .map((match) => ({ slug: match[1], image: match[2] }));
}

function extractSlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return [...content.matchAll(/slug:\s*["']([^"']+)["']/g)]
    .map((match) => match[1]);
}

const SITE_URL = 'https://khushitravel.in';
const TODAY = new Date().toISOString().split('T')[0];
const landingPageCsv = 'landing-pages-master.csv';

const fleetPages = extractPageAssets('data/fleet.ts');
const servicePages = extractSlugs('data/services.ts');
const routePages = extractPageAssets('data/routes.ts');
const localityPages = extractSlugs('data/localities.ts');
const packageContent = fs.readFileSync('data/packages.ts', 'utf8');
function extractPackagesByCategory(categoryName) {
  const start = packageContent.indexOf(`export const ${categoryName}`);
  if (start === -1) return [];
  const followingExport = packageContent.indexOf('\nexport const ', start + 1);
  const section = packageContent.slice(start, followingExport === -1 ? undefined : followingExport);
  return [...section.matchAll(/slug:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g)]
    .map((match) => ({ slug: match[1], image: match[2] }));
}

const normalPackages = extractPackagesByCategory('NORMAL_PACKAGES');
const specialPackages = extractPackagesByCategory('SPECIAL_PACKAGES');
const weekendPackages = extractPackagesByCategory('WEEKEND_PACKAGES');
const specialDeparturePackages = extractPackagesByCategory('SPECIAL_DEPARTURE_PACKAGES');

function extractLandingPageSlugs(filePath) {
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
  const lines = content.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];

  const headers = lines[0].split(',');
  const tierIndex = headers.indexOf('tier');
  const slugIndex = headers.indexOf('slug');
  if (tierIndex === -1 || slugIndex === -1) {
    throw new Error(`The ${filePath} file must contain tier and slug columns.`);
  }

  const slugs = [];
  for (const line of lines.slice(1)) {
    const values = line.split(',');
    const tier = values[tierIndex];
    const slug = values[slugIndex];
    const validSlug =
      slug === 'best-travel-agency-karnataka' ||
      /^best-travel-agency-[a-z0-9]+(?:-[a-z0-9]+)*-(?:karnataka|bengaluru)$/.test(slug);

    if (!['1', '2', '3'].includes(tier) || !validSlug) continue;
    slugs.push({ tier, slug });
  }

  return [...new Map(slugs.map((page) => [page.slug, page])).values()];
}

const landingPages = extractLandingPageSlugs(landingPageCsv);

console.log('Extracted slugs:');
console.log('Fleet:', fleetPages.length);
console.log('Holiday Packages:', normalPackages.length);
console.log('Pilgrimage Packages:', specialPackages.length);
console.log('Weekend Packages:', weekendPackages.length);
console.log('Special Packages:', specialDeparturePackages.length);
console.log('Location landing pages:', landingPages.length);

const urls = [];

function addUrl(pathname, priority = '0.7', changefreq = 'weekly', images = []) {
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  const loc = clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
  const existing = urls.find((u) => u.loc === loc);
  if (existing) {
    existing.images = [...new Set([...existing.images, ...images])];
  } else {
    urls.push({ loc, priority, changefreq, lastmod: TODAY, images: [...new Set(images)] });
  }
}

function absoluteImageUrl(imagePath) {
  if (!imagePath) return '';
  return `${SITE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
}

// 1. Primary Hub & Core Pages
addUrl('', '1.0', 'daily'); // Homepage
addUrl('best-tempo-traveller-fleet-bangalore', '0.9', 'weekly');
addUrl('hire-tempo-traveller-bangalore', '0.9', 'weekly');
addUrl('tempo-traveller-rent-price-bangalore', '0.9', 'weekly');
addUrl('tour-packages-from-bangalore', '0.8', 'weekly');
addUrl('terms', '0.4', 'yearly');
addUrl('privacy', '0.4', 'yearly');
addUrl('packages', '0.85', 'weekly');
addUrl('packages/holiday', '0.85', 'weekly');
addUrl('packages/pilgrimage', '0.85', 'weekly');
addUrl('packages/weekend', '0.85', 'weekly');
addUrl('packages/special', '0.85', 'weekly');

// 1a. Programmatic location landing pages
landingPages.forEach(({ tier, slug }) => {
  const priority = tier === '1' ? '0.8' : tier === '2' ? '0.7' : '0.6';
  addUrl(slug, priority, 'monthly');
});

// 2. Fleet Vehicle Pages
fleetPages.forEach(({ slug, image }) => {
  addUrl(`fleet/${slug}`, '0.8', 'weekly', [absoluteImageUrl(image)]);
});

servicePages.forEach((slug) => {
  addUrl(`services/${slug}`, '0.7', 'monthly');
});
routePages.forEach(({ slug, image }) => {
  addUrl(`routes/${slug}`, '0.75', 'weekly', [absoluteImageUrl(image)]);
});
localityPages.forEach((slug) => {
  addUrl(`localities/${slug}`, '0.7', 'monthly');
});

// 3. Tour Packages
normalPackages.forEach(({ slug, image }) => {
  addUrl(`packages/holiday/${slug}`, '0.75', 'weekly', [absoluteImageUrl(image)]);
});
specialPackages.forEach(({ slug, image }) => {
  addUrl(`packages/pilgrimage/${slug}`, '0.8', 'weekly', [absoluteImageUrl(image)]);
});
weekendPackages.forEach(({ slug, image }) => {
  addUrl(`packages/weekend/${slug}`, '0.75', 'weekly', [absoluteImageUrl(image)]);
});
specialDeparturePackages.forEach(({ slug, image }) => {
  addUrl(`packages/special/${slug}`, '0.85', 'weekly', [absoluteImageUrl(image)]);
});

console.log('Total URLs compiled for sitemap:', urls.length);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
${u.images.map((image) => `    <image:image><image:loc>${image}</image:loc></image:image>`).join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

const robotsTxt = `User-agent: *
Allow: /

# Production XML Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync('public/sitemap.xml', sitemapXml, 'utf8');
fs.writeFileSync('sitemap.xml', sitemapXml, 'utf8');
fs.writeFileSync('public/robots.txt', robotsTxt, 'utf8');
fs.writeFileSync('robots.txt', robotsTxt, 'utf8');

console.log('✓ Successfully wrote public/sitemap.xml and sitemap.xml');
console.log('✓ Successfully wrote public/robots.txt and robots.txt');
