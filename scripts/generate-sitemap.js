// Using modern ES Module 'import' syntax
import fs from 'fs';
import path from 'path';

// --- START OF CONFIGURATION ---

// 1. Import your blog data using the ES Module syntax.
// Make sure the path is correct relative to the root of your project.
import { posts as blogPosts } from '../src/Components/blog/blogData.js';

// 2. Define the base URL of your live website.
const baseUrl = 'https://www.firstandlastmarketing.com';

// 3. List all your static pages.
const staticPages = [
  '/',
  '/services',
  '/portfolio',
  '/about',
  '/contact',
  '/pricing',
  '/blog',
  '/privacy-policy',
  '/terms-of-use',
  '/contractors',
];

// --- END OF CONFIGURATION ---

// Main function to generate the sitemap
async function generateSitemap() {
  console.log('Generating sitemap...');

  const dynamicBlogUrls = blogPosts.map(post => `/blog/${post.slug}`);
  const allPages = [...staticPages, ...dynamicBlogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => {
    let priority = 0.8;
    if (page === '/') priority = 1.0;
    else if (page.startsWith('/blog/')) priority = 0.9;
    return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>
    `;
  }).join('')}
</urlset>`;

  // Define the path to the 'public' directory from the project root.
  const sitemapPath = path.resolve('./public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');

  console.log(`✅ Sitemap generated successfully with ${allPages.length} pages!`);
  console.log(`   File located at: ${sitemapPath}`);
}

// Execute the function
generateSitemap();