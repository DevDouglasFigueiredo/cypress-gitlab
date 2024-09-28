describe('cenario de login', () => {

    beforeEach(function () {
        cy.login();
    })

    it('efetuando logout com sucesso', () => {
      cy.logout()
      // assert 
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })