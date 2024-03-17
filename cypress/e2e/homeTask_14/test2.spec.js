
describe('Dialog', () => {

  it("should displayed", () => {

    const containerSelector1 = 'nb-card-body.result-from-dialog'
    const containerSelector2 = 'ngx-dialog-name-prompt.ng-star-inserted'
    const containerSelector3= 'nb-card-body input'
    cy.visit('/pages/modal-overlays/dialog')

    cy.get(`${containerSelector1} button`).contains("Enter Name").click()

    cy.get(`${containerSelector2}`).should("be.visible")
    cy.get(`${containerSelector2}`).contains("nb-card-header", "Enter your name")
    cy.get(`${containerSelector3}`).should("be.enabled")
    cy.get(`${containerSelector2} button`).contains("Submit").should("be.enabled")
    cy.get(`${containerSelector2} button`).contains("Cancel").should("be.enabled")
  })
})


