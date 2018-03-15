const metadata = require(`./src/theme/metadata.js`);
const theme = require(`./src/theme/main.js`);

module.exports = {
  siteMetadata: metadata,

  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/favicon.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-catch-links`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: theme.content.imageMaxWidthPx,
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: metadata.googleAnalyticsTrackingId,
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        appId: metadata.facebookAppId,
        includeInDevelopment: false,
        debug: false,
        language: `en_US`,
      },
    },
  ],
};
