const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsBuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const blunder = createBundler({
        plugins: [nodePolyfills(), createEsBuildPlugin(config)],
      })

      on('file:preprocessor', blunder)

      addCucumberPreprocessorPlugin(on, config)

      // implement node event listeners here
      config.defaultCommandTimeout = 10000
      config.viewportWidth = 1024
      config.viewportHeight = 768

      return config
    },
    specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    env: {
      url: 'https://www.google.com/',
    },
  },
})
