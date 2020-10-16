import dotenv from 'dotenv';

dotenv.config();

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton!',
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'dgrl08oo',
        dataset: 'production',
        whatchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
