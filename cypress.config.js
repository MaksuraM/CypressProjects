const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const mochawesome = require("cypress-mochawesome-reporter/plugin"); // ✅ Import correctly

async function setupNodeEvents(on, config) {
  config.db = {
    userName: "rsa",
    password: "Azure!10",
    server: "rsadbdemo2.database.windows.net",
    options: {
      database: "rahulshettyacademy",
      encrypt: true,
      rowCollectionOnRequestCompletion: true,
    },
  };

  // ✅ Corrected setup of Cypress Cucumber Preprocessor
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // ✅ Corrected Mochawesome plugin setup
  mochawesome(on); 

  // ✅ Setup file preprocessor
  on("file:preprocessor", browserify.default(config));

  return config; // ✅ Ensure modified config is returned
}

async function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    });
  });
  return output;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    printLogsToConsole: "always",
    outputRoot: "cypress/logs",
    outputTarget: {
      "cypress/logs/console.txt": "txt",
      "cypress/logs/console.json": "json"},
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    runMode: 1,
  },
  projectId: "nodpcq",
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/examples/BDD/**/*.feature", // ✅ Finds all feature files
    stepDefinitions: "cypress/integration/examples/BDD/APItesting/*.js" // ✅ Finds all step definitions
  },
});


