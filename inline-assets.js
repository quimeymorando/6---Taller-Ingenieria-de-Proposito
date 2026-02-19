import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const assetsDir = path.join(distDir, 'assets');
const outputFile = path.join(__dirname, 'landing-page-ghl.html');

try {
    let html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
    const files = fs.readdirSync(assetsDir);

    let jsContent = '';
    let cssContent = '';

    files.forEach(file => {
        const filePath = path.join(assetsDir, file);
        if (file.endsWith('.js')) {
            jsContent += fs.readFileSync(filePath, 'utf-8');
        } else if (file.endsWith('.css')) {
            cssContent += fs.readFileSync(filePath, 'utf-8');
        }
    });

    // Replace CSS link with inline style
    html = html.replace(/<link rel="stylesheet".*?>/, `<style>${cssContent}</style>`);

    // Replace JS script tag with inline script
    // Remove the module script tag that Vite generates
    html = html.replace(/<script type="module".*?<\/script>/, '');

    // Inject the JS at the end of body
    html = html.replace('</body>', `<script>${jsContent}</script></body>`);

    fs.writeFileSync(outputFile, html);
    console.log('Single file generated successfully: landing-page-ghl.html');

} catch (e) {
    console.error('Error inlining assets:', e);
    process.exit(1);
}
