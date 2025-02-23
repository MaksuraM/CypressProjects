import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

Given('I visit website and login', function () {
    cy.visit('https://www.automationexercise.com/login')
    cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)').type('qa_test@ymail.com')
    cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)').type('qa12345')
    cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button').click()
    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a').should('have.value', 'Logged in as')
});

When('I add to cart', function () {
    
});

Then('I purchase', function () {
    
});
