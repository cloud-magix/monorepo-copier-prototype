const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig-base.json');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  projects: ['<rootDir>/libs/lib-a'],
};
