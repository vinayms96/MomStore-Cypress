const LISTING_PAGE_TITLE = 'div h1';
const LISTING_PAGE_PRODUCTS_LIST = '#product-grid product-card';
const LISTING_PRODUCT_LINK = '.product-card-title-cover a';

class ListingPage {
    public get listingPageTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(LISTING_PAGE_TITLE);
    }

    public get listingPageProductsList(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(LISTING_PAGE_PRODUCTS_LIST);
    }

    public listingPageProductLink(productToOpen: number): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(LISTING_PAGE_PRODUCTS_LIST)
              .eq(productToOpen)
              .find(LISTING_PRODUCT_LINK)
              .invoke('attr', 'href');
    }
}

export default new ListingPage();