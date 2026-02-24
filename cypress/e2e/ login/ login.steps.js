import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

Given("I access the login page", () => {
  loginPage.visit();
});

When("I login with username {string} and password {string}", (user, pass) => {
  loginPage.login(user, pass);
});

Then("I should see the products page", () => {
  cy.url().should("include", "/inventory");
});