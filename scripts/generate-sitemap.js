import fs from 'fs';
import path from 'path';

// --- Configuration ---
const YOUR_DOMAIN = 'https://www.firstandlastmarketing.com';
const BUILD_DIR = 'dist'; // The directory where your build output is located

const findHtmlFiles = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Recursively search in subdirectories
            findHtmlFiles(filePath, fileList);
        } else if (path.extname(file) === '.html') {
            // Only add HTML files to the list
            fileList.push(filePath);
        }
    });

    return fileList;
};

const generateSitemap = () => {
    console.log('Generating sitemap...');
    
    const buildPath = path.resolve(process.cwd(), BUILD_DIR);
    const htmlFiles = findHtmlFiles(buildPath);

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${htmlFiles
    .map(filePath => {
        // Convert local file path to a public URL
        let relativePath = path.relative(buildPath, filePath);
        
        // Handle Windows-style backslashes
        relativePath = relativePath.replace(/\\/g, '/');

        // Handle index.html -> root URL
        if (path.basename(relativePath) === 'index.html') {
            relativePath = path.dirname(relativePath);
            // Handle the root index.html file
            if (relativePath === '.') {
                relativePath = '';
            }
        }
        
        // Remove .html extension
        relativePath = relativePath.replace(/\.html$/, '');

        // Reconstruct the full URL
        const url = `${YOUR_DOMAIN}/${relativePath}`;

        // Exclude prerendered files that are just duplicates of main routes
        if (url.includes('/prerenders/')) {
            return '';
        }

        return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`;
    })
    .join('\n')}
</urlset>`;

    const sitemapPath = path.join(buildPath, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent.trim());

    console.log(`Sitemap successfully generated at ${sitemapPath}`);
};

try {
    generateSitemap();
} catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
}