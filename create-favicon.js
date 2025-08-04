import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the existing favicon.svg
const svgContent = fs.readFileSync(path.join(__dirname, 'public', 'favicon.svg'), 'utf8');

// Create a simple HTML file to preview the favicon
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Favicon Preview</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .preview { margin: 20px 0; }
        .instructions { background: #f0f0f0; padding: 15px; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>🤖 AI Agents SA - Favicon Preview</h1>
    
    <div class="preview">
        <h3>Favicon Actual (SVG):</h3>
        ${svgContent}
    </div>
    
    <div class="instructions">
        <h3>📋 Pasos para crear el favicon.ico:</h3>
        <ol>
            <li>Abre <a href="favicon-generator.html" target="_blank">favicon-generator.html</a> en tu navegador</li>
            <li>Selecciona el tamaño 32x32 o 48x48</li>
            <li>Haz clic en "Descargar PNG"</li>
            <li>Ve a <a href="https://convertio.co/png-ico/" target="_blank">convertio.co/png-ico/</a></li>
            <li>Sube el PNG descargado y convierte a ICO</li>
            <li>Descarga el archivo .ico</li>
            <li>Reemplaza <code>public/favicon.ico</code> con el nuevo archivo</li>
        </ol>
    </div>
    
    <div class="instructions">
        <h3>🎯 Alternativa Rápida:</h3>
        <p>También puedes usar directamente el favicon.svg que ya tienes, ya que los navegadores modernos lo soportan perfectamente.</p>
        <p>El archivo <code>public/favicon.svg</code> ya está configurado en tu <code>index.html</code>.</p>
    </div>
</body>
</html>
`;

// Write the preview file
fs.writeFileSync(path.join(__dirname, 'favicon-preview.html'), htmlContent);

console.log('✅ Favicon preview HTML created');
console.log('📝 Archivos generados:');
console.log('  - favicon-generator.html (generador interactivo)');
console.log('  - favicon-preview.html (vista previa)');
console.log('  - public/favicon-new.svg (nuevo diseño)');
console.log('');
console.log('🚀 Próximos pasos:');
console.log('1. Abre favicon-generator.html en tu navegador');
console.log('2. Descarga el PNG del tamaño que prefieras');
console.log('3. Convierte PNG a ICO usando un convertidor online');
console.log('4. Reemplaza public/favicon.ico con el nuevo archivo'); 