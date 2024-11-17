class loginPage{

    //verify forgot password link.
    forgotPassword(){
        //navigate the login page.
        cy.get('.ico-login').should('be.visible').click()
        //navigate the login page.
        cy.get('.forgot-password > a').should('be.visible').click();
        //verify the page url.
        cy.url().should('include','/passwordrecovery');
        //verify email field.
        cy.get('#Email').should('be.visible');
        //verify recover button.
        cy.get('form > .buttons > .button-1').should('be.visible');
        //navigate back to login page.
        cy.go('back');

    }

    //Login with invalid credentials.
    invalidLogin(){
        //navigate the login page.
        cy.get('.ico-login').should('be.visible').click()
        //verify page text.
        cy.contains('Welcome, Please Sign In!').should('be.visible')
        //verify the login page url.
        cy.url().should('include','/login')
        //enter invalid email.
        cy.get('#Email').should('be.visible').type('test@gmail.com')
        //enter invalid password.
        cy.get('#Password').should('be.visible').type('test123')
        //click on login button.
        cy.get('.login-button').should('be.visible').click()
        //verify error message.
        cy.get('.validation-summary-errors').should('be.visible').contains('Login was unsuccessful.')
        //Reload the page.
        cy.reload()
    }

    //Login with valid credentials.
    validLogin(){
        //navigate the login page.
        cy.get('.ico-login').should('be.visible').click()
        //verify page text.
        cy.contains('Welcome, Please Sign In!').should('be.visible')
        //verify the login page url.
        cy.url().should('include','/login')
        //enter valid email.
        cy.get('#Email').should('be.visible').type('kaifmirza5665@gmail.com')
        //enter valid password.
        cy.get('#Password').should('be.visible').type('654321')
        //Remember me checkbox.
        cy.get('#RememberMe').should('be.visible').check()
        //click on login button.
        cy.get('.login-button').should('be.visible').click();
        //verify page text.
        cy.contains('Welcome to our store').should('be.visible');
    }

    blankLogin(){
        //navigate the login page.
        cy.get('.ico-login').should('be.visible').click()
        //verify page text.
        cy.contains('Welcome, Please Sign In!').should('be.visible')
        //verify the login page url.
        cy.url().should('include','/login')
        //click on login button.
        cy.get('.login-button').should('be.visible').click();
        //Error message shown.
        cy.contains('Login was unsuccessful.').should('be.visible')
    }
}

export default loginPage;