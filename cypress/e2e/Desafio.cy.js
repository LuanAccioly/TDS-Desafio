import { Home } from "./pages/Home/Home";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";

const home = new Home();
const signin = new Signin();
const signup = new Signup();

const registeredUser = {
  fullName: "Luan Lucas Dias Accioly",
  email: "acciolyluan@gmail.com",
  password: "123456",
};

const userToRegister = {
  firstName: "Luan",
  lastName: "Accioly",
  fullName: "Luan Lucas Dias Accioly",
  email: "accioly@gmail.com",
  gender: "Mr",
  password: "123456",
  birth: {
    day: "27",
    month: "December",
    year: "2000",
  },
  newsletter: true,
  offers: true,
  company: "TDS Company",
  address: "Rua dos bobos, 0",
  country: "Canada",
  city: "Recife",
  state: "Pernambuco",
  zipCode: "12123-123",
  mobileNumber: "81979145728",
};

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
});
