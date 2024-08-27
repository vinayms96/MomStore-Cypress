const SIGN_IN_BTN = '[title="My Account"]';

class HeaderPage {
    public get signInButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SIGN_IN_BTN);
    }
}

export default new HeaderPage();