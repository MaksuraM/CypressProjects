import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

Given('I visit shwapno website', function () {
    cy.visit('https://www.shwapno.com/');
});

When('I Block notification', function () {
    Cypress.on('window:before:load', (win) => {
        cy.stub(win.Notification, 'requestPermission').resolves('denied');
        console.log('Notifications Blocked');
    })
});

Then('I Block popup', function () {
    cy.on('window:confirm', (text) => {
        console.log('Confirm pop-up detected:', text);
        return false; // Clicking "No"
      });
      cy.log('Test completed!')
 });
