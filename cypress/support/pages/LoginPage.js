class LoginPage {
  selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    error: '[data-test="error"]',
    titleProducts: ".title",
  };

  visit() {
    cy.url({ log: false }).then((url) => {
      const isInventoryPage = url.includes("/inventory.html");
      const isLoginPage =
        url.includes("saucedemo.com") && !url.includes("/inventory.html");

      // Se estiver na inventory, volta para a login
      if (isInventoryPage) {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.visit("/", {
          timeout: 120000,
          failOnStatusCode: false,
        });

        cy.get(this.selectors.username, { timeout: 20000 }).should("be.visible");
        return;
      }

      // Se já estiver na tela de login, não visita de novo
      if (isLoginPage) {
        cy.get(this.selectors.username, { timeout: 20000 }).should("be.visible");
        cy.get(this.selectors.username).clear();
        cy.get(this.selectors.password).clear();
        return;
      }

      // Caso inicial / about:blank / qualquer outro estado
      cy.clearCookies();
      cy.clearLocalStorage();

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