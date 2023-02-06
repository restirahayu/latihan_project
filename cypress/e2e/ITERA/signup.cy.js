describe('Sign Up', () => {

    it('Verify Sign Up Successfully', () => {

      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('Resti')
      cy.get('#Surname').type('Rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('123456')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').click()
      cy.get('.label-success')
      cy.scrollTo('bottom')

    })
    it('Verify Sign Up Successfully with Enter Button', () => {

      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('Resti')
      cy.get('#Surname').type('Rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('123456')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').type('submit{enter}')
      cy.get('.label-success')
      cy.scrollTo('bottom')

    })
    it('Verify Sign Up Failed Same Email', () => {

      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('Resti')
      cy.get('#Surname').type('Rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('123456')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').click()
      cy.get('.label-success')
      cy.scrollTo('bottom')

    })
    it('Verify Sign Up Failed Same Username', () => {

      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('Resti')
      cy.get('#Surname').type('Rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      cy.get('#Username').type('restirahayuuuu')
      cy.get('#Password').type('123456')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').click()
      cy.get('.label-danger')
      cy.scrollTo('bottom')

    })
    it('Verify Sign Up Failed Blank Email', () => {

      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('Resti')
      cy.get('#Surname').type('Rahayu')
      cy.get('#E_post').should('exist')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('123456')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').click()
      cy.get('.label-success')
      cy.scrollTo('bottom')

    })
    it('Verify Sign Up Failed Blank First Name', () => {
      
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').should('exist')
      cy.get('#Surname').type('Rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('123456')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').click()
      cy.scrollTo('top')

    })
    it('Verify Sign Up Failed Blank Surname', () => {
      
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('resti')
      cy.get('#Surname').should('exist')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('123456')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').click()
      cy.scrollTo('top')

    })
    it('Verify Sign Up Failed Blank Mobile', () => {
      
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('resti')
      cy.get('#Surname').type('rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').should('exist')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('123456')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').click()
      cy.get('.label-success')
      cy.scrollTo('bottom')

    })
    it('Verify Sign Up Failed Blank Username', () => {
      
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('resti')
      cy.get('#Surname').type('rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      cy.get('#Username').should('exist')
      cy.get('#Password').type('123456')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').click()
      

    })
    it('Verify Sign Up Failed Blank Password', () => {
      
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('resti')
      cy.get('#Surname').type('rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').should('exist')
      cy.get('#ConfirmPassword').type('123456')
      cy.get('#submit').click()

    })
    it('Verify Sign Up Failed Blank Confirm Password', () => {
      
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('resti')
      cy.get('#Surname').type('rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('12345')
      cy.get('#ConfirmPassword').should('exist')
      cy.get('#submit').click()

    })
    it('Verify Sign Up Failed All Blank', () => {
      
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').should('exist')
      cy.get('#Surname').should('exist')
      cy.get('#E_post').should('exist')
      cy.get('#Mobile').should('exist')
      cy.get('#Username').should('exist')
      cy.get('#Password').should('exist')
      cy.get('#ConfirmPassword').should('exist')
      cy.get('#submit').click()

    })
    it('Verify Sign Up Failed with Minimum Password', () => {

      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('Resti')
      cy.get('#Surname').type('Rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('1')
      cy.get('#ConfirmPassword').type('1')
      cy.get('#submit').click()
      cy.get('.label-success')
      cy.scrollTo('bottom')

    })
    it('Verify Sign Up Failed with Maximum Password', () => {

      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('Resti')
      cy.get('#Surname').type('Rahayu')
      cy.get('#E_post').type('resti.rahayu08@gmail.com')
      cy.get('#Mobile').type('085223890090')
      const uuid = () => Cypress._.random(0, 1e6) //input random username
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#Username').type(testname)
      cy.get('#Password').type('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')
      cy.get('#ConfirmPassword').type('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')
      cy.get('#submit').click()
      

    })

  })
