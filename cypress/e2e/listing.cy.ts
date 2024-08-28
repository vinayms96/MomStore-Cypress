import listingPage from "../pages/listing.page";

describe('Listing page validation', () => {
    it('Validate page title', () => {
        cy.visit('/collections/kids-casual-wear');

        listingPage.listingPageTitle.should('have.text', 'Kids Casual Wear');
    });

    it('Validate product count', () => {
        cy.visit('/collections/kids-casual-wear');

        listingPage.listingPageProductsList.should('have.length', 30);
    });
});