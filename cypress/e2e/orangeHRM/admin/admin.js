import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import adminPage from "../../../pom/login/admin.cy";
import loginPage from "../../../pom/login/login.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(5000);
});

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text', 'Login');
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
    loginPage.dashboardPage().should('contain.text', 'Dashboard');
});

Then('I Click the Admin button', () => {
    adminPage.clickAdminButton().should('contain.text', 'Admin');
});

Then('I Verify Admin Page is displayed', () => {
    cy.get('h5').should('have.text', 'System Users');
});


When('I click the Add button', () => {
    cy.intercept('GET', '**/saveSystemUser').as('addUser');
    adminPage.clickAddButton();
    cy.wait('@addUser');
});

Then('I should see the Add User form', () => {
    adminPage.verifyAddUserForm().should('contain.text', 'Add User');
});

When('I fill in the Add User form with valid data', () => {
    cy.get('[name="userRole"]').select('Admin'); 
    cy.get('[name="employeeName"]').type('John Doe'); 
    cy.get('[name="username"]').type('John'); 
    cy.get('[name="status"]').select('Enabled'); 
    cy.get('[name="password"]').type('Password123!'); 
    cy.get('[name="confirmPassword"]').type('Password123!'); 
});

When('I click the Save button', () => {
    cy.intercept('POST', '**/saveSystemUser').as('saveUser');
    cy.get('[type="submit"]').contains('Save').click(); 
    cy.wait('@saveUser').its('response.statusCode').should('eq', 200); 
});

Then('I should see the newly added user in the list', () => {
    adminPage.verifySearchResults().should('contain.text', 'newuser123');
});

When('I fill in the Username field', () => {
    adminPage.inputAdminSearchUsername().type('testuser');
});

When('I click the Reset button', () => {
    adminPage.clickResetButton();
});

Then('I should see the Username field is cleared', () => {
    adminPage.inputAdminSearchUsername().should('have.value', '');
});

When('I enter a Username to search', () => {
    adminPage.inputAdminSearchUsername().type('Admin');
});

When('I click the Search button', () => {
    cy.intercept('POST', '**/searchSystemUsers').as('searchUsers');
    adminPage.clickSearchButton();
    cy.wait('@searchUsers');
});

Then('I should see search results related to the Username', () => {
    adminPage.verifySearchResults().should('contain.text', 'Admin');
});
