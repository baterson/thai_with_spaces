/// <reference types="cypress" />

context('Main flow', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('should show main app wrapper', () => {
    cy.get('[data-testId="app-wrapper"]').should('exist')
  })

  it('should set text', () => {
    const testText = 'testText'

    cy.get('[data-testId="text-screen"]').type(testText).should('have.text', testText)
  })

  it('should show button', () => {
    cy.get('/div/button[1]').should('exist')
  })
})
