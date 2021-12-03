const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  typescript: { reactDocgen: false },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: (config, { isServer }) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            implementation: require("postcss"),
            postcssOptions: {
              plugins: {
                "postcss-import": {},
                tailwindcss: {},
                "postcss-extend": {},
                "postcss-nested": {},
                autoprefixer: {},
              },
              config: false,
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
  core: {
    builder: "webpack5",
  },
};
