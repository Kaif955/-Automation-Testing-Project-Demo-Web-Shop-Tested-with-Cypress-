class apparelShoes{
    apparel_Shoes() {
        //Navigate to the Apparel & Shoes page
        cy.get('.top-menu > :nth-child(4)').should('be.visible').click()
        //verify that the page url
        cy.url().should('include', '/apparel-shoes')


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


        //select the product.
        cy.xpath('(//a[@href="/blue-jeans"])[2]').should('be.visible').click() 
        //verify page url with book name.
        cy.url().should('include', 'blue-jeans')
        //verify quantity option.
        cy.get('.qty-input').should('be.visible').clear().type('3');
        //verify short discription text.
        cy.get('.short-description').should('be.visible').contains('Jeans')
        //verify actual price.
        cy.get('.price-value-36').should('be.visible').contains('1.00')
        //verify rating stars.
        cy.get('.product-review-box > .rating').should('be.visible')
        //verify reviwes.
        cy.get('.product-review-links > :nth-child(1)').should('be.visible').contains('379 review(s)')
        //verify add to wishlist button.
        //cy.get('#add-to-wishlist-button-22').should('be.visible')  //its not existing in the page.
        //verify Email a friend.
        cy.get('.email-a-friend > .button-2').should('be.visible')
        //verify add to compare list.
        cy.get('.compare-products > .button-2').should('be.visible')
        //verify add to cart button.
        cy.get('#add-to-cart-button-36').should('be.visible');
        
    }
    
}
export default apparelShoes;