/// <reference types="cypress" />

describe('Gestion Client Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('displays a page with the articles', () => {
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    cy.get('main').contains('Voir le stock').click();
    cy.get('main button[aria-label="Ajouter"]').click();
    cy.focused()
      .type('Test ' + id)
      .tab();
    cy.focused().type('1.47').tab();
    cy.focused().type('89{enter}');
    // cy.get('table').contains(id).click();
    // cy.get('button[aria-label="Supprimer"]').click();
  });
});
