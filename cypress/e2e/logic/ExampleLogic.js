/**
 * Part where the code is developed and the functions are created in full
 */
import ExamplePage from '../page/ExamplePage'

class ExampleLogic {
  constructor() {
    this.examplePage = new ExamplePage()
  }
  acessarSite(url) {
    cy.visit(url)
  }
  //cy.get('#user_login')
  acessarPaginaLogin() {
    cy.clickBeVisible(this.examplePage.btnLogin())
  }
  acessarCreateAccount() {
    cy.clickBeVisible(this.examplePage.linkCreateNewAccount())
  }

  fillAccountDetails(username, email, password) {
    cy.typeBeVisible(this.examplePage.txtUserName(), username)
    cy.typeBeVisible(this.examplePage.txtEmail(), email)
    cy.typeBeVisible(this.examplePage.txtPassword(), password)
    cy.typeBeVisible(this.examplePage.txtConfirmPassword(), password)
  }

  registrar() {
    cy.get(this.examplePage.checkBox()).check()
    cy.clickBeVisible(this.examplePage.btnRegister())
  }

  verificarUserCadastrado(username) {
    cy.url().should('eq', 'https://www.thunderkick.com/wp-login.php?redirect_to=https%3A%2F%2Fwww.thunderkick.com%2Fclientarea%2F')

    cy.getText(this.examplePage.txtUser()).should('eq', username)
  }
}

export default ExampleLogic
