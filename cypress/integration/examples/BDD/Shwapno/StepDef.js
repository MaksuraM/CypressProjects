import {
  DataTable,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';
import HomePageShwapno from "../PageObjects/HomePageShwapno";

const homePageShwapno = new HomePageShwapno();

beforeEach(function () {
  // Load fixture data before each test case
  cy.fixture('example').then(function (data) {
    this.data = data;
  });
});

Given('I open Shawpno Home Page', function () {
  cy.visit("https://meenabazaronline.com/");
});

Then('I close the pop-up if it appears', function () {
  cy.get('img[alt="pop-up-banner"]', { timeout: 5000 }).then(($popup) => {
    if ($popup.is(':visible')) {
      cy.wrap($popup).click({ force: true });
      cy.wait(1000); // Ensure the pop-up is removed
    }
  });
  cy.get('img[alt="pop-up-banner"]').should('not.exist');
});

Then('I check no popup is there', function () {
  cy.get('img[alt="pop-up-banner"]').should('not.exist');
});

When('I Locate notification & Block notification', function () {
  Cypress.on('window:before:load', (win) => {
    cy.stub(win.Notification, 'requestPermission').resolves('denied');
    console.log('Notifications Blocked');
  });
});

Then('I Locate popup & Block popup', function () {
  cy.on('window:confirm', (text) => {
    console.log('Confirm pop-up detected:', text);
    return false; // Simulate clicking "No"
  });
  cy.log('Test completed!');
});
