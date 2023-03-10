// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Azure AI Developer Hub',
  tagline: 'Azure OpenAI - Azure Cognitive Services - Azure ML - MLOps - AI App Developers',
  url: 'https://azureaidevs.github.io/',
  baseUrl: '/hub/',
  favicon: 'img/favicon.ico',

  // GitHub Pages Config
  organizationName: 'AzureAiDevs', 
  projectName: 'hub', 
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
        },

        blog: {
          blogTitle: '#30DaysOfAzureAI',
          blogDescription: 'Jumpstart your #AzureAI with #30Days of content and resources',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'AI April 2023',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          showReadingTime: true,
          sortPosts: 'ascending',

          feedOptions: {
            type: 'all',
            // copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 30),
                ...rest,
              });
            },
          },
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

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: ' ',
        logo: {
          alt: 'Azure AI Logo',
          src: 'img/landing/Azure-AI.svg',
        },

        style: 'primary',
       
        items: [
          {to: '/ai-april', label: '#AzureAiDevs', position: 'left'},
          // {to: 'https://aka.ms/ai-april/devplan', label: '✨ Dev Plan', position: 'left'},
          // {to: 'https://aka.ms/ai-april/vscode', label: '🧰 Extension', position: 'left'},
          // {to: 'https://learn.microsoft.com/events/learn-events/powerful-devs-2023/?WT.mc_id=javascript-82212-ninarasi', label: '🎙 #PowerfulDevs', position: 'left'},
          // {to: 'https://aka.ms/ai-april/collection', label: 'Collection', position: 'right'},
          {to: '/blog', label: '#30DaysOfAzureAI', position: 'left'},          
          {to: '/newsletter', label: 'Newsletter', position: 'left'},
          // {to: 'https://aka.ms/ai-april/videos', label: 'Video', position: 'right'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Workshops',
          }
        ],
      },

      footer: {
       

        /* 
        style: 'light',
        logo: {
          alt: 'AI April Logo',
          src: 'img/???.png',
          href: 'https://aka.ms/ai-april',
          width: 280,
          height: 100,
        },
        */

        links: [

          {
            label: `Collection`,
            to: 'https://aka.ms/ai-april/collection'
          },
          {
            label: `Azure AI`,
            to: 'https://azure.microsoft.com/solutions/ai/#overview?WT.mc_id=aiml-89446-dglover'
          },
          {
            label: `Azure OpenAI Service`,
            to: 'https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover'
          },
          {
            label: `Azure Machine Learning`,
            to: 'https://azure.microsoft.com/products/machine-learning?WT.mc_id=aiml-89446-dglover'
          },
          {
            label: `Azure Cognitive Services`,
            to: 'https://azure.microsoft.com/products/cognitive-services/#overview?WT.mc_id=aiml-89446-dglover'
          },
          {
            label: `Responsible AI`,
            to: 'https://azure.microsoft.com/solutions/ai/responsible-ai-with-azure/#overview?WT.mc_id=aiml-89446-dglover'
          },
          {
            label: 'Privacy Statement',
            to: 'https://privacy.microsoft.com/privacystatement',
          },
          { 
           label: `Copyright © ${new Date().getFullYear()} Azure Advocates`,
           to: 'https://microsoft.com'
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      // TODO: Configure to provide default OpenGraph Metadata 
      image: 'https://azureaidevs.github.io/hub/img/azure-ai.png',
      description: 'Explore Azure AI Development with #30DaysOfAzureAI',
      // metadata: [
      //   { 
      //     name: 'twitter:url', 
      //     content: 'https://aka.ms/ai-april'
      //   },
      //   { 
      //     name: 'twitter:title', 
      //     content: '#AiApril is here!'
      //   },
      //   { 
      //     name: 'twitter:description', 
      //     content: 'Explore Azure AI Development with #AiApril and #30DaysOfAzureAI'
      //   },
      //   { 
      //     name: 'twitter:image', 
      //     content: 'https://azureaidevs.github.io/hub/img/azure-ai.png' 
      //   },
      //   { 
      //     name: 'twitter:card', 
      //     content: 'summary_large_image'
      //   },
      //   { 
      //     name: 'twitter:creator', 
      //     content: '@dglover'
      //   },
      //   { 
      //     name: 'twitter:site', 
      //     content: '@AzureAdvocates'
      //   },
      // ],

      /* Banner Announcements */
      announcementBar: {
        id: 'AI April kicks off April 3, 2023!',
        content:
          '<b> <a href="https://aka.ms/azure-ai-dev-newsletter"> Sign up to the Azure AI Developers Newsletter! </a> | Give us <a href="https://github.com/AzureAiDevs/hub"><b> a 🌟 on GitHub</b></a> </b> ',
        backgroundColor: '#000000', /* '#050D20',*/
        textColor: '#ffffff', /* '#4DC7B2', */
        isCloseable: false,
      },

      /* Clarity Config */
      clarity: {
        ID: "g4kwvolums", 
      }

    }),


  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1000, // max resized image's size.
        min: 420, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'newsletter',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'newsletter',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './newsletter',
      },
    ],
    [
      'docusaurus-plugin-clarity',
      {
      }
    ],
  ],
};

module.exports = config;