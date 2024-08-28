const SIGN_IN_BTN = '[title="My Account"]';
const SEARCH_BAR = '.hidden-mobile .st-search-input';

class HeaderPage {
    public get signInButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SIGN_IN_BTN);
    }

    public get searchBar(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SEARCH_BAR);
    }
}

export default new HeaderPage();