export class Signup {
  /**
   *
   * @param {"Mr | Mrs"} gender
   */
  genderRadius(gender) {
    const Mr = cy.get("#id_gender1");
    const Mrs = cy.get("#id_gender2");
    gender === "Mr" ? Mr.click() : Mrs.click();
  }

  name() {
    return cy.get('[data-qa="name"]');
  }

  email() {
    return cy.get('[data-qa="email"]');
  }

  password() {
    return cy.get('[data-qa="password"]');
  }

  /**
   *
   * @param {"0 - 31"} day
   */
  selectBirthDay(day) {
    return cy.get("select[data-qa='days']").select(day);
  }

  /**
   *
   * @param {"January - December"} month
   */
  selectBirthMonth(month) {
    return cy.get("select[data-qa='months']").select(month);
  }

  /**
   *
   * @param {"1900 - 2005"} year
   */
  selectBirthYear(year) {
    return cy.get("select[data-qa='years']").select(year);
  }

  /**
   *
   * @param {"True | False"} shouldClick
   */
  newsletter(shouldClick) {
    if (shouldClick) cy.get("#newsletter").click();
  }

  /**
   *
   * @param {"True | False"} shouldClick
   */
  offers(shouldClick) {
    if (shouldClick) cy.get("#optin").click();
  }

  firstName() {
    return cy.get('[data-qa="first_name"]');
  }

  lastName() {
    return cy.get('[data-qa="last_name"]');
  }

  company() {
    return cy.get('[data-qa="company"]');
  }

  address() {
    return cy.get('[data-qa="address"]');
  }

  /**
   *
   * @param {"India | United States | Canada | Australia | Israel | New Zealand | Singapoure"} country
   * @returns
   */
  selectCountry(country) {
    return cy.get("select[data-qa='country']").select(country);
  }

  state() {
    return cy.get('[data-qa="state"]');
  }

  city() {
    return cy.get('[data-qa="city"]');
  }

  zipCode() {
    return cy.get('[data-qa="zipcode"]');
  }

  mobileNumber() {
    return cy.get('[data-qa="mobile_number"]');
  }

  createAccountButton() {
    return cy.get('[data-qa="create-account"]');
  }

  createAccountResult() {
    return cy.get('[data-qa="account-created"]');
  }

  continueButton() {
    return cy.get('[data-qa="continue-button"]');
  }
}
