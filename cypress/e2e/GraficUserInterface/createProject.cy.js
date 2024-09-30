import { faker } from '@faker-js/faker'

describe('criação de repositorio', () => {

  beforeEach(function () {
    cy.api_deleteProjects()
    cy.login();
  })

  it('criando repositorio com sucesso', () => {
    const project = {
      title: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
    cy.gui_createProject(project)
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.title}`)
    cy.contains(project.title).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})