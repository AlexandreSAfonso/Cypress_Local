const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:defineConfig.experimentalStudio,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
