class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    title: () => cy.get('.title')
  };

  visit() {
    cy.visit('/');
  }

  login(username, password) {
    this.elements.usernameInput().clear().type(username);
    this.elements.passwordInput().clear().type(password);
    this.elements.loginButton().click();
  }

  validateLoginSuccess() {
    this.elements.title().should('contain', 'Products');
  }
}

export default new LoginPage();