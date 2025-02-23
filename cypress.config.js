const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

// ✅ Define project-specific configurations
const projects = {
  MeenaBazar: {
    specPattern: "cypress/integration/examples/BDDM/*.feature",
    stepDefinitions: "cypress/integration/examples/BDDM/**/*.js",
  },
  Shwapno: {
    specPattern: "cypress/integration/examples/BDD/*.feature",
    stepDefinitions: "cypress/integration/examples/BDD/**/*.js",
  },
  APITesting: {
    specPattern: "cypress/integration/examples/BDDA/**/*.feature",
    stepDefinitions: "cypress/integration/examples/BDDA/**/*.js",
  },
};

// ✅ Determine which project(s) to run
const projectName = process.env.CYPRESS_PROJECT_NAME;
const selectedProjects =
  !projectName || projectName === "null"
    ? Object.values(projects) // If CYPRESS_PROJECT_NAME is null, run all projects
    : [projects[projectName]].filter(Boolean); // Run the selected project

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

  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  mochawesome(on);
  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    printLogsToConsole: "always",
    outputRoot: "cypress/logs",
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    outputTarget: {
      "cypress/logs/console.txt": "txt",
      "cypress/logs/console.json": "json",
    },
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
    specPattern: selectedProjects.map((p) => p.specPattern),
    stepDefinitions: selectedProjects.map((p) => p.stepDefinitions),
  },
});
