// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Timeplus Doc Site',
  tagline: 'the most amazing streaming platform in the world',
  url: 'https://docs.timeplus.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'timeplus-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  scripts:['/heap.js'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/timeplus-io/docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:'https://github.com/timeplus-io/docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      algolia: {
        appId:'UCWO77T9MZ',
        apiKey:'57b8ba245e7467472b18e6cbf5cfd384',
        indexName:'public_docs',
      },
      navbar: {
        title: 'Docs',
        hideOnScroll: true,
        logo: {
          alt: 'Timeplus',
          src: 'img/Option1_B.png',
          srcDark: 'img/Option1_W.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'usecases',
            position: 'left',
            label: 'Demo Scenario',
          },
          {
            type: 'doc',
            docId: 'query-guide',
            position: 'left',
            label: 'Query Guide',
          },
          /*
          {
            href: 'https://github.com/timeplus-io/',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Use Cases',
                to: '/docs/usecases',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://timepluscommunity.slack.com',
              },
            ],
          },
          /*
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/timeplus-io',
              },
            ],
          },*/
        ],
        copyright: `Copyright © 2022 Timeplus, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode:{
        defaultMode:'dark',
        disableSwitch: false,
      },
    }),
};

module.exports = config;
