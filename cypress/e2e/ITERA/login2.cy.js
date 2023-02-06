describe('template spec', () => {
    // TC_03.1 Positive Login
    it('positive : login normally', () => {
      cy.visit('https://itera-qa.azurewebsites.net')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('#Username').type("miftakhulfitria")
      cy.get('#Password').type("miftakhulfitria")
      cy.get('.btn-primary').click()
    })
  
    // TC_03.2 Positive Login
    it('positive : login (click button clear)', () => {
      cy.visit('https://itera-qa.azurewebsites.net')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('#Username').type('miftakhulfitria')
      cy.get('#Password').type('miftakhulfitria')
      cy.get(':nth-child(7) > :nth-child(2) > .btn-secondary').click()
    })
  
    // TC_03.3 Positive Login
    it('positive : login with use tab to navigate textbox', () => {
      cy.visit('https://itera-qa.azurewebsites.net')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('#Username').type('miftakhulfitria')
      cy.tab().type('miftakhulfitria')
      cy.get('.btn-primary').click()
    })
  
    // TC_04.1 Negative Login
    it('negative : login with blank username & password', () => {
      cy.visit('https://itera-qa.azurewebsites.net')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('#Username').focus().blur()
      cy.get('#Password').focus().blur()
      cy.get('.btn-primary').click()
    })
  
    // TC_04.2 Negative Login
    it('negative : login with blank username', () => {
      cy.visit('https://itera-qa.azurewebsites.net')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('#Username').focus().blur()
      cy.get('#Password').type('miftakhulfitria')
      cy.get('.btn-primary').click()
    })
  
    // TC_04.3 Negative Login
    it('negative : login with blank password', () => {
      cy.visit('https://itera-qa.azurewebsites.net')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('#Username').type('miftakhulfitria')
      cy.get('#Password').focus().blur()
      cy.get('.btn-primary').click()
    })
  
    // TC_04.4 Negative Login
    it('negative : login with wrong password', () => {
      cy.visit('https://itera-qa.azurewebsites.net')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('#Username').type('miftakhulfitria')
      cy.get('#Password').type('abcdef')
      cy.get('.btn-primary').click()
    cy.get('.alert-danger').should('include.text', 'Your username and password not match')
    })
  
    // TC_04.4 Negative Login
    it('negative : login with wrong username', () => {
      cy.visit('https://itera-qa.azurewebsites.net')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('#Username').type('hello')
      cy.get('#Password').type('miftakhulfitria')
      cy.get('.btn-primary').click()
      cy.get('.alert-danger').should('include.text', 'Your username is not registered')
    })
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })