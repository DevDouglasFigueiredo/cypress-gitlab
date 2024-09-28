describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false } // para o teste de login nao quero que ele faça o cache de login 

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
