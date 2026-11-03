const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const targetDirs = ['.', 'out'];
let modifiedCount = 0;

const seen = new Set();
for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) continue;
  const files = getHtmlFiles(dir);
  for (const file of files) {
    if (seen.has(file)) continue;
    seen.add(file);

    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('</script><script>')) {
      // Ensure each statement before </script> has a semicolon and newline between script tags
      content = content.replace(/(;)?<\/script><script>/g, ';<\/script>\n<script>');
      fs.writeFileSync(file, content, 'utf8');
      modifiedCount++;
    }
  }
}

console.log(`Successfully formatted inline scripts in ${modifiedCount} HTML files.`);

