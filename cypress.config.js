const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:81',
    setupNodeEvents(on, config){

    },
    env: {
      hideCredentials: true,
      requestMode: true,
      snapshotOnly: true
    },
  },
  fixturesFolder: false,
  video: false,
})
