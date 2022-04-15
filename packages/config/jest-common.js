module.exports = {
  resetMocks: true,
  moduleDirectories: ["node_modules"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};
