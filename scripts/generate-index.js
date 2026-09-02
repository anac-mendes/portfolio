import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', '.output', 'public');
const assetsDir = path.join(publicDir, 'assets');

// Find the main JS and CSS files
let mainJs = '';
let mainCss = '';

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);

  // Find index-*.js and styles-*.css
  const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
  const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

  if (jsFile) mainJs = jsFile;
  if (cssFile) mainCss = cssFile;
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
    ${mainCss ? `<link rel="stylesheet" href="/assets/${mainCss}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    ${mainJs ? `<script type="module" src="/assets/${mainJs}"><\/script>` : ''}
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, 'index.html'), html);
console.log('✓ Generated index.html');
