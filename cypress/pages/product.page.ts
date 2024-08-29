const PRODUCT_NAME = 'h1.product-title';
const PRODUCT_TYPE = '.marp_text li:nth-child(3) a';
const PRODUCT_ORIGINAL_PRICE = '.product-price-container del span.money';
const PRODUCT_OFFER_PRICE = '.product-price-container ins span.money';
const PRODUCT_COLOR_NAME = '.product-information--inner [data-handle="color"] div span';
const PRODUCT_SIZE_NAME = '.product-information--inner [data-handle="size"] .form__label__value';
const ADD_TO_CART_BTN = '#AddToCart';
const PRODUCT_QTY_ADDED ='.product-form .qty';

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

    public get productColorName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PRODUCT_COLOR_NAME);
    }

    public get productSizeName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PRODUCT_SIZE_NAME);
    }

    public get addToCartBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ADD_TO_CART_BTN);
    }

    public get productQtyAdded(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PRODUCT_QTY_ADDED);
    }
}

export default new ProductPage();