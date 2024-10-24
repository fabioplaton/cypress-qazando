/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import commun_page from '../support/pages/commun_page'
import login_page from '../support/pages/login_page'

const email = faker.internet.email()

describe('Login', () => {
        
    beforeEach('Acessando o site e entrando no Login', () => {
        commun_page.acessarLoginUsuario()
    })

    it('TC001 - Login com sucesso', () => {
        login_page.preencherEmail(email)
        login_page.preencherPassword('123456')
        login_page.clicarBotaoLogin()
        login_page.verificarLoginSucesso(email)
    })

    it('TC002 - E-mail em branco', () => {
        login_page.clicarBotaoLogin()
        login_page.verificarMensagemErro('E-mail inválido.')
    })

    it('TC003 - E-mail invalido', () => {
        login_page.preencherEmail('qazando')
        login_page.clicarBotaoLogin()
        login_page.verificarMensagemErro('E-mail inválido.')
    })

    it('TC004 - Senha em braco', () => {
        login_page.preencherEmail(email)
        login_page.clicarBotaoLogin()
        login_page.verificarMensagemErro('Senha inválida.')
    })

    it('TC005 - Senha errada', () => {
        login_page.preencherEmail(email)
        login_page.preencherPassword('123')
        login_page.clicarBotaoLogin()
        login_page.verificarMensagemErro('Senha inválida.')
    })
})