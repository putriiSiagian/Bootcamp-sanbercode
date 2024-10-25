export default class forgotPasswordPage {
    static inputUsername() {
        return cy.get('[name="username"]');
    }
    static resetPasswordButton() {
        return cy.get('[type="submit"]'); 
    }
    static successMessage() {
        return cy.get('.oxd-text.oxd-text--h6'); 
    }
    static forgotPasswordLink() {
        return cy.get('.orangehrm-login-forgot-header').contains('Forgot your password?');
    }
}
