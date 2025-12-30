/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vectordynamic.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
