import { faker } from '@faker-js/faker'

describe('Create Label', () => {
  beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const label = {
      name: `label-${faker.datatype.uuid()}`,
      color: faker.color.rgb(),
      project: {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
      }
    }

    cy.api_createLabel(label)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(label.name)
        expect(response.body.color).to.equal(label.color)
      })
  })
})
