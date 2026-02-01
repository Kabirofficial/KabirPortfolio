import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { projectsData } from '../src/data/projectsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://kabirofficial.github.io/KabirPortfolio';

const staticRoutes = [
    '/',
    '/about',
    '/projects',
    '/experience',
    '/education',
    '/certifications',
    '/skills',
    '/contact',
];

const generateSitemap = () => {
    const projectRoutes = projectsData.map((project) => `/projects/${project.id}`);
    const allRoutes = [...staticRoutes, ...projectRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
            .map((route) => {
                return `  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('\n')}
</urlset>`;

    const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
