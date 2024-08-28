const EMAIL_FIELD = '[name="customer[email]"]';
const PASSWORD_FIELD = '[name="customer[password]"]';
const SIGN_IN_BUTTON = '#login [type="submit"]';
const INVALID_EMAIL_PASSWORD_ERROR_MSG = '.errors li';

class LoginPage {
    public get emailField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(EMAIL_FIELD);
    }

    public get passwordField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PASSWORD_FIELD);
    }

    public get signInButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SIGN_IN_BUTTON);
    }

    public get invalidEmailPasswordErrorMsg(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(INVALID_EMAIL_PASSWORD_ERROR_MSG);
    }
}

export default new LoginPage();
