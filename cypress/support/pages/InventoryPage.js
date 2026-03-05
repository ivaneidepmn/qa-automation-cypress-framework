class InventoryPage {
  selectors = {
    inventoryContainer: ".inventory_list",
    addBackpackButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
    cartIcon: ".shopping_cart_link",
    cartBadge: ".shopping_cart_badge",
  };

  shouldSeeInventory() {
    cy.get(this.selectors.inventoryContainer).should("be.visible");
  }

  addBackpackToCart() {
    cy.get(this.selectors.addBackpackButton).click();
  }

  shouldSeeCartWithOneItem() {
    cy.get(this.selectors.cartBadge)
      .should("be.visible")
      .and("contain", "1");
  }

  openCart() {
    cy.get(this.selectors.cartIcon).click();
  }
}

export default new InventoryPage();