import cartPage from "../pages/cart.page";
import headerPage from "../pages/header.page";
import listingPage from "../pages/listing.page";
import productPage from "../pages/product.page";

describe('Verify cart page', () => {
    it('Validate product details', () => {
        cy.visit('/collections/kids-casual-wear');

        listingPage.listingPageProductLink(1).then((link) => {
            const productLink = JSON.stringify(link).split('"')[1];
            cy.visit(productLink);

            // Verify cart product counter before adding product
            headerPage.cartCounter.should('have.text', 0);

            // Add product to cart
            productPage.addToCartBtn.click();
            productPage.addToCartBtn.invoke('attr', 'class').should('not.contain', 'loading');
            cartPage.cartDrawer.should('be.visible');

            // Verify cart product counter after adding product
            headerPage.cartCounter.should('have.text', 1);

            // Verify product name
            productPage.productName.invoke('text').then((productName) => {
                cartPage.cartProductName.should('have.text', productName);
            });

            // Verify product size and color
            productPage.productColorName.invoke('text').then((colorName) => {
                productPage.productSizeName.invoke('text').then((sizeName) => {
                    const sizeAndColor = `${sizeName}, ${colorName}`;
                    cartPage.cartProductSizeColor.should('contain', sizeAndColor);
                });
            });

            // Verify product quantity
            productPage.productQtyAdded.invoke('attr', 'value').then((qtyAdded) => {
                cartPage.cartProductAddedQty.should('have.value', qtyAdded);
            })

            // Verify product offer price
            productPage.productOfferPrice.invoke('text').then((offerPrice) => {
                cartPage.cartProductOfferPrice.should('have.text', offerPrice);
            });
        });
    });
});