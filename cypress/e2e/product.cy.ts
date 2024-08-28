import listingPage from "../pages/listing.page";
import productPage from "../pages/product.page";

describe('Product Page Validation', () => {
    it('Validate product details', () => {
        cy.visit('/collections/kids-casual-wear');

        listingPage.listingPageProductLink(1).then((link) => {
            const productLink = JSON.stringify(link).split('"')[1];
            const productNameSplits = productLink.split('/');
            const productName = productNameSplits[productNameSplits.length - 1];

            cy.intercept(`**/${productName}.json**`).as('productDetails');
            cy.visit(productLink);

            cy.wait('@productDetails').then((interception) => {
                const responseBody = interception.response?.body.product;

                // Product name
                productPage.productName.should('have.text', responseBody.title);
                // Product type
                productPage.productType.should('have.text', responseBody.product_type);
                // Product original price
                productPage.productOriginalPrice.invoke('text').then((originPrice) => {
                    const formattedOriginPrice = originPrice.replace(/[^0-9]/g, '');
                    const compareAtPrice = responseBody.variants[0].compare_at_price.split('.')[0];
                    expect(formattedOriginPrice).to.contain(compareAtPrice);
                });
                // Product offer price
                productPage.productOfferPrice.invoke('text').then((offerPrice) => {
                    const formattedOriginPrice = offerPrice.replace(/[^0-9]/g, '');
                    const compareAtPrice = responseBody.variants[0].price.split('.')[0];
                    expect(formattedOriginPrice).to.contain(compareAtPrice);
                });
            });
        });
    });
});