module.exports = {
  siteMetadata: {
    title: `Aliyeva Hukuk`,
    description: `Aliyeva Hukuk is a law firm`,
    author: `gunay.aliyeva`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aliyeva Hukuk`,
        short_name: `aliyevahukuk`,
        start_url: `/`,
        background_color: `#efefef`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
