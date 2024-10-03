const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", browserify.default(config));
    require('cypress-mochawesome-reporter/plugin')(on);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/*.feature",
    baseUrl: "http://local.demo.in:3000",
    chromeWebSecurity: false,
    defaultCommandTimeout: 6000,

    reporter: 'cypress-mochawesome-reporter',

    retries: {
      runMode: 1,

    },

    video: true,
  },
});
