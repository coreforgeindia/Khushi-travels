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

const files = getFiles('app').concat(getFiles('components'));
console.log('--- IMAGE SEO AUDIT ---');

const missingAlt = [];
const emptyAlt = [];
const allImages = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match standard img tags and Next Image components
  const imgRegex = /<(?:img|Image)\b([^>]*?)>/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const attrs = match[1];
    allImages.push({ file: f, tag: match[0] });

    if (!attrs.includes('alt=')) {
      missingAlt.push({ file: f, tag: match[0] });
    } else {
      const altMatch = attrs.match(/alt=["']([^"']*)["']/);
      if (altMatch && altMatch[1].trim() === '') {
        emptyAlt.push({ file: f, tag: match[0] });
      }
    }
  }
});

console.log('Total images found:', allImages.length);
console.log('Images missing alt attribute:', missingAlt.length);
if (missingAlt.length > 0) console.log(missingAlt);
console.log('Images with empty alt="":', emptyAlt.length);
if (emptyAlt.length > 0) console.log(emptyAlt);

