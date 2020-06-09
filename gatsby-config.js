require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Royce Fan`,
    siteTitleAlt: `Royce Fan - Full Stack Dev`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About Me`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `instagram`,
            url: `https://www.instagram.com/ricefan95/`,
          },
          {
            name: `github`,
            url: `https://github.com/fanrice123/`,
          },
        ],
      },
    },
    //{
    //  resolve: `gatsby-plugin-google-analytics`,
    //  options: {
    //    trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //  },
    //},
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Royce Fan - Dev blog `,
        short_name: `minimal-blog`,
        description: `null`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
