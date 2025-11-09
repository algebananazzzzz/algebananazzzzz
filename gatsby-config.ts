import type { GatsbyConfig } from "gatsby"
import path from "path";

// Load environment variables
const pathPrefix = process.env.PATH_PREFIX || "/algebananazzzzz";
const siteUrl = process.env.SITE_URL || "https://www.yourdomain.tld";
const siteTitle = process.env.SITE_TITLE || "Daniel Zhou";
const shortName = process.env.SITE_SHORT_NAME || "Daniel Zhou";

// Format build date
const date = new Date();
const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
const formatted = date.toLocaleDateString("en-US", options);

const config: GatsbyConfig = {
  pathPrefix,
  siteMetadata: {
    title: siteTitle,
    siteUrl,
    lastUpdated: formatted,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }: any) => {
          return allPages.map((page: any) => ({
            ...page,
            changefreq: 'weekly',
            priority: 0.7,
          }));
        },
        serializeUrl: ({ path }: any) => ({
          url: path,
          changefreq: 'weekly',
          priority: 0.7,
        }),
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: false,
        openAnalyzer: false, // Set to true to auto-open report in browser
        analyzerPort: 3000,
        reportFilename: 'bundle-report.html',
      },
    },
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
        name: siteTitle,
        short_name: shortName,
        start_url: `/`,
        icon: "src/assets/images/icon.png",
      },
    },
  ],
}

export default config
