const PRODUCT_NAME = 'h1.product-title';
const PRODUCT_TYPE = '.marp_text li:nth-child(3) a';
const PRODUCT_ORIGINAL_PRICE = '.product-price-container del span.money';
const PRODUCT_OFFER_PRICE = '.product-price-container ins span.money';

class ProductPage {
    public get productName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PRODUCT_NAME);
    }

    public get productType(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PRODUCT_TYPE);
    }

    public get productOriginalPrice(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PRODUCT_ORIGINAL_PRICE);
    }

    public get productOfferPrice(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PRODUCT_OFFER_PRICE);
    }
}

export default new ProductPage();