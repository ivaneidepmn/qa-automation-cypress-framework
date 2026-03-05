import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que eu acesso a página de login", () => {
  cy.visit("/");
});

When(
  'eu faço login com usuário {string} e senha {string}',
  (usuario, senha) => {
    cy.get('[data-test="username"]').type(usuario);
    cy.get('[data-test="password"]').type(senha);
    cy.get('[data-test="login-button"]').click();
  }
);

Then("devo ver a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.contains("Products").should("be.visible");
});
Then("devo ver uma mensagem de erro no login", () => {
  cy.get('[data-test="error"]').should("be.visible");
});