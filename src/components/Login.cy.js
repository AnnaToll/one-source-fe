import Login from './Login'

describe('Testing Login', () => {
    it('mounts', () => {
      cy.mount(<Login />)
    })
  })