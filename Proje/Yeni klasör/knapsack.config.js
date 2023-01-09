const { configureKnapsack } = require("@knapsack/app");
const { join } = require("path");
// const TwigRenderer = require("@knapsack/renderer-twig");
const {
  KnapsackWebComponentRenderer
} = require("@knapsack/renderer-web-components");
const { KnapsackVueRenderer } = require("@knapsack/renderer-vue");
const { KnapsackReactRenderer } = require("@knapsack/renderer-react");
// const {
//   configure: configureChangelogMd
// } = require("@knapsack/plugin-changelog-md");
// const { configure: configureAdobeDsp } = require('@knapsack/plugin-adobe-dsp');

// @todo: enable once the DSP import plugin ships
// const { configure: configureAdobeDspImport } = require('@knapsack/plugin-adobe-dsp-import');

const webpack = require("webpack");
const babelConfig = require("@knapsack/babel-config/es");
const webpackConfig = require("./webpack.config");
const { version } = require("./package.json");
const { ksPublic, ksPublicDist } = require("./config");

module.exports = configureKnapsack({
  designTokens: {
    createCodeSnippet: (token) => `$${token.name}`,
    tokensPath: join(ksPublicDist, "design-tokens.json")
  },
  dist: "./dist",
  public: ksPublic,
  data: "./data",
  version,
  templateRenderers: [
    new KnapsackReactRenderer({
      webpackConfig,
      webpack,
      babelConfig,
      demoWrapperPath: join(__dirname, "./demo-wrapper.jsx")
    }),
    new KnapsackWebComponentRenderer(),
    new KnapsackVueRenderer({
      webpackConfig,
      webpack,
      babelConfig
    })
    // new TwigRenderer({
    //   src: {
    //     roots: ['./src'],
    //     namespaces: [
    //       {
    //         id: 'components',
    //         recursive: true,
    //         paths: ['./src/components'],
    //       },
    //       {
    //         id: 'pages',
    //         recursive: true,
    //         paths: ['./src/pages'],
    //       },
    //     ],
    //   },
    //   alterTwigEnv: [
    //     {
    //       file: join(__dirname, './alter-twig.php'),
    //       // names of functions from this ^ file to execute
    //       functions: ['addCustomExtension'],
    //     },
    //   ],
    // }),
  ],
  plugins: [
    // configureChangelogMd({
    //   changelogPath: './CHANGELOG.md',
    // }),
    // @todo: re-enable once Puppeteer building working on Heroku (https://dashboard.heroku.com/apps/ks-demo-bootstrap-prod/activity/builds/61b52596-d5bb-4476-870c-e0e316bf2603)
    // configureAdobeDsp({
    //  outputDir: './ks-public/adobe-dsp',
    // }),
    // @todo: enable once the DSP import plugin ships
    // configureAdobeDspImport(),
  ],
  cloud: {
    siteId: "ks-demo-bootstrap",
    repoName: "ks-demo-bootstrap",
    repoOwner: "knapsack-cloud",
    baseBranch: "main"
  }
});
