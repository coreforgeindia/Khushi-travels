const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (['node_modules', '.next', '.git'].includes(file)) continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html') && !file.includes('404')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles('out');
console.log('Total HTML files to inspect in out/:', htmlFiles.length);

const missingH1 = [];
const multipleH1 = [];

htmlFiles.forEach(hf => {
  const content = fs.readFileSync(hf, 'utf8');
  const h1Matches = content.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length === 0) {
    missingH1.push(hf);
  } else if (h1Matches.length > 1) {
    multipleH1.push({ file: hf, count: h1Matches.length });
  }
});

console.log('HTML files missing H1:', missingH1.length);
if (missingH1.length > 0) console.log(missingH1);

console.log('HTML files with multiple H1s:', multipleH1.length);
if (multipleH1.length > 0) console.log(multipleH1.slice(0, 5));

