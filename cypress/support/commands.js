const { Home } = require("../e2e/pages/Home/Home");
const { Signin } = require("../e2e/pages/Signin/Signin");

Cypress.Commands.add("login", (user, shouldSucceed = true) => {
  const home = new Home();
  const signin = new Signin();

  home.signinSignupButton().click();
  signin.loginEmail().type(user.email);
  signin.loginPassword().type(user.password);
  signin.loginButton().click();

  shouldSucceed
    ? home.loggedAs().should("contain.text", user.fullName)
    : cy.contains("Your email or password is incorrect!").should("be.visible");
});
