class wishlistPage{
    productSlect(){
        //Select the product
        cy.get('.top-menu > :nth-child(4)').should('be.visible').click()
        cy.get(':nth-child(1) > .product-item > .picture > a > img').should('be.visible').click()
        //Add to wishlist
        cy.get('#add-to-wishlist-button-5').should('be.visible').click()
        //success message
        cy.contains('The product has been added to your wishlist').should('be.visible')

    }

    wishList(){
        //Navigate the wishlist page
        cy.get('.ico-wishlist > .cart-label').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','wishlist')
        //verify the qunatity upate
        cy.get('.qty-input').should('be.visible').clear().type('2 {enter}');
        //Total amount.
        cy.get('.product-subtotal').should('be.visible').contains('22.00')
        //update wishlist button
        cy.get('.update-wishlist-button').should('be.visible')
        //add to cart button
        cy.get('.wishlist-add-to-cart-button').should('be.visible')
        //Email friend button
        cy.get('.email-a-friend-wishlist-button').should('be.visible')
        //Wishlist url Exists
        cy.get('.share-link').should('be.visible')
        //Remove product from wishlist
        //select remove checkbox
        cy.get('.remove-from-cart > input').should('be.visible').check()
        //click on update wishlist
        cy.get('.update-wishlist-button').should('be.visible').click()
        //verify the product removed from wishlist
        cy.get('.wishlist-content').should('be.visible').contains('The wishlist is empty!')
    }
}
export default wishlistPage;