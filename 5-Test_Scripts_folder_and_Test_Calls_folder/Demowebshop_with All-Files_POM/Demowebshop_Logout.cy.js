class logoutPage{
    logout(){
        //Navigate the logout page
        cy.get('.ico-logout').should('be.visible').click()
    }
}
export default logoutPage