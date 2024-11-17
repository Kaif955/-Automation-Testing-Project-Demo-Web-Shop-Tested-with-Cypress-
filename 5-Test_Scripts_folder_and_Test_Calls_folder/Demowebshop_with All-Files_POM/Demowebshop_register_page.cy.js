class registeration{
   visitUrl(){
     //verify the website url.
     cy.visit('https://demowebshop.tricentis.com/');
    }
    invalidRegister(){
        //navigate to register page.
        cy.get('.ico-register').should('be.visible').click().should('have.text','Register');
        //verify register page url.
        cy.url().should('include','register');
  
        //enter the details.
        //choose gender.
        cy.get('#gender-male').should('be.visible').click();
        //enter first name.
        cy.get('#FirstName').should('be.visible').type('Kaif');
        //enter last name.
        cy.get('#LastName').should('be.visible').type('Beg');
        //enter invalid email.
        cy.get('#Email').should('be.visible').type('kbeg46@-type.com');
        //enter password.
        cy.get('#Password').should('be.visible').type('654321');
        //enter confirm password.
        cy.get('#ConfirmPassword').should('be.visible').type('654321');
        //click on register button.
        cy.get('#register-button').should('be.visible').click();

        //verify error message.
        cy.get('.field-validation-error').should('be.visible').should('contains.text','Wrong email');

        //Reload the page.
        cy.reload();
      }  

      validRegister(){
        //navigate to register page.
        cy.get('.ico-register').should('be.visible').click().should('have.text','Register');
        //verify register page url.
        cy.url().should('include','register');
  
        //enter the details.
        //choose gender.
        cy.get('#gender-male').should('be.visible').click();
        //enter first name.
        cy.get('#FirstName').should('be.visible').type('Kaif');
        //enter last name.
        cy.get('#LastName').should('be.visible').type('Beg');
        //enter email.
        cy.get('#Email').should('be.visible').type('kaifmirza5665@gmail.com');
        //enter password.
        cy.get('#Password').should('be.visible').type('654321');
        //enter confirm password.
        cy.get('#ConfirmPassword').should('be.visible').type('654321');
        //click on register button.
        cy.get('#register-button').should('be.visible').click();

        //verify register success message.
       // cy.get('.result').should('be.visible').should('contains.text','Your registration completed');

        //click on continue button.
        // cy.get('.buttons > .button-1').should('be.visible').click();
      }  
}
export default registeration;





