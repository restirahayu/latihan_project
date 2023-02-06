describe('Login', () => {

    it('Verify Login Successfully', () => {

      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('#Username').type('restirahayuuuu')
      cy.get('#Password').type('123456')
      cy.get('.btn-primary').click()
    })
    it('Verify Button Clear Functionally', () => {

        cy.visit('https://itera-qa.azurewebsites.net/')
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
        cy.get('#Username').type('restirahayuuuu')
        cy.get('#Password').type('123456')
        cy.get(':nth-child(7) > :nth-child(2) > .btn-secondary').click()
      })
    it('Verify use tab (in keyboard) to navigate from username textbox to password textbox', () => {

        cy.visit('https://itera-qa.azurewebsites.net/')
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
        cy.get('#Username').type('restirahayuuuu')
        cy.tab().type('123456')//isi password
        cy.get('.btn-primary').type('.btn-primary{enter}')
      })
    it('Verify login failed with blank username and password textboxs', () => {

        cy.visit('https://itera-qa.azurewebsites.net/')
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
        cy.get('#Username').should('exist')
        cy.get('#Password').should('exist')
        cy.get('.btn-primary').click()
      })
    it('Verify login failed with blank username textbox', () => {

        cy.visit('https://itera-qa.azurewebsites.net/')
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
        cy.get('#Username').should('exist')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
      })
    it('Verify login failed with blank password textbox', () => {

        cy.visit('https://itera-qa.azurewebsites.net/')
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
        cy.get('#Username').type('restirahayuuuu')
        cy.get('#Password').focus().blur()//use focus blur for blank password textbox
        cy.get('.btn-primary').click()
      })
    it('Verify login failed with wrong password', () => {

        cy.visit('https://itera-qa.azurewebsites.net/')
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
        cy.get('#Username').type('restirahayuuuu')
        cy.get('#Password').type('12345')
        cy.get('.btn-primary').click()
      })
    it('Verify login failed with wrong username', () => {

        cy.visit('https://itera-qa.azurewebsites.net/')
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
        cy.get('#Username').type('restirahayu')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
      })
    it('Verify Logout Successfully', () => {

        cy.visit('https://itera-qa.azurewebsites.net/')
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
        cy.get('#Username').type('restirahayuuuu')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

  })