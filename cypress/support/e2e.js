import "./commands";

// Evita falhas quando a aplicação gera erro externo
Cypress.on("uncaught:exception", () => {
  return false;
});

// Log simples antes de cada cenário
beforeEach(() => {
  cy.log("Iniciando cenário de teste...");
});