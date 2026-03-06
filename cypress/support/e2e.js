import "./commands";

// Evita falhas quando a aplicação gerar erro externo não relacionado ao teste
Cypress.on("uncaught:exception", () => {
  return false;
});

beforeEach(() => {
  cy.log("Iniciando cenário de teste...");
});