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
    cy.visit(Cypress.env('TARGET_URL'));

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
    cy.get('[data-testid="input-email"]')
      .click({force: true})
    cy.get('[data-testid="input-email"]')
      .type(Cypress.env('TARGET_MAIN_USER_NAME'), { waitForAnimations: false });
    cy.get('[data-testid="input-password"]')
      .type('needs to be wrong');
    cy.get('[data-testid="button-login"]')
      .click();
    cy.url().should('eq', `${Cypress.env('TARGET_URL') }login`);
  });
  
  it("Login with Correct Credentials", () => {
    cy.get("#E-mail")
      .click({force: true})
    cy.get('[data-testid="input-email"]')
      .type(Cypress.env('TARGET_MAIN_USER_NAME'));
    cy.get('[data-testid="input-password"]')
      .type(Cypress.env('TARGET_MAIN_USER_PASS'), { log: false });
    cy.get('[data-testid="button-login"]')
      .click();
    cy.url()
      .should('eq', `${Cypress.env('TARGET_URL') }overview` );
  });

  // it.only("tests 1 Lost pass Recording 03/07/2025 at 23:46:25", () => {
  //   cy.get('[data-testid="button-forgot-password"] > .sc-85cb45e8-5')
  //    .click();
  //   //cy.get("div.sc-2d3fed29-26 > div > div > div > div").click();
  //   cy.get("#E-mail").click();
  //   cy.get("#E-mail").type("badbass55@gmail.com");
  //   cy.get("div:nth-of-type(2) button").click();
  //   //cy.get("div.sc-42f49407-1 > div:nth-of-type(1) label").click();
  //   //cy.get("div.sc-42f49407-1 > div:nth-of-type(1) label").click();
  // });
});
