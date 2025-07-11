describe('Security testing', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
    if (Cypress.env('CYPRESS_UNCAUGHT_EXC') === 'true'){
      return true
    } else {
      return false 
    }
  })  
  it('checks for XSS vulnerability', () => {
    cy.log(`Try to acess: ${Cypress.env('CYPRESS_TARGET_URL') }`);
    console.log(`Try to acess: ${Cypress.env('CYPRESS_TARGET_URL') }`);
    cy.visit(Cypress.env('CYPRESS_TARGET_URL'));
    cy.get('#E-mail').type('<script>alert("XSS")</script>');
    cy.get('form').submit();
    cy.contains('<script>alert("XSS")</script>').should('not.exist');
  });


  // it('checks for CSRF vulnerability', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: `${Cypress.env('TARGET_URL') }users-management`,      form: true,
  //     body: {
  //       name: 'John Doe',
  //       email: 'john.doe@example.com'
  //     }
  //   }).then((response) => {
  //     expect(response.status).to.eq(403);
  //   });
  // });


  // it.only('checks for SQL injection vulnerability', () => {
  //   cy.visit(`${Cypress.env('TARGET_URL') }search?query=1 OR 1=1`);
  //   cy.contains('Error:').should('not.exist');
  // });
});