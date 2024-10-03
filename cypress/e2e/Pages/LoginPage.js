class LoginPage {
  elements = {
    usernameInput: () => cy.get("input[name='email']"),
    passwordInput: () => cy.get("input[name='password']"),
    rememberMe: () => cy.get("[type='checkbox']"),
    loginBtn: () => cy.get('.MuiButton-contained'),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };

  // proceedToLoginBtn () { cy.contains("button", "LOGIN").click() }

  // proceedAsGuestBtn () { cy.contains("button", "Login as Guest").click() }


  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.rememberMe().check();
    this.elements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
