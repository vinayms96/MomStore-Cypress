import headerPage from "../pages/header.page";
import searchPage from "../pages/search.page";

describe('Search Functionality', () => {
    const searchText = 'Kids Dress';
    it('Search for products', { tags: ['regression'] }, () => {
        cy.visit('/');
        headerPage.searchBar.clear().type(`${searchText}{enter}`);

        cy.url().should('contain', `/searchtap-search?q=${encodeURI(searchText.toLowerCase())}`);
        searchPage.searchPageTitle.should('have.text', 'Search Results');
    });

    it('Verify search text and Product count', { tags: ['regression'] }, () => {
        cy.visit('/');
        headerPage.searchBar.clear().type(`${searchText}{enter}`);

        // Search text
        cy.url().should('contain', `/searchtap-search?q=${encodeURI(searchText.toLowerCase())}`);
        searchPage.searchResultText.should('have.text', `"${searchText.toLowerCase()}"`);

        // Product display count
        searchPage.searchProductsList.should('have.length', 24);
  });
});