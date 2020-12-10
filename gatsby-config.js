module.exports = {
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "This is description of gatsby Project created by sudthenerd",
    keywords: 'gatsby, gatsbyjs project, sudthenerdGatsbyProject',
    image: '/static/gatsby.jpg',
    url: 'http://www.expertstmp.com/'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby-Bootstrap offline`,
        short_name: `Gatsby-Bootstrap offline`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'static/gatsby.jpg'
      },
    },
    {
      resolve: `gatsby-plugin-offline`
    }
  ],
}
