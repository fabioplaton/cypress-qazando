/// <reference types="Cypress" />

export default {
    acessarCadastroUsuario() {
        cy.visit('/').get('#top_header')
        cy.get('.fa-lock').click()
    },

    acessarLoginUsuario(){
        cy.visit('/').get('#top_header')
        cy.get('.fa-user').click()
    }
}