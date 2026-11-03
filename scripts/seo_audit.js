const fs = require('fs');
const path = require('path');

function getFiles(dir, exts = ['.tsx']) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (!['node_modules', '.next', 'out', '.git'].includes(file)) {
        results = results.concat(getFiles(full, exts));
      }
    } else {
      if (exts.includes(path.extname(full))) {
        results.push(full);
      }
    }
  });
  return results;
}

const pageFiles = getFiles('app', ['.tsx']).filter(f => f.endsWith('page.tsx'));
const pageAudit = [];

pageFiles.forEach(pf => {
  const code = fs.readFileSync(pf, 'utf8');
  const hasMetadata = /export const metadata\b|generateMetadata\b/.test(code);
  const hasJsonLd = /type=["']application\/ld\+json["']/.test(code);
  const h1Matches = code.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  
  let title = 'N/A';
  let desc = 'N/A';
  let canonical = 'N/A';
  
  const titleMatch = code.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) title = titleMatch[1];
  
  const descMatch = code.match(/description:\s*["']([^"']+)["']/);
  if (descMatch) desc = descMatch[1];
  
  const canonMatch = code.match(/canonical:\s*["']([^"']+)["']/);
  if (canonMatch) canonical = canonMatch[1];

  pageAudit.push({
    file: pf,
    hasMetadata,
    title: title.slice(0, 60),
    hasCanonical: canonical !== 'N/A',
    canonical,
    hasJsonLd,
    h1Count: h1Matches.length,
    isDynamic: pf.includes('[slug]')
  });
});

if (!fs.existsSync('scratch')) fs.mkdirSync('scratch', { recursive: true });
fs.writeFileSync('scratch/seo_audit_results.json', JSON.stringify(pageAudit, null, 2), 'utf8');
console.log('Saved audit results for ' + pageAudit.length + ' page.tsx files.');
