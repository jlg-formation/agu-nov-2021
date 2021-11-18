/// <reference types="cypress" />

describe('Gestion Client Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('displays a page with the articles', () => {
    cy.get('main').contains('Voir le stock').click();
    cy.get('main').contains('Liste des articles');
  });
});
