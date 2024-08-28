const SEARCH_PAGE_TITLE = 'div h1';
const SEARCH_RESULT_TEXT = 'span.st-summary-label strong';
const SEARCH_PRODUCTS_LIST = '#st-results-list .st-product-card';

class SearchPage {
    public get searchPageTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SEARCH_PAGE_TITLE);
    }

    public get searchResultText(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(SEARCH_RESULT_TEXT).eq(1);
    }

    public get searchProductsList(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(SEARCH_PRODUCTS_LIST);
    }
}

export default new SearchPage();