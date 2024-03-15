

describe('Stepper', () => {
  it("should work", {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },() => {
    const containerSelector = 'nb-stepper[orientation="horizontal"]' // vuznachaemo selector
    cy.visit('/pages/layout/stepper') // vkazyem url(V config vge vkazana "base URL",
    // tomy tyt propusanuy shlyah vge vidnosno base Url)

      cy.get(`${containerSelector} h3`).should("have.text", "Step content #1")

      cy.get(`${containerSelector} button`).contains("prev").should("be.disabled")
      cy.get(`${containerSelector} button`).contains("next").click() //znahodumo knopky "next"
      cy.get(`${containerSelector} h3`).should("have.text", "Step content #2")

    cy.get(`${containerSelector} button`).contains("prev").should("be.enabled")
    cy.get(`${containerSelector} button`).contains("next").click()
    cy.get(`${containerSelector} h3`).should("have.text", "Step content #3")

    cy.get(`${containerSelector} button`).contains("prev").should("be.enabled")
    cy.get(`${containerSelector} button`).contains("next").click()
    cy.get(`${containerSelector} h3`).should("have.text", "Step content #4")

    cy.get(`${containerSelector} button`).contains("prev").should("be.enabled")
    cy.get(`${containerSelector} button`).contains("next").should("be.disabled")
  })
})
