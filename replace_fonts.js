const fs = require('fs');
const path = require('path');

const files = [
  'components/layout/home-page.tsx',
  'components/layout/app-header.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/font-syne/g, 'font-open-sans');
  content = content.replace(/font-outfit/g, 'font-open-sans');
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
