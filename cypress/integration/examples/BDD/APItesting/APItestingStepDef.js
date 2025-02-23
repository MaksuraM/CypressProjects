import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

Given('I get user data', function () {
  cy.request('GET', 'https://jsonplaceholder.typicode.com/users').as('userData');
});
When('I validate the response status', function (statusCode) {
  cy.get('@userData').then((response) => {
    expect(response.status).to.eq(200);
  });
});
Then('I ensure the first user has a "name" property', function () {
  cy.get('@userData').then((response) => {
    expect(response.body).to.have.length(10);
    expect(response.body[0]).to.have.property('name');
  });
});
