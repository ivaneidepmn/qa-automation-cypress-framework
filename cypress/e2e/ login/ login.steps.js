const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que eu acesso a página de login", () => {
  cy.visit("/");
});

When("eu faço login com usuário {string} e senha {string}", (user, pass) => {
  cy.login(user, pass);
});

Then("devo ver a página de produtos", () => {
  cy.url().should("include", "/inventory");
  cy.get(".title").should("contain", "Products");
});