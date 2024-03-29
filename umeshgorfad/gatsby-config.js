module.exports = {
  siteMetadata: {
    title: `Electrical Engineer`,
    description: `My personal portfolio website`,
    author: `@umeshg`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `umesh`,
        short_name: `umesh`,
        start_url: `/`,
        background_color: `#111a28`,
        theme_color: `#1d293a`,
        display: `minimal-ui`,
        icon: `src/assets/image/favicon2.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn m ore, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
