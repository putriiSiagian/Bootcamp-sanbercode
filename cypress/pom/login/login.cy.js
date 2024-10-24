export default class loginPage {
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
    static userDropdown() {
        return cy.get('.oxd-userdropdown-tab'); 
    }
    static logoutButton() {
        return cy.get('.oxd-userdropdown-link').contains('Logout'); 
    }
    static verifyLogout() {
        return cy.get('h5').contains('Login');
    }
    static loginWithInvalidCredentials(invalidUsername, invalidPassword) {
        cy.get('[name="username"]').type(invalidUsername);  
        cy.get('[name="password"]').type(invalidPassword);  
        cy.get('[type="submit"]').click(); 
}
}