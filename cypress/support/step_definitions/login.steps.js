import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";

Given("que eu acesso a página de login", () => {
  LoginPage.visit();
});

When(
  "eu faço login com usuário {string} e senha {string}",
  (usuario, senha) => {
    LoginPage.login(usuario, senha);
  }
);

Then("devo ver a página de produtos", () => {
  LoginPage.shouldSeeProductsPage();
});

Then("devo ver uma mensagem de erro no login", () => {
  LoginPage.shouldSeeLoginError();
});