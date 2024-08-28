import headerPage from "../pages/header.page";
import loginPage from "../pages/login.page";

export {};
// ***********************************************
// This example commands.ts shows you how to
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
//
declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
    }
  }
}

function login(username: string, password: string) {
  cy.session([username, password], () => {
    cy.visit("/");
    headerPage.signInButton.click();
    loginPage.emailField.clear().type(username);
    loginPage.passwordField.clear().type(password);
    loginPage.signInButton.click();
  });
  cy.visit('/');
}

Cypress.Commands.add("login", login);
