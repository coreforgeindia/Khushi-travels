const fs = require('fs');
const path = require('path');

function getFiles(dir, exts = ['.tsx', '.ts', '.css']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== 'out' && file !== '.git') {
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
console.log('Total files scanned:', files.length);

const issues = {
  fontSerif: [],
  fontMono: [],
  fontBlack: [],
  fontExtrabold: [],
  fontLight: [],
  customFontFamilies: []
};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('font-serif')) issues.fontSerif.push(f);
  if (content.includes('font-mono')) issues.fontMono.push(f);
  if (content.includes('font-black')) issues.fontBlack.push(f);
  if (content.includes('font-extrabold')) issues.fontExtrabold.push(f);
  if (content.includes('font-light') || content.includes('font-thin')) issues.fontLight.push(f);
  if (/font-\[(?!var\()/.test(content)) issues.customFontFamilies.push(f);
});

console.log('Audit Summary:');
console.log('font-serif:', issues.fontSerif.length, issues.fontSerif);
console.log('font-mono:', issues.fontMono.length, issues.fontMono);
console.log('font-black:', issues.fontBlack.length, issues.fontBlack);
console.log('font-extrabold:', issues.fontExtrabold.length, issues.fontExtrabold);
console.log('font-light / thin:', issues.fontLight.length, issues.fontLight);
console.log('arbitrary font:', issues.customFontFamilies.length, issues.customFontFamilies);

