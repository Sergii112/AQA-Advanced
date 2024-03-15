/// <reference types-"cypress" />

// describe('example to-do app', () => {
//   beforeEach(() => {
//     cy.visit('https://example.cypress.io/todo')
//   })
//
//   it('displays two todo items by default', () => {
//     cy.get('.todo-list li').should('have.length', 2)
//     cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
//     cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
//   })
//   })
// })

//// STTRYKTYRA TESTOV:
describe('Todo app', () => {

  //// --- "Hyku" - ("before", "beforeEach", "after", "afterEach"). Tse po syti preconditions:

  //// "before" pruymae callback i vukonyetsya odun raz pered vsima testamu!
  before(()=>{

  })

//////////////////////////////////////////

  //// "beforeEach" pruymae callback i pracyue za takum pruncupom:
  //// Spochatky vidpracyovye "beforeEach", dali vidpracyovye pershuy test,
  //// potim znovy vidpracyovye "beforeEach" i tilku potim vidpracyovye nastypnuy test,
  //// i tak dali po cyomy pruncupy!
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')

  })
///////////////////////////////////////////
// "afterEach" pracyue tak:  Spochatky vidpracyovye "beforeEach", dali vidpracyovye pershuy test,
// piuslya cyogo vidpracyovye pershuyi test, i dali vukonyetsya "afterEach".
// yaksho e she testu, todi vukonyetsya znovy "beforeEach", dali vidpracyovye dryguy test,
// dali vukonyetsya "afterEach". Yaksho e she testu to cukl povtoryetsya, yaksho testiv nemae
// vukonyetsya "Hook" - "after"

  afterEach(() => {

  })

  after(()=>{

  })
////////////////////////////////////////////

  it("should display todos", ()=>{
    cy.visit('https://example.cypress.io/todo')

    cy.get('[data-test="new-todo"]').type("Learn cypress {Enter}")
    })
})
