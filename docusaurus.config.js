import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Devcomp',
  tagline: 'Orang-orang yang membuat perangkat lunak sumber terbuka dan gratis.',
  favicon: 'img/favicon.ico',

  url: 'https://devcomp.fun',  // Ganti dengan custom domain Anda
  baseUrl: '/',

  organizationName: 'devcomp.fun', 
  projectName: 'devcomp.fun',

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
            'https://github.com/paintnokio/paintnokio.github.io/tree/main/',
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
        title: 'devcomp.fun',
        logo: {
          alt: 'DevComp.fun',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/cas',
            position: 'left',
            label: 'Produk Kami',
          },
          {
            to: '/download_windows',
            position: 'left',
            label: 'Unduhan Windows / Office',
          },
          {
            to: '/clean_install_windows',
            position: 'left',
            label: 'Panduan',
          },
          {
            to: '/news',
            position: 'left',
            label: 'Berita',
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
            href: 'https://discord.com/invite/SR3cXNq2',
            className: 'discord-button',
            position: 'right',
            label: 'Discord',
            "title": 'Chat with us on Discord',
          },
          {
            href: 'https://github.com/paintnokio',
            className: 'github-button',
            position: 'right',
            label: 'GitHub',
            "title": 'GitHub repository',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} DevComp, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
