const MY_ACCOUNT_PAGE_TITLE = '.myaccount--title';

class MyAccountPage {
    public get myAccountPageTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MY_ACCOUNT_PAGE_TITLE);
    }
}

export default new MyAccountPage();