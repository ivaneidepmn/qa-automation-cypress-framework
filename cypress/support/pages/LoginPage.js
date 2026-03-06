class LoginPage {
  selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    error: '[data-test="error"]',
    titleProducts: ".title",
  };

  visit() {
    cy.get("body", { log: false }).then(($body) => {
      const hasUsernameField = $body.find('[data-test="username"]').length > 0;

      if (hasUsernameField) {
        cy.get(this.selectors.username).clear();
        cy.get(this.selectors.password).clear();
        return;
      }

      cy.visit("/", {
        timeout: 120000,
        failOnStatusCode: false,
      });

      cy.get(this.selectors.username, { timeout: 20000 }).should("be.visible");
    });
  }

  fillUsername(username) {
    cy.get(this.selectors.username).clear().type(username);
  }

  fillPassword(password) {
    cy.get(this.selectors.password).clear().type(password);
  }

  submit() {
    cy.get(this.selectors.loginButton).click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  shouldSeeProductsPage() {
    cy.url().should("include", "/inventory.html");
    cy.get(this.selectors.titleProducts).should("contain.text", "Products");
  }

  shouldSeeLoginError() {
    cy.get(this.selectors.error, { timeout: 20000 })
      .should("be.visible")
      .and("contain.text", "Epic sadface");
  }
}

export default new LoginPage();