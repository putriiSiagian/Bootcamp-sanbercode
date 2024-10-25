import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import forgotPasswordPage from "../../../pom/forgotpassword/forgotpw.cy";

Given('I visit the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(5000);
});

When('I click on the Forgot Password link', () => {
    loginPage.forgotPasswordLink().click();
});

Then('I am redirected to the Forgot Password page', () => {
    cy.url().should('include', '/requestPasswordResetCode');
});

When('I enter my registered username', () => {
    forgotPasswordPage.inputUsername().type('admin');
});

When('I click the Reset Password button', () => {
    cy.intercept('POST', '**/requestPasswordResetCode').as('resetPassword');
    forgotPasswordPage.resetPasswordButton().click();
    cy.wait('@resetPassword').its('response.statusCode').should('eq', 200);
});

Then('I should see a success message indicating an email has been sent', () => {
    forgotPasswordPage.successMessage().should('be.visible').and('contain.text', 'Reset link sent');
});
