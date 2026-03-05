const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.feature",

    // ✅ Ajustes para reduzir falhas por instabilidade de carregamento
    pageLoadTimeout: 120000,        // espera até 120s pelo evento "load"
    defaultCommandTimeout: 10000,   // comandos (get/type/click) até 10s
    requestTimeout: 15000,          // requisições cy.request até 15s
    responseTimeout: 15000,         // resposta até 15s

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});