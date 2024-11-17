class userProfilePage{
    userProfile(){
        //Navigate the profile page
        cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','/customer/info')
        //verify the page title.
        cy.get('h1').should('be.visible').contains('My account - Customer info')
        //verify the user personal details
        cy.get('.page').should('be.visible').contains(' Your Personal Details')       
    }

    
    userAddress(){
        //Navigate the profile page
        cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','/customer/info')
        //Navigate the address page
        cy.get(':nth-child(2) > .inactive').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','/customer/addresses')
        //verify the page title.
        cy.get('h1').should('be.visible').contains('My account - Addresses')
    }


    userOrders(){
        //Navigate the profile page
        cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','/customer/info')
        //Navigate the address page
        cy.get(':nth-child(3) > .inactive').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','/customer/orders')
        //verify the page title.
        cy.get('h1').should('be.visible').contains('My account - Orders')
        //verify the order is shown
        cy.get('.center-2').should('be.visible').contains('Order Number')
    }
    

    downloadableProducts(){
        //Navigate the profile page
        cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','/customer/info')
        //Navigate the address page
        cy.get(':nth-child(4) > .inactive').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','/customer/downloads')
        //verify the page title.
        cy.get('h1').should('be.visible').contains('My account - Downloadable products')
    }
    

    userSubsscription(){
        //Navigate the profile page
        cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','/customer/info')
        //Navigate the address page
        cy.get(':nth-child(5) > .inactive').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','/backinstocksubscriptions')
        //verify the page title.
        cy.get('h1').should('be.visible').contains('My account - Back in stock subscriptions')
        }


        userReward(){
            //Navigate the profile page
            cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible').click()
            //verify the page url.
            cy.url().should('include','/customer/info')
            //Navigate the address page
            cy.get(':nth-child(6) > .inactive').should('be.visible').click()
            //verify the page url.
            cy.url().should('include','/rewardpoints')
            //verify the page title.
            cy.get('h1').should('be.visible').contains('My account - Reward points')
            //verify the current balance
            cy.get('.current-balance').should('be.visible').contains('Your current balance is ')
        }


        userChangePassword(){
            //Navigate the profile page
            cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible').click()
            //verify the page url.
            cy.url().should('include','/customer/info')
            //Navigate the address page
            cy.get(':nth-child(7) > .inactive').should('be.visible').click()
            //verify the page url.
            cy.url().should('include','/customer/changepassword')
            //verify the page title.
            cy.get('h1').should('be.visible').contains('My account - Change password')
            
            //verify the old password inbox is exist
            cy.get('#OldPassword').should('be.visible')
            //verify the new password inbox is exist
            cy.get('#NewPassword').should('be.visible')
            //verify the confirm password inbox is exist
            cy.get('#ConfirmNewPassword').should('be.visible')
            //verify the change password button is exist
            cy.get('.buttons > .button-1').should('be.visible').contains('Change password')
        }
}
export default userProfilePage;