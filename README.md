# Khushi Travels Website

Khushi Travels is a Next.js 14 App Router website configured for static export. It uses React, TypeScript, and Tailwind CSS.

## Image optimization

Install project dependencies, then generate the optimized WebP assets before building or publishing:

```bash
npm install
npm run optimize:images
```

The optimizer writes compressed derivatives to `public/images/optimized/` and leaves the source images unchanged. The six selected assets are the shared hero background, three images used by the Kashi, Triveni, and Ayodhya package page, and the two header and footer logos. `lib/assets.ts` maps those source paths to their optimized versions.

The optimization list is explicit. When adding an asset, include it in `scripts/optimize_images.js` and add a path mapping in `lib/assets.ts` only when the application should use its derivative. Do not generate generic alt text or geotag images automatically; alt text should describe the actual image in its page context.

## Search engine files

Regenerate the route sitemap, curated image sitemap, and robots files after changing routes or the image sitemap entries:

```bash
npm run sitemap
```

The sitemap generator writes identical copies to the project root and `public/`. `robots.txt` lists both sitemap URLs. The image sitemap currently lists the three optimized pilgrimage photos on their package detail page.

Check existing image alt attributes with:

```bash
node scripts/audit_images.js
```

This is a static source check. It cannot determine whether alt text accurately describes the image, so review new or changed descriptions in their visual context.

## Build and static export

```bash
npm run build
```

Next.js writes the static export to `out/`. Make sure optimized files exist before building because application asset paths point to those files.
