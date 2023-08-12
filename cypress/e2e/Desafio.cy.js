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
  it("Register new user", () => {
    home.signinSignupButton().click();
    signin.signupName().type(userToRegister.fullName);
    signin.signupEmail().type(userToRegister.email);
    signin.signupButton().click();
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
    signup.createAccountResult().should("contain.text", "Account Created!");
    signup.continueButton().click();
    home.loggedAs().should("contain.text", userToRegister.fullName);
    home.deleteAccountButton().click();
    home.deleteAccountResult().should("contain.text", "Account Deleted!");
  });

  it("Login with registered user", () => {
    cy.login(registeredUser);
  });

  it("Login with unregistered user", () => {
    cy.login(userToFailLogin, false);
  });
  it.only("Shopping cart", () => {
    let productName;
    cy.login(registeredUser);

    // Adicionando produto ao carrinho
    home.productsButton().click();
    products.addProductToCart(1).click();
    products.continueShoppingButton().click();

    // Verificando se o produto foi adicionado ao carrinho corretamente
    products.getProductTitle(1).then(($productTitle) => {
      productName = $productTitle.text().trim();
      home.cartButton().click();
      cart.getItemName(1).should("contain.text", productName);
    });
    cart.procceedButton().click();

    // Veriricando dados de entrega
    cart.deliveryName().should("contain", registeredUser.firstName);
    cart.deliveryAddress().should("contain", registeredUser.address);
    cart.deliveryCity().should("contain", registeredUser.city);
    cart.deliveryCountry().should("contain", registeredUser.country);
    cart.deliveryPhone().should("contain", registeredUser.mobileNumber);
    cart.placeOrderButton().click();

    // Informando dados do cartão
    cart.nameOnCard().type(registeredUser.card.name);
    cart.cardNumber().type(registeredUser.card.number);
    cart.cvv().type(registeredUser.card.cvv);
    cart.expiryMonth().type(registeredUser.card.expiryMonth);
    cart.expiryYear().type(registeredUser.card.expiryYear);
    cart.payConfirmButton().click();

    // Verificando confirmação do pedido
    cart.orderConfirmation().should("contain", "Order Placed!");
  });
});
