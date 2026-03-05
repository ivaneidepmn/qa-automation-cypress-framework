import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

Given("que estou logado na aplicação", () => {
  LoginPage.visit();
  LoginPage.login("standard_user", "secret_sauce");
  InventoryPage.shouldSeeInventory();
});

When("adiciono um produto ao carrinho", () => {
  InventoryPage.addBackpackToCart();
});

Then("devo ver o carrinho com 1 item", () => {
  InventoryPage.shouldSeeCartWithOneItem();
});