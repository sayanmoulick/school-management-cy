// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("LoginAPI",()=> {

    cy.request("POST","http://localhost:5000/AdminLogin",
    {"email":"testqa1@school.com","password":"!Aworker2#"}).
    then(function(response)
    {
        expect(response.status).to.eq(200);
       Cypress.env('user',JSON.stringify(response.body));
    })
})

/*
Cypress.Commands.add("ifElementExists", (selector, attempt = 0) => {
  if (attempt === 100) return null           // no appearance, return null
  if (Cypress.$(selector).length === 0) {
    cy.wait(100, {log:false})                // wait in small chunks
      .then(() => ifElementExists(selector, ++attempt))      // try again
  }
  return cy.get(selector, {log:false})       // done, exit with the element
})
*/
