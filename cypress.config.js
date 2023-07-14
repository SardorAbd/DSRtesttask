const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e:{
        baseUrl:"https://vladimirwork.github.io/web-ui-playground/",
        setupNodeEvents(on, config){
            on('before:browser:launch', (browser = {}, launchOptions) => {

            })
        },
        
    }
})