import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

Given('I get user data', function () {
  cy.request('GET', 'https://jsonplaceholder.typicode.com/users').as('userData');
});
When('I validate the GET response status', function (statusCode) {
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

Given('I post user data', function () {
  cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
    title: 'Cypress API Test',
    body: 'This is a test post',
    userId: 1,
  }).as('userData')
});
When('I validate the POST response status', function (statusCode) {
  cy.get('@userData').then((response) => {
    expect(response.status).to.eq(201);
  });
});
Then('I ensure the response contains the correct data I have created', function () {
  cy.get('@userData').then((response) => {
    expect(response.body).to.have.property('title', 'Cypress API Test');
  });
});

Given('I update user data with PATCH', function () {
  cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Updated Cypress API Test',
  }).as('updatedUserData');
});
When('I validate the PATCH response status', function () {
  cy.get('@updatedUserData').then((response) => {
    expect(response.status).to.eq(200); // Typical status for a successful PATCH
  });
});
Then('I ensure the PATCH response contains the updated data', function () {
  cy.get('@updatedUserData').then((response) => {
    expect(response.body).to.have.property('title', 'Updated Cypress API Test');
  });
});

Given('I delete user data', function () {
  cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').as('deletedUserData');
});
When('I validate the DELETE response status', function () {
  cy.get('@deletedUserData').then((response) => {
    expect(response.status).to.eq(200); // Some APIs return 204 for DELETE
  });
});
Then('I ensure the data is deleted successfully', function () {
  cy.get('@deletedUserData').then((response) => {
    expect(response.body).to.be.empty; // JSONPlaceholder returns an empty object {}
  });
});

Given('I update user data with PUT', function () {
  cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Completely Updated Cypress API Test',
    body: 'This is the updated post body',
    userId: 1,
  }).as('updatedUserData');
});
When('I validate the PUT response status', function () {
  cy.get('@updatedUserData').then((response) => {
    expect(response.status).to.eq(200); // Typical status for a successful PUT
  });
});
Then('I ensure the PUT response contains the updated data', function () {
  cy.get('@updatedUserData').then((response) => {
    expect(response.body).to.have.property('title', 'Completely Updated Cypress API Test');
    expect(response.body).to.have.property('body', 'This is the updated post body');
    expect(response.body).to.have.property('userId', 1);
  });
});

Given('I create user data', function () {
  cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
    title: 'Cypress API Test',
    body: 'This is a test post',
    userId: 1,
  }).as('createdUserData');
  cy.get('@createdUserData').then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('title', 'Cypress API Test');
    expect(response.body).to.have.property('body', 'This is a test post');
    expect(response.body).to.have.property('userId', 1);
  });
});
When('I fetch user data', function () {
  // Fetch a known post instead of the newly created one
  cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').as('fetchedUserData');
  cy.get('@fetchedUserData').then((response) => {
    expect(response.status).to.eq(200);
  });
});
Then('I ensure the response contains the correct data', function () {
  cy.get('@fetchedUserData').then((response) => {
    expect(response.body).to.have.property('id', 1);
    expect(response.body).to.have.property('title'); // Generic validation
  });
});

Given('I create mock data', function () {
  cy.intercept('GET', '/users', {
    statusCode: 200,
    body: [{ id: 1, name: 'Mocked User' }],
  }).as('mockedUsers');
});
When('I hit Mock Server', function () {
  cy.visit('https://jsonplaceholder.typicode.com/users');
});
Then('I ensure the response contains the mock data', function () {
  cy.wait('@mockedUsers').then(({ response }) => {
    expect(response.statusCode).to.eq(200);
    expect(response.body[0]).to.have.property('name', 'Mocked User');
  })
});
