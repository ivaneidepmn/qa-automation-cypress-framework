import "./commands";

// Evita falha por erro externo da aplicação
Cypress.on("uncaught:exception", () => {
  return false;
});

beforeEach(() => {
  cy.log("Iniciando cenário de teste...");
});