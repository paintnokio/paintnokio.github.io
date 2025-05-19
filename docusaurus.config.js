import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodeCraft',
  tagline: 'People making open-source and free software.',
  favicon: 'img/favicon.ico',

  url: 'https://gravesoft.dev/',
  baseUrl: '/',

  organizationName: 'Gravesoft', 
  projectName: 'Gravesoft.dev',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', 
          sidebarPath: './sidebars.js',

          editUrl:
            'https://github.com/gravesoft/gravesoft.dev/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    mermaid: {
      options: {
        maxTextSize: 1000,
      },
    },
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: '',
        logo: {
          alt: 'CodeCraft',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/cas',
            position: 'left',
            label: 'Our Software',
          },
          {
            to: '/download_windows',
            position: 'left',
            label: 'Download Windows / Office',
          },
          {
            to: '/bypass-russian-geoblock',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/news',
            position: 'left',
            label: 'News',
          },
          {
            to: '/credits',
            position: 'left',
            label: 'Credits',
          },
          {
            to: '/troubleshoot',
            position: 'right',
            label: 'Troubleshoot',
          },
          /* {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://discord.gg/yJ8phEmbw9',
            className: 'discord-button',
            position: 'right',
            label: 'Discord',
            "title": 'Chat with us on Discord',
          },
          {
            href: 'https://github.com/gravesoft',
            className: 'github-button',
            position: 'right',
            label: 'GitHub',
            "title": 'GitHub repository',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
