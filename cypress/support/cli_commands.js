Cypress.Commands.add('cloneViaSSH', project => {
    const domain = Cypress.config('baseUrl').replace('http://', '')

    const absolutePath = '/home/ffigueiredo/Documentos/douglas-projetos/cypress-intermediario/cypress/downloads'

    cy.exec(`cd ${absolutePath} && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)
})
