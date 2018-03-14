const metadata = require(`./src/theme/metadata.js`);

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
