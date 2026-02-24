class LoginPage {
    selectors = {
      username: '[data-test="username"]',
      password: '[data-test="password"]',
      loginBtn: '[data-test="login-button"]',
    };
  
    visit() {
      cy.visit("https://www.saucedemo.com/");
    }
  
    login(user, pass) {
      cy.get(this.selectors.username).type(user);
      cy.get(this.selectors.password).type(pass);
      cy.get(this.selectors.loginBtn).click();
    }
  }
  
  export default LoginPage;