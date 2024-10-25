export default class adminPage {
    static verifyLoginPage() {
        return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static buttonSubmit(){
        return cy.get('[type="submit"]');
    }
    static invalidCredentials(){
        return cy.get('[class="oxd-alert-content oxd-alert-content--error"]');
    }
    static dashboardPage(){
        return cy.get('h6').contains('Dashboard');
    }
    // Add button
    static clickAdminButton() {
        return cy.get('[href="/web/index.php/admin/viewAdminModule"]').click();
    }
    static clickAddButton() {
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').first().click();
    }

    // Reset button in the Admin page
    static clickResetButton() {
        return cy.get('button').contains('Reset').click();
    }

    // Search button in the Admin page
    static clickSearchButton() {
        return cy.get('button[type="submit"]').contains('Search').click();
    }
    static inputAdminSearchUsername() {
        return cy.get('input[placeholder="Username"]');
    }
    static verifyAddUserForm() {
        return cy.get('h6').contains('Add User');
    }
    static verifySearchResults() {
        return cy.get('.oxd-table-card');
    }

    // select User Role
    static selectUserRole(role) {
        return cy.get('.oxd-select-text').first().click().get('.oxd-select-dropdown').contains(role).click();
    }
    static inputEmployeeName() {
        return cy.get('input[placeholder="Type for hints..."]');
    }
    static inputNewUsername(username) {
        return cy.get('input[name="username"]').type(username);
    }
    static selectStatus(status) {
        return cy.get('.oxd-select-text').last().click().get('.oxd-select-dropdown').contains(status).click();
    }
    static inputPasswordAddUser(password) {
        return cy.get('[name="password"]').type(password);
    }
    static inputConfirmPassword(password) {
        return cy.get('[name="confirmPassword"]').type(password);
    }
    static clickSaveButton() {
        return cy.get('.oxd-button--secondary').contains('Save').click();
    }
}
