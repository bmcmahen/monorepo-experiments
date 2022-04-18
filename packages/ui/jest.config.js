const { pathsToModuleNameMapper } = require("ts-jest/utils");

const { compilerOptions } = require("./tsconfig");

module.exports = {
  ...require("config/jest-common"),
  rootDir: ".",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
