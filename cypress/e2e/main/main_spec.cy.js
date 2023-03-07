/// <reference types="cypress" />

context("Main flow", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it(".first one", () => {
    cy.get('[data-testId="app-wrapper"]').should("exist");
  });
});
