module.exports = {
  ...require("config/eslint-preset"),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["packages/*/tsconfig.json"],
      },
    },
  },
};
