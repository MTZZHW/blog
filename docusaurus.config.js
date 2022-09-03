const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MTZZHW Blog',
  url: 'https://mtzzhw.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        routeBasePath: '/',
        showReadingTime: true,
        blogSidebarTitle: '所有文章',
        blogSidebarCount: 'ALL',
        postsPerPage: 10,
        editUrl: 'https://github.com/MTZZHW/blog/',
      },
    ],
  ],

  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'MTZZHW Blog',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
