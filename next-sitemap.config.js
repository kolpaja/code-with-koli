/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://codewithkoli.com/',
  generateRobotsTxt: false, // (optional),
  sitemapSize: 1000,
  changefreq: 'monthly'
};
