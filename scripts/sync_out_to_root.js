const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');

if (!fs.existsSync(outDir)) {
  console.error('Error: out directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('Syncing out/ to repository root for GitHub Pages...');

// List of top-level items in out/ to sync
const itemsToSync = [
  'index.html',
  'index.txt',
  '404.html',
  '404',
  '_next',
  'best-tempo-traveller-fleet-bangalore',
  'fleet',
  'hire-tempo-traveller-bangalore',
  'localities',
  'packages',
  'privacy',
  'routes',
  'services',
  'tempo-traveller-rent-price-bangalore',
  'terms',
  'tour-packages-from-bangalore',
  'sitemap.xml',
  'robots.txt',
];

itemsToSync.forEach((item) => {
  const src = path.join(outDir, item);
  const dest = path.join(rootDir, item);
  if (fs.existsSync(src)) {
    copyRecursiveSync(src, dest);
    console.log(`✓ Synced ${item}`);
  }
});

console.log('Sync completed successfully!');
