import headerPage from "../pages/header.page";

describe('Verify Login Features', () => {
    let cred: Credentials;
    beforeEach(() => {
        cy.fixture('credentials').then((credentials) => {
            cred =credentials.creds;

            
        });
    });

    it('Validate fields visibility', () => {
        cy.login(cred.username, cred.password);
    })
});