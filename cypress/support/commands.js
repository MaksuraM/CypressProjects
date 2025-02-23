// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Handle uncaught exceptions to ignore the unexpected token error
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore the specific error that contains 'Unexpected token <' in the message
  if (err.message.includes('Unexpected token <')) {
    return false; // Prevent Cypress from failing the test for this error
  }
  return true; // For other errors, allow Cypress to fail the test
});

// Custom command to select a product from the list based on product name
Cypress.Commands.add('selectProduct', (productName) => {
  if (!productName || typeof productName !== 'string') {
    throw new Error('A valid product name must be provided');
  }

  cy.get('h4.card-title').each(($e1, index, $list) => {
    const text = $e1.text().trim(); // Trim whitespace from product name text
    if (text.includes(productName)) {
      // Find the corresponding button for the product and click it
      cy.get('button.btn.btn-info').eq(index).click();
    }
  });
});

// Example of how to overwrite an existing command (optional)
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  // You could add custom behavior here before visiting the URL
  originalFn(url, options);
});

// Example of other custom commands (optional, for demonstration purposes)
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (grandTotal) => { ... })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

