const CART_PRODUCT_NAME = '.product-cart-item--container .cart-product-link';
const CART_PRODUCT_SIZE_COLOR = '.product-cart-item--container .product-cart-item-options';
const CART_DRAWER = '.cart-drawer';
const CART_PRODUCT_OFFER_PRICE = '.product-cart-item-price .amount';
const CART_PRODUCT_ADDED_QTY = '.small-qty .qty';

class CartPage {
    public get cartDrawer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CART_DRAWER);
    }

    public get cartProductName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CART_PRODUCT_NAME);
    }

    public get cartProductSizeColor(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CART_PRODUCT_SIZE_COLOR);
    }

    public get cartProductOfferPrice(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CART_PRODUCT_OFFER_PRICE);
    }

    public get cartProductAddedQty(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CART_PRODUCT_ADDED_QTY);
    }
}

export default new CartPage();