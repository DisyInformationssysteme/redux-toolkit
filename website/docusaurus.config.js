// site configuration options.
const { resolve } = require('path')
const {
  linkDocblocks,
  transpileCodeblocks,
} = require('remark-typescript-tools')

module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          showLastUpdateTime: true,
          routeBasePath: '/',
          include: [
            '{api,assets,introduction,rtk-query,tutorials,usage}/**/*.{md,mdx}',
          ], // no other way to exclude node_modules
          remarkPlugins: [
            [
              linkDocblocks,
              {
                extractorSettings: {
                  tsconfig: resolve(__dirname, '../docs/tsconfig.json'),
                  basedir: resolve(__dirname, '../packages/toolkit/src'),
                  rootFiles: [
                    'index.ts',
                    'query/index.ts',
                    'query/createApi.ts',
                    'query/react/index.ts',
                    'query/react/ApiProvider.tsx',
                  ],
                },
              },
            ],
            [
              transpileCodeblocks,
              {
                compilerSettings: {
                  tsconfig: resolve(__dirname, '../docs/tsconfig.json'),
                  externalResolutions: {},
                },
              },
            ],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-130598673-3',
        },
      },
    ],
  ],
  projectName: 'redux-toolkit',
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  tagline:
    'The official, opinionated, batteries-included toolset for efficient Redux development',
  title: 'Redux Toolkit',
  url: 'https://redux-toolkit.js.org',
  customFields: {
    repoUrl: 'https://github.com/reduxjs/redux-toolkit',
  },
  themeConfig: {
    metadata: [{ name: 'twitter:card', content: 'summary' }],
    prism: {
      theme: require('./src/js/monokaiTheme.js'),
    },
    image: 'img/redux-logo-landscape.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Redux Toolkit',
      logo: {
        alt: 'Redux Logo',
        src: 'img/redux.svg',
      },
      items: [
        {
          to: 'introduction/getting-started',
          label: 'Getting Started',
          position: 'right',
        },
        { to: 'tutorials/overview', label: 'Tutorials', position: 'right' },
        { to: 'usage/usage-guide', label: 'Usage Guide', position: 'right' },
        { to: 'api/configureStore', label: 'API', position: 'right' },
        { to: 'rtk-query/overview', label: 'RTK Query', position: 'right' },
        {
          href: 'https://github.com/reduxjs/redux-toolkit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redux Logo',
        src: 'img/redux_white.svg',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'introduction/getting-started',
            },
            {
              label: 'Tutorials',
              to: 'tutorials/overview',
            },
            {
              label: 'Usage Guide',
              to: 'usage/usage-guide',
            },
            {
              label: 'API Reference',
              to: 'api/configureStore',
            },
            { to: 'rtk-query/overview', label: 'RTK Query' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'http://stackoverflow.com/questions/tagged/redux',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/0ZcbPKXt5bZ6au5t',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://www.github.com/reduxjs/redux-toolkit',
            },
            {
              html: `
                <a href="https://www.netlify.com">
                  <img
                    src="https://www.netlify.com/img/global/badges/netlify-light.svg"
                    alt="Deploys by Netlify"
                  />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © 2015–${new Date().getFullYear()} Dan Abramov and the Redux documentation authors.`,
    },
    algolia: {
      appId: 'CK59DFV0FC',
      apiKey: '98e886dfbcde7f7e8ec8d7ff1c2c34c8',
      indexName: 'redux-starter-kit',
      algoliaOptions: {},
    },
  },
  plugins: [
    [
      '@dipakparmar/docusaurus-plugin-umami',
      /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
      ({
        websiteID: '616c102e-05dd-4a74-b63e-01bb52f1bc6c',
        analyticsDomain: 'redux-docs-umami.vercel.app',
        scriptName: 'script.js',
        dataAutoTrack: true,
        dataDoNotTrack: true,
        dataCache: true
      })
    ]
  ]
}
