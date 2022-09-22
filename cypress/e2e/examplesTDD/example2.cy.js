/// <reference types="cypress"/>

import ExamplePage from '../page/ExamplePage'
/**
 * there are two ways to import data, the first is the way it is being done here, the second is using the before method, example:
 * describe('teste', () => {
 *  before(() => {
 *    cy.fixture('example).then((data) => {
 *      this.data = data
 *    })
 *  })
 */
import data from '../../fixtures/example.json'

describe('Register user for ThunderKick platform', () => {
  it('Using mass for website registration Toki Time', () => {
    const examplePage = new ExamplePage()

    /**
     * Cypress.env is the way to read a default url, placed inside the file cypress.config.js
     */
    //cy.visit('https://www.thunderkick.com/games/toki-time/')
    cy.visit(Cypress.env('url'))
    cy.get('.menu-wrapper > .menu-button-wrapper > .elementor-button-link').should('be.visible').wait(1000)
    cy.get('.menu-wrapper > .menu-button-wrapper > .elementor-button-link').click().wait(1000);

    cy.get('#user_login').type(data.username)
    cy.get('#user_login').should('be.visible').wait(1000)
    cy.get('#user_pass').type(data.password) 
    cy.get('#rememberme').click()
    //cy.get('.forgetmenot > label').click()
    cy.get('#wp-submit').click()
    cy.get('#login_error > :nth-child(2)').should('have.text','Jimini Andersson')
    //Error: The username Jimini Andersson is not registered on this site. If you are unsure of your username, try your email address instead.
        
  })
})





    //examplePage.
    //examplePage.txtUserName().type(data.username)
    // examplePage.getEmail().type(data.email)
    // examplePage.getPassword().type(data.password)

    // examplePage.getPassword().type(data.newpassword)
    // examplePage.getRegisterButton().click()

    // examplePage.getUserName().should('have.value', data.username)

    