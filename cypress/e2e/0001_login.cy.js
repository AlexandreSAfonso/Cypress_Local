describe('template spec', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
    if (Cypress.env('CYPRESS_UNCAUGHT_EXC') === 'true'){
      return true
    } else {
      return false 
    }
  })
  beforeEach(() => {
    // This will run before each test in the block
    cy.viewport(1280, 960);
    cy.visit(Cypress.env('CYPRESS_TARGET_URL'));

  });

  it("Try access other Pages", () => {
    //List all pages to restrict access 
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }users-management` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }overview` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }products` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }products/equines` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }products/receptors` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }products/coberturas` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }products/embryos` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }products/settings` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }reproductions` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }reproductions/schedule` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }reproductions/requests` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }auctions` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }billings` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }billings/management` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }financial` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }financial/invoices` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }financial/expenses` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }financial/sales` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }financial/withdrawal` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }financial/walletManagement` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }financial/extract` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }financial/advance` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }events` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }customers` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }farm` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }users-management` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }reports` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }publications` );
    cy.url().should('not.eq', `${Cypress.env('TARGET_URL') }file-import` );
  });
  
  it("Login with Incorrect Credentials", () => {
    cy.get('[data-test-id="input-email"]')
      .click({force: true})
    cy.get('[data-test-id="input-email"]')
      .type(Cypress.env('CYPRESS_TARGET_MAIN_USER_NAME'), { waitForAnimations: false });
    cy.get('[data-test-id="input-password"]')
      .type('needs to be wrong');
    cy.get('[data-test-id="button-login"]')
      .click();
    cy.url().should('eq', `${Cypress.env('CYPRESS_TARGET_URL') }login`);
  });
  
  it("Login with Correct Credentials", () => {
    cy.get('[data-test-id="input-email"]')
      .click({force: true})
    cy.get('[data-test-id="input-email"]')
      .type(Cypress.env('CYPRESS_TARGET_MAIN_USER_NAME'));
    cy.get('[data-test-id="input-password"]')
      .type(Cypress.env('CYPRESS_TARGET_MAIN_USER_PASS'), { log: false });
    cy.get('[data-test-id="button-login"]')
      .click();
    cy.get('div > label')
      .contains('SystemTech');

    cy.url()
      .should('eq', `${Cypress.env('CYPRESS_TARGET_URL') }overview` );
  });
  
  it.only("Lost Password without e-mail", () => {
    cy.get('[data-test-id="button-forgot-password"] > .sc-85cb45e8-5') //TODO Review ID functionality
     .click();
    cy.get('[data-test-id="input-email-forgot-password"]')
      .click();
    cy.get('[data-test-id="button-send-forgot-password"]').focus().blur();
    cy.get('[data-test-id="input-email-forgot-password-error"]')
      .should('be.visible');

  });

  it("Lost Password", () => {
    cy.get('[data-test-id="button-forgot-password"] > .sc-85cb45e8-5') //TODO Review ID functionality
     .click();
    cy.get('[data-test-id="input-email-forgot-password"]')
      .click();
    cy.get('[data-test-id="input-email-forgot-password"]')
      .type("badbass55@gmail.com");
    cy.get('[data-test-id="button-send-forgot-password"]') //TOTO needs to create a mecanism to check if the email is sent
  });
});
