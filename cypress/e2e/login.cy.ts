import headerPage from "../pages/header.page";
import loginPage from "../pages/login.page";
import myaccountPage from "../pages/myaccount.page";

describe('Verify Login Features', () => {
    let cred: Credentials;
    beforeEach(() => {
        cy.fixture('credentials').then((credentials) => {
            cred = credentials.creds;
        });
    });
    it('Validate fields visibility', () => {
        cy.visit('/');
        headerPage.signInButton.click();

        loginPage.emailField.should('be.visible');
        loginPage.passwordField.should('be.visible');
        loginPage.signInButton.should('be.visible');
    });

    it('Validate fields enabled', () => {
        cy.visit('/');
        headerPage.signInButton.click();

        loginPage.emailField.should('be.enabled');
        loginPage.passwordField.should('be.enabled');
        loginPage.signInButton.should('be.enabled');
    });

    it('Validate invalid credentials', () => {
        cy.visit('/');
        headerPage.signInButton.click();

        loginPage.emailField.clear().type('test@gmail.com');
        loginPage.passwordField.clear().type('password');
        loginPage.signInButton.click();

        loginPage.invalidEmailPasswordErrorMsg.should('have.text', 'Incorrect email or password.');
    });

    it('Validate valid credentials', () => {
        cy.visit('/');
        headerPage.signInButton.click();

        loginPage.emailField.clear().type(cred.username);
        loginPage.passwordField.clear().type(cred.password);
        loginPage.signInButton.click();

        cy.url().should('contain', '/account');
        myaccountPage.myAccountPageTitle.should('have.text', 'My Account');
    });
});