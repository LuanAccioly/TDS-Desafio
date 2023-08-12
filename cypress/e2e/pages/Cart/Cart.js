export class Cart {
  getItemName(productId) {
    return cy.get(`tr#product-${productId} td.cart_description h4 a`);
  }

  procceedButton() {
    return cy.contains("Proceed To Checkout");
  }

  deliveryName() {
    return cy.get("#address_delivery > .address_firstname");
  }
  deliveryAddress() {
    return cy.get("#address_delivery > :nth-child(4)");
  }

  deliveryCity() {
    return cy.get("#address_delivery > .address_city");
  }

  deliveryCountry() {
    return cy.get("#address_delivery > .address_country_name");
  }

  deliveryPhone() {
    return cy.get("#address_delivery > .address_phone");
  }

  placeOrderButton() {
    return cy.contains("Place Order");
  }

  nameOnCard() {
    return cy.get('[data-qa="name-on-card"]');
  }

  cardNumber() {
    return cy.get('[data-qa="card-number"]');
  }

  cvv() {
    return cy.get('[data-qa="cvc"]');
  }

  expiryMonth() {
    return cy.get('[data-qa="expiry-month"]');
  }

  expiryYear() {
    return cy.get('[data-qa="expiry-year"]');
  }

  payConfirmButton() {
    return cy.get('[data-qa="pay-button"]');
  }

  orderConfirmation() {
    return cy.get('[data-qa="order-placed"]');
  }
}
