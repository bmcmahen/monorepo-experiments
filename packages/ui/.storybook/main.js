const { mergeConfig } = require("vite");
const tsconfigPaths = require("vite-tsconfig-paths");

module.exports = {
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths.default()],
    });
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
