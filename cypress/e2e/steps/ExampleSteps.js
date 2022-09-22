/// <reference types="Cypress" />

/**
 * Page for communication with the feature file, here where we decide what each step will do,
 * the code part is hidden inside the logic
 */
import {
  Given as Dado,
  When as Quando,
  And as E,
  Then as Entao,
  When,
  Given,
} from '@badeball/cypress-cucumber-preprocessor'
import { Then } from 'cucumber'

import data from '../../fixtures/example.json'
import ExampleLogic from '../logic/ExampleLogic'

const exampleLogic = new ExampleLogic()

Given('I have users to access the Toke Time website', () => {
  exampleLogic.acessarSite(Cypress.env('url'))
})

When('I type "jimini_anderson@msn.com" in emails', () => {
  exampleLogic.acessarPaginaLogin()
})

E('click on create new account', () => {
  exampleLogic.acessarCreateAccount()
})

And('create a new account', () => {
  exampleLogic.preencherAccountDetails(data.username, data.email, data.password)
  exampleLogic.registrar()
})

Then('I shouldnt see Access your account', () => {
  exampleLogic.verificarUserCadastrado(data.username)
})
