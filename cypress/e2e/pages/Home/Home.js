export class Home {
  homeButton() {
    return cy.contains("Home");
  }
  signinSignupButton() {
    return cy.contains("Signup / Login");
  }
  cartButton() {
    return cy.contains("Cart");
  }

  deleteAccountButton() {
    return cy.contains("Delete Account");
  }

  deleteAccountResult() {
    return cy.get('[data-qa="account-deleted"]');
  }

  loggedAs() {
    return cy.contains("Logged in as");
  }
}
