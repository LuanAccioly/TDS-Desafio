import { Home } from "./pages/Home/Home";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";
import { Products } from "./pages/Products/Products";
import { Cart } from "./pages/Cart/Cart";
import {
  userToRegister,
  registeredUser,
  userToFailLogin,
} from "../fixtures/users";

const home = new Home();
const signin = new Signin();
const signup = new Signup();
const products = new Products();
const cart = new Cart();

beforeEach(() => {
  cy.visit("/");
});
describe("Challenges", () => {
  it("Successful Registration", () => {
    // Click on the 'Signup/Login' button on the homepage.
    home.signinSignupButton().click();

    // Fill in the initial form in the "New User Signup" area and click on the "Signup" button.
    signin.signupName().type(userToRegister.fullName);
    signin.signupEmail().type(userToRegister.email);
    signin.signupButton().click();

    // Fill the rest of the form and click on 'Create Account' button
    signup.genderRadius(userToRegister.gender);
    signup.name().should("have.value", userToRegister.fullName);
    signup.email().should("have.value", userToRegister.email);
    signup.password().type(userToRegister.password);
    signup.selectBirthDay(userToRegister.birth.day);
    signup.selectBirthMonth(userToRegister.birth.month);
    signup.selectBirthYear(userToRegister.birth.year);
    signup.newsletter(userToRegister.newsletter);
    signup.offers(userToRegister.offers);
    signup.firstName().type(userToRegister.firstName);
    signup.lastName().type(userToRegister.lastName);
    signup.address().type(userToRegister.address);
    signup.selectCountry(userToRegister.country);
    signup.state().type(userToRegister.state);
    signup.city().type(userToRegister.city);
    signup.zipCode().type(userToRegister.zipCode);
    signup.mobileNumber().type(userToRegister.mobileNumber);
    signup.createAccountButton().click();

    // Verify if the "Account Created!" message is displayed.
    signup.createAccountResult().should("contain.text", "Account Created!");
    signup.continueButton().click();

    // Check if the username is displayed in the Header of the page
    home.loggedAs().should("contain.text", userToRegister.fullName);

    // Click the "Delete Account" button and verify if the "Account Deleted!" message is displayed.
    home.deleteAccountButton().click();
    home.deleteAccountResult().should("contain.text", "Account Deleted!");
  });

  it("Successful Login", () => {
    // Login function details in cypress/support/commands.js
    cy.login(registeredUser);
  });

  it("Login Failure", () => {
    // Login function details in cypress/support/commands.js
    cy.login(userToFailLogin, false);
  });
  it("Purchase Process", () => {
    // Login function details in cypress/support/commands.js
    cy.login(registeredUser);

    // Navigate to the products page.
    home.productsButton().click();

    // Add a product to the cart.
    products.addProductToCart(1).click();

    // Go to the cart.
    products.continueShoppingButton().click();

    // Verify if the correct product name is displayed in the cart.
    products.getProductTitle(1).then(($productTitle) => {
      const productName = $productTitle.text().trim();
      home.cartButton().click();
      cart.getItemName(1).should("contain.text", productName);
    });

    // Proceed to checkout.
    cart.procceedButton().click();

    // Verify if the delivery details match those of the user.
    cart.deliveryName().should("contain", registeredUser.firstName);
    cart.deliveryAddress().should("contain", registeredUser.address);
    cart.deliveryCity().should("contain", registeredUser.city);
    cart.deliveryCountry().should("contain", registeredUser.country);
    cart.deliveryPhone().should("contain", registeredUser.mobileNumber);
    cart.placeOrderButton().click();

    // Fill in the payment card details.
    cart.nameOnCard().type(registeredUser.card.name);
    cart.cardNumber().type(registeredUser.card.number);
    cart.cvv().type(registeredUser.card.cvv);
    cart.expiryMonth().type(registeredUser.card.expiryMonth);
    cart.expiryYear().type(registeredUser.card.expiryYear);

    // Confirm payment and verify if the "Order Placed!" message is displayed.
    cart.payConfirmButton().click();
    cart.orderConfirmation().should("contain", "Order Placed!");
  });
});
