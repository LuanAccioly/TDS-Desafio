export class Products {
  addProductToCart(index) {
    return cy.get(`[data-product-id="${index}"]`).contains("Add to cart");
  }
  getProductTitle(index) {
    return cy
      .get(`[data-product-id="${index}"]`)
      .siblings("p")
      .filter(":visible");
  }
  continueShoppingButton() {
    return cy.contains("Continue Shopping");
  }
}
