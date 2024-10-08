describe('Connect to Databases', () => {
    let dbCreds: DbCreds;

    before(() => {
        cy.fixture('credentials').then((data) => {
            dbCreds = data.dbCreds;
        });
    })

    it('Postgres DB', () => {
        cy.task('connectDB', dbCreds).then((response) => {
            cy.log(JSON.stringify(response.rows[0]));
            console.log(response.rows[0]);
        });
    })
})