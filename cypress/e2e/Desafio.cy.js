import { Home } from "./pages/Home/Home";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";
import {
  userToRegister,
  registeredUser,
  userToFailLogin,
} from "../fixtures/users";

const home = new Home();
const signin = new Signin();
const signup = new Signup();

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
    home.signinSignupButton().click();
    signin.loginEmail().type(registeredUser.email);
    signin.loginPassword().type(registeredUser.password);
    signin.loginButton().click();
    home.loggedAs().should("contain.text", registeredUser.fullName);
  });

  it("Login with unregistered user", () => {
    home.signinSignupButton().click();
    signin.loginEmail().type(userToFailLogin.email);
    signin.loginPassword().type(userToFailLogin.password);
    signin.loginButton().click();
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });
});
