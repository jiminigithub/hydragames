/**
 * Part of page object where we create each element
 */
class ExamplePage {
  btnLogin() {
    return '#menuUser'
  }

  linkCreateNewAccount() {
    return '.menu-wrapper > .menu-button-wrapper > .elementor-button-link'
  }

  txtUserName() {
    return '#user_login'
  }

  txtEmail() {
    return '#user_login'
  }

  txtPassword() {
    return '#user_pass'
  }

  txtConfirmPassword() {
    return '#wp-submit'
  }
  
  btnRegister() {
    return '[rel="nofollow"]'
  }

  txtUser() {
    return '#menuUserLink > span'
  }
}

export default ExamplePage
