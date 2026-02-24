// ***********************************************************
// This file is processed and loaded automatically before your test files.
// You can use this to import custom commands and global behavior.
// ***********************************************************

// ✅ Mochawesome Reporter
import "cypress-mochawesome-reporter/register";

// ✅ Importa comandos customizados (evita erro "module not found")
import "./commands";

// ✅ Tratamento opcional para falhas não capturadas
Cypress.on("uncaught:exception", (err, runnable) => {
  // Retorne false para evitar que o teste falhe por erro externo
  return false;
});

// ✅ Exemplo de log global antes de cada teste
beforeEach(() => {
  cy.log("Iniciando cenário de teste...");
});