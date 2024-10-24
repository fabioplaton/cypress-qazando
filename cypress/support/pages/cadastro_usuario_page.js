/// <reference types="Cypress" />

const elements = {
    buttons: {
        cadastrar: '#btnRegister'
    },
    fields:{
        name: '#user',
        email: '#email',
        password: '#passwordX'
    },
    messages: {
        sucessTittle: '#swal2-title',
        sucessSubTittle: '#swal2-html-container',
        error: '#errorMessageFirstName'
    }
}

export default{
    clicarCadastrar() {
        cy.get(elements.buttons.cadastrar).click()
    },

    verificarMensagemErro(message) {
        cy.get(elements.messages.error).then((element) => {
            expect(element).to.be.visible
            expect(element.text()).eq(message)
        })
    },

    // verificarMensagemErro(message) {
    //     cy.get('#errorMessageFirstName').should('be.visible')
    //         .should('have.text', message)
    // },

    preencherNome(nome) {
        cy.get(elements.fields.name).type(nome)
    },

    preencherEmail(email) {
        cy.get(elements.fields.email).type(email)
    },

    preencherPassword(senha) {
        cy.get(elements.fields.password).type(senha)
    },

    validarMensagemSucesso(nome) {
        cy.get(elements.messages.sucessTittle).should('be.visible').should('have.text', 'Cadastro realizado!')
        cy.get(elements.messages.sucessSubTittle).should('be.visible').should('have.text', 'Bem-vindo ' + nome)
    }
}