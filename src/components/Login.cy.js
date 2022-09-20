import Login from "./Login";

const email = '[name=email]'
const pwd = '[name=pwd]'
const submit = '[type=submit]'
// const success = '[data-cy=success]'

describe('testing login', () => {
    it('mounts', () => {
        cy.mount(<Login />);

        cy.get(email)
          .type('testar@test.se')

        cy.get(pwd)
          .type('hejhej')
        
        cy.get(submit)
          .click()

        // cy.get('p.success', { timeout: 10000 })
        //   .should('contain', 'Welcome Anna! You are logged in.')
        
        
    })
})
