const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from "../../pages/LoginPage";

Given("que eu acesso a página de login", () => {
  LoginPage.visit();
});

When("eu faço login com usuário {string} e senha {string}", (user, pass) => {
  LoginPage.login(user, pass);
});

Then("devo ver a página de produtos", () => {
  LoginPage.validateLoginSuccess();
});