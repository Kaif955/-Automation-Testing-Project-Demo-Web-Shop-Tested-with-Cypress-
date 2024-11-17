class jewelryPage{
    jewelry_Page() {
        //Navigate to jewelry page
        cy.get('.top-menu > :nth-child(6) > a').should('be.visible').click()
        //verify the page url
        cy.url().should('include', '/jewelry')


        //verify sort by Dropdown select Name: Z to A .
        cy.get('#products-orderby').should('be.visible').select('Name: Z to A')
        //reload page
        cy.reload();
        //verify sort by Dropdown select Name: A to Z .
        cy.get('#products-orderby').should('be.visible').select('Name: A to Z')
        //reload page
        cy.reload();
        //verify sort by Dropdown select Price: Low to High.
        cy.get('#products-orderby').should('be.visible').select('Price: Low to High')


        //verify Display per page , slect 4
        cy.get('#products-pagesize').should('be.visible').select('4')
        //reload page
        cy.reload();
        //verify Display per page , slect 8
        cy.get('#products-pagesize').should('be.visible').select('12')


        //verify view as, select List
        cy.get('#products-viewmode').should('be.visible').select('List')
        //reload page
        cy.reload();
        //verify view as, select Grid
        cy.get('#products-viewmode').should('be.visible').select('Grid')

        //verify price filter
        cy.get('.price-range-selector > :nth-child(1) > a').should('be.visible').click()
        //remove filter
        cy.get('.remove-filter').should('be.visible').click()



        //select the product.
        cy.get(':nth-child(2) > .product-item > .picture > a > img').should('be.visible').click() 
        //verify page url with book name.
        cy.url().should('include', 'black-white-diamond-heart')
        //verify quantity option.
        cy.get('.qty-input').should('be.visible').clear().type('3');
        //verify short discription text.
        cy.get('.short-description').should('be.visible').contains('Heart Pendant 1/4 Carat (ctw) in Sterling Silver')
        //verify actual price.
        cy.get('.price-value-14').should('be.visible').contains('130.00')
        //verify rating stars.
        cy.get('.product-review-box > .rating').should('be.visible')
        //verify reviwes.
        cy.get('.product-review-links > :nth-child(1)').should('be.visible').contains('522 review(s)')
        //verify add to wishlist button.
        cy.get('#add-to-wishlist-button-14').should('be.visible')  //its not existing in the page.
        //verify Email a friend.
        cy.get('.email-a-friend > .button-2').should('be.visible')
        //verify add to compare list.
        cy.get('.compare-products > .button-2').should('be.visible')
        //verify add to cart button.
        cy.get('#add-to-cart-button-14').should('be.visible');



    }
}
export default jewelryPage;