// ***********************************************************
// Comandos customizados globais
// ***********************************************************

// Buscar elemento por data-test
Cypress.Commands.add("getByTest", (testId, ...args) => {
    return cy.get(`[data-test="${testId}"]`, ...args);
  });
  
  // Comando global de login (opcional)
  Cypress.Commands.add("login", (username, password) => {
    cy.visit("/");
  
    cy.getByTest("username").clear().type(username);
    cy.getByTest("password").clear().type(password);
    cy.getByTest("login-button").click();
  });
  
  // Limpeza de estado da aplicação
  Cypress.Commands.add("clearAppState", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });