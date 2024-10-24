import {Given, When, Then } from"@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});

When('I submit the Username', () => {
    loginPage.inputUsername().type('Admin');
});

When('I submit the Password', () => {
    loginPage.inputPassword().type('admin123');
});

Then('I Click the button Login', () => {
    cy.intercept('GET', '**/action-summary').as('actionSummary');
    loginPage.buttonSubmit().click();
    cy.wait('@actionSummary');
});

Then('I Verify Login Success', () => {
    loginPage.dashboardPage().should('contain.text','Dashboard');
});

Then('I log out from the application', () => {
    cy.intercept('POST', '/api/logout').as('logout');
    loginPage.userDropdown().click();
    cy.wait(10000);
    loginPage.logoutButton().click();
    cy.wait('@logout');
    loginPage.verifyLoginPage().should('contain.text', 'Login');
});

// Invalid Login
When('I enter invalid username and password', () => {
    const invalidUsername = 'admin12';
    const invalidPassword = 'admin1234';

    loginPage.loginWithInvalidCredentials(invalidUsername, invalidPassword);
});

Then('I should see an error message', () => {
    cy.wait('@login').then((interception) => {
        expect(interception.response.statusCode).to.eq(401);
    });
    loginPage.errorMessage().should('contain.text', 'Invalid username or password');
});
