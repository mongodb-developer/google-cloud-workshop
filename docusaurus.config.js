// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MongoDB Atlas on Google Cloud Workshop',
  tagline: 'Learn how to use MongoDB Atlas, GraphQL, Google Cloud Natural Language API, Google Cloud Run, and more',
  url: 'https://www.atlas-google-cloud-workshop.com/',
  baseUrl: '/',
  projectName: 'mongodb-developer.github.io',
  organizationName: 'mongodb-developer',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mongodb-developer/google-cloud-workshop/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-FQHL9GEFM3',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        }
      },
      navbar: {
        logo: {
          alt: 'MongoDB Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          className: 'navbar-logo',
          width: '135px',
          height: '100%'
        },
        items: [
          {
            href: 'https://github.com/mongodb-developer/mongodb-developer.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn more',
            items: [
              {
                label: 'Try Atlas',
                href: 'https://www.mongodb.com/try?utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=google_cloud_workshop&utm_term=stanimira.vlaeva',
              },
              {
                label: 'Forums',
                href: 'https://www.mongodb.com/community/forums/?utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=google_cloud_workshop&utm_term=stanimira.vlaeva',
              },
              {
                label: 'Developer Center',
                href: 'https://www.mongodb.com/developer/?utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=google_cloud_workshop&utm_term=stanimira.vlaeva',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} MongoDB, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
