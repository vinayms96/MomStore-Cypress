const SIGN_IN_BTN = '[title="My Account"]';
const SEARCH_BAR = '.hidden-mobile .st-search-input';
const CART_COUNTER = '#cart-drawer-toggle span';

class HeaderPage {
    public get signInButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SIGN_IN_BTN);
    }

    public get searchBar(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SEARCH_BAR);
    }

    public get cartCounter(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CART_COUNTER);
    }
}

export default new HeaderPage();