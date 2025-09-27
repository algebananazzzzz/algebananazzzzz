import type { GatsbyConfig } from "gatsby"
import path from "path";

// Format build date
const date = new Date();
const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
const formatted = date.toLocaleDateString("en-US", options);

const isPreprod = process.env.DEPLOY_ENV === "preprod"
const pathPrefix = isPreprod ? "/algebananazzzzz" : ""

const config: GatsbyConfig = {
  // Change this according to your repository name
  pathPrefix,
  siteMetadata: {
    title: `Daniel's Website`,
    siteUrl: `https://www.yourdomain.tld`,
    lastUpdated: formatted,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.resolve(__dirname, "src/assets/svg"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel's Website`,
        short_name: `Nocturnal`,
        start_url: `/`,
        icon: "src/assets/images/icon.png",
      },
    },
  ],
}

export default config
