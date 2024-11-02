/*  

This project uses the website from https://katalon-demo-cura.herokuapp.com/
    
*/

describe('Cura Make Appointment - Positive', () => {

    it('Visit the URL', () => {
        cy.visit(Cypress.env('baseURL'))
        cy.get("#top").contains("CURA Healthcare Service") // verify that already in this website
    })

    it('Click on Make Appointment', () => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
        cy.get("#btn-make-appointment").click()
        cy.get("#login").contains("Login") //Verify 

    })

    it('Login', () => {
        cy.get("#txt-username").type("John Doe") //id  
        cy.get("#txt-password").type("ThisIsNotAPassword") //id 
        cy.get("#btn-login").click() //id 
        cy.get(".form-group").contains("Facility") // verify that already in make appointment page
    })

    it('Make Appointment', () => {
        cy.get("#combo_facility").select("Tokyo CURA Healthcare Center")
        cy.get("#chk_hospotal_readmission").check()
        cy.get(".radio-inline[value='Medicare']").should('be.checked')
        cy.get("#txt_visit_date").type("07/11/2024")
        cy.get("#txt_comment").type("I will be avaiable at 07/11/2024")
        cy.get("#btn-book-appointment").click()
    })

    it('Appointment Confirmation', () => {
        cy.get(".col-xs-12 text-center").contains("Appointment Confirmation")
        cy.get("#visit_date").contains("07/11/2024")
        cy.get("#comment").contains("I will be avaiable at 07/11/2024")
    })

})