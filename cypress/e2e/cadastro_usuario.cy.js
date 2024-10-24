/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import commun_page from '../support/pages/commun_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'

const name = faker.person.fullName()
const email = faker.internet.email()

describe('Cadastro de usuário', () => {

    beforeEach('Acessando o site e abrindo o cadastro', () => {
        commun_page.acessarCadastroUsuario()
    })
    
    it('TC001 - Cadastro com sucesso', () => {
        cadastro_usuario_page.preencherNome(name)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.preencherPassword('123456')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(name)
    })

    it('TC002 - Campo nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo nome deve ser prenchido')
    })

    it('TC003 - E-vmail vazio', () => {
        cadastro_usuario_page.preencherNome(name)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('TC004 - E-mail invalido', () => {
        cadastro_usuario_page.preencherNome(name)
        cadastro_usuario_page.preencherEmail('pedroscooby')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('TC005 - Senha vazio', () => {
        cadastro_usuario_page.preencherNome(name)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('TC006 - Senha invalida', () => {
        cadastro_usuario_page.preencherNome(name)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.preencherPassword(1234)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })
})