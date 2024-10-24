/// <reference types="Cypress" />

const elements = {
    buttons: {
        login: '#btnLogin'
    },
    fields:{
        user: '#user',
        password: '#password'
    },
    messages: {
        sucessTittle: '#swal2-title',
        sucessSubTittle: '#swal2-html-container',
        error: '.invalid_input'
    }
}

export default {

    preencherEmail(email) {
        cy.get(elements.fields.user).type(email)
    },

    preencherPassword(senha) {
        cy.get(elements.fields.password).type(senha)
    },

    clicarBotaoLogin() {
        cy.get(elements.buttons.login).click()
    },

    verificarLoginSucesso(email) {
        cy.get(elements.messages.sucessTittle).should('be.visible').should('have.text', 'Login realizado')
        cy.get(elements.messages.sucessSubTittle).should('be.visible').should('have.text', 'Olá, ' + email)
    },

    verificarMensagemErro(message) {
        cy.get(elements.messages.error).should('be.visible').should('have.text', message)
    }
}