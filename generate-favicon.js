import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the SVG content
const svgContent = fs.readFileSync(path.join(__dirname, 'public', 'favicon-new.svg'), 'utf8');

// Create a simple HTML file to convert SVG to PNG
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Favicon Generator</title>
</head>
<body>
    <div id="favicon-container">
        ${svgContent}
    </div>
    <script>
        // This would be used with a headless browser to convert SVG to PNG
        console.log('SVG content loaded');
    </script>
</body>
</html>
`;

// Write the HTML file
fs.writeFileSync(path.join(__dirname, 'favicon-generator.html'), htmlContent);

console.log('✅ Favicon generator HTML created');
console.log('📝 Next steps:');
console.log('1. Open favicon-generator.html in a browser');
console.log('2. Take a screenshot or use browser dev tools to save as PNG');
console.log('3. Convert PNG to ICO using an online converter');
console.log('4. Replace public/favicon.ico with the new file'); 