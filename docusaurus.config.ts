import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://twinzom.github.io',
  baseUrl: '/technical-product-website-template/',

  organizationName: 'twinzom',
  projectName: 'technical-product-website-template',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'product-overview',
        path: 'docs-product-overview',
        routeBasePath: 'product-overview',
        sidebarPath: './sidebarsProductOverview.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'architecture-design',
        path: 'docs-architecture-design',
        routeBasePath: 'architecture-design',
        sidebarPath: './sidebarsArchitectureDesign.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'market-deployment',
        path: 'docs-market-deployment',
        routeBasePath: 'market-deployment',
        sidebarPath: './sidebarsMarketDeployment.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community-resources',
        path: 'docs-community-resources',
        routeBasePath: 'community-resources',
        sidebarPath: './sidebarsCommunityResources.ts',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'productOverviewSidebar',
          docsPluginId: 'product-overview',
          position: 'left',
          label: 'Product Overview',
        },
        {
          type: 'docSidebar',
          sidebarId: 'architectureDesignSidebar',
          docsPluginId: 'architecture-design',
          position: 'left',
          label: 'Architecture Design',
        },
        {
          type: 'docSidebar',
          sidebarId: 'marketDeploymentSidebar',
          docsPluginId: 'market-deployment',
          position: 'left',
          label: 'Market Deployment & Operations',
        },
        {
          type: 'docSidebar',
          sidebarId: 'communityResourcesSidebar',
          docsPluginId: 'community-resources',
          position: 'left',
          label: 'Community & Resources',
        },
        {
          href: 'https://github.com/twinzom/technical-product-website-template',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product Overview',
          items: [
            {
              label: 'Product Overview',
              to: '/product-overview',
            },
          ],
        },
        {
          title: 'Architecture Design',
          items: [
            {
              label: 'Architecture Design',
              to: '/architecture-design',
            },
          ],
        },
        {
          title: 'Market Deployment & Operations',
          items: [
            {
              label: 'Market Deployment & Operations',
              to: '/market-deployment',
            },
          ],
        },
        {
          title: 'Community & Resources',
          items: [
            {
              label: 'Community & Resources',
              to: '/community-resources',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/twinzom/technical-product-website-template',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
