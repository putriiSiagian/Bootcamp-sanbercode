import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from "../../../pom/login/login.cy";

Given('I am on the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I enter invalid username and password', () => {
    const invalidUsername = 'invalidUser';
    const invalidPassword = 'invalidPass';
    
    loginPage.loginWithInvalidCredentials(invalidUsername, invalidPassword);
});

Then('I should see an error message', () => {
    loginPage.invalidCredentials().should('contain.text', 'Invalid username or password');
});
