module.exports = {
  siteMetadata: {
    name: "Faanus.io",
    description: "Ask your any question to your friends!",
    keywords: [
      "React",
      "Gatsby",
      "FaunaDB",
      "Netlify Continuous Deployment",
      "Netlify Identity Widget",
      "Netlify Serverless functions",
      "Apollo",
      "GraphQL",
    ],
    siteUrl: "https://tender-edison-bf1a91.netlify.app",
    siteImage: "images/comments-app-open-graph-image.jpg",
    profileImage: ``,
    lang: `en`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/PagesLayout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
  ],
};
