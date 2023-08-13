<p align="center">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" />
</p>

- [TDS Challenge](#tds-challenge)
  - [How to Run](#how-to-run)
  - [Challenge Specification](#challenge-specification)
  - [Test Plan](#test-plan)
    - [Functionalities](#functionalities)
    - [Key Scenarios](#key-scenarios)
    - [Testing Approach](#testing-approach)
  - [Testing Activities](#testing-activities)
    - [Successful Registration](#successful-registration)
    - [Successful Login](#successful-login)
    - [Login Failure](#login-failure)
    - [Purchase Process](#purchase-process)

# TDS Challenge

> Developed to TDS Company during job selection process

## How to Run

Follow these steps to set up and run this project:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

2. Clone this repository to your local machine.
3. Install the project dependencies by running:
   ```bash
   npm install
   ```
4. Open the Cypress GUI using:
    ```bash
    npx cypress open
    ```


## Challenge Specification
For the website [automationexercise](https://www.automationexercise.com/), perform the following activities: 

1. Create a test plan and a testing strategy that cover the functionalities of "Login," "Registration," and the "Purchasing Process" on the site.
2. Describe the testing activities used in the test planning.
3. Prepare an automated script with regression testing for the mentioned site, encompassing the two test conditions

What will be evaluated?
- Organizational ability
- Clarity
- Proficiency in testing activities
- Test objectivity
- Coverage criteria used in the selection of each written test.

## Test Plan
### Functionalities
- Login
- Registration
- Website purchase process

### Key Scenarios
- Successful registration
- Successful login
- Login failures
- Complete purchase process

### Testing Approach
- Automated

## Testing Activities
### Successful Registration
1. Click on the 'Signup/Login' button on the homepage.
2. Fill in the initial form in the "New User Signup" area and click on the "Signup" button.
3. Fill the rest of the form and click on 'Create Account' button.
4. Verify if the "Account Created!" message is displayed.
5. Check if the username is displayed in the Header of the page
6. Click the "Delete Account" button and verify if the "Account Deleted!" message is displayed.

### Successful Login
1. Click on the 'Signup/Login' button on the homepage.
2. Fill in the login fields with valid credentials.
3. Confirm the display of the logged-in user's name in the page header.

### Login Failure
1. Click on the 'Signup/Login' button on the homepage.
2. Fill in the login fields with nonexistent credentials.
3. The message "Your email or password is incorrect!" should be displayed below the form.

### Purchase Process
1. Log in with a registered user.
2. Navigate to the products page.
3. Add a product to the cart.
4. Go to the cart.
5. Verify if the correct product name is displayed in the cart.
6. Proceed to checkout.
7. Verify if the delivery details match those of the user.
8. Fill in the payment card details.
9. Confirm payment and verify if the "Order Placed!" message is displayed.