/* eslint-disable no-undef */
/*
 * reference is to assign a js file to the other type which is cypress ou ".cy"
 **/
/// <reference types='cypress' />
/*
 * describe is the description of the test
 * () => is an arrow function, it's the easiest way to write "function () {}"
 **/
describe('Access Toke Time game screen', () => {
  // it this is what this step will do for example: log into a system or access some page
  it('Visit Toke Time and check Game Screen items', () => {
    /**
     * cy.visit is the command to take you to the specific site you need to connect
     */
    cy.visit('https://www.thunderkick.com/games/toki-time/')
    /**
     * .should is an element for conditions example "be.visible" ie to write the element must be at least visible
     * .type is the element for inserting texts
     */
     cy.get('.custom-logo').should('be.visible')
    /**
     * cy.get() is to get an element on the web according to its CSS, also known as "CSS Selector"
     * .click() is the command to execute a click on some element
     */
     cy.get('.hero-content > .btn > .elementor-button-link').click()


  })
})
