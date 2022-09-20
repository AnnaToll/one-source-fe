import Login from "./Login";

describe('testing login', () => {
    it('mounts', () => {
        cy.mount(<Login />);
    })
})