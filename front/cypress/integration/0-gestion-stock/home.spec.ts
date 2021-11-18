/// <reference types="cypress" />

describe('Gestion Client Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('displays a page with "Gestion Stock"', () => {
    cy.get('header').contains('Gestion Stock');
  });
  it('displays a page with "Mentions Légales"', () => {
    cy.get('footer').contains('Mentions Légales');
  });
  it('displays a page with "Gérer efficacement"', () => {
    cy.get('app-body').contains('Gérer efficacement');
  });
  it('displays a page with "Voir le stock"', () => {
    cy.get('main button').contains('Voir le stock');
  });
});
