class electronicsPage{
    cameraPhoto_Page(){
        //Navigate the computer page
        cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').invoke('show')
        cy.xpath('(//a[@href="/camera-photo"])[1]').click({force:true});
        //verify the page url
        cy.url().should('include','camera-photo');


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
        cy.get('.price-range-selector > :nth-child(1) > a').should('be.visible');
        //remove filter
        //cy.get('.remove-filter').should('be.visible').click({force: true})
        //verify url
        //cy.url().should('include', '/camera-photo')


        //select the product.
        cy.xpath('(//a[@href="/3d-camcorder"])[1]').should('be.visible').click() 
        //verify page url with book name.
        cy.url().should('include', '/3d-camcorder')
        //verify quantity option.
        //cy.get('.qty-input').should('be.visible').clear().type('2');
        //verify short discription text.
        cy.get('.short-description').should('be.visible').contains("World's first 3D Shooting");
        //verify actual price.
        cy.get('.price-value-41').should('be.visible').contains('1300.00')
        //verify rating stars.
        cy.get('.product-review-box > .rating').should('be.visible')
        //verify reviwes.
        cy.get('.product-review-links > :nth-child(1)').should('be.visible').contains('265 review(s)')

        //verify add to wishlist button.
        //cy.get('#add-to-wishlist-button-14').should('be.visible')  //its not existing in the page.   //it's not exsisting in the page.
        //verify Email a friend.
        cy.get('.email-a-friend > .button-2').should('be.visible')
        //verify add to compare list.
        cy.get('.compare-products > .button-2').should('be.visible')
        //verify add to cart button.
        //cy.get('#add-to-cart-button-72').should('be.visible');   //it's not exsisting in the page.
    }

    cellPhones_Page(){
        //Navigate the computer page
        cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').invoke('show')
        cy.xpath('(//a[@href="/cell-phones"])[1]').click({force:true});
        //verify the page url
        cy.url().should('include','cell-phones');


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
        cy.xpath('(//a[@href="/smartphone"])[1]').should('be.visible').click() 
        //verify page url with book name.
        cy.url().should('include', '/smartphone')
        //verify quantity option.
        cy.get('.qty-input').should('be.visible').clear().type('2');
        //verify short discription text.
        cy.get('.short-description').should('be.visible').contains("Newest Tricentis smartphone");
        //verify actual price.
        cy.get('.price-value-43').should('be.visible').contains('100.00')
        //verify rating stars.
        cy.get('.product-review-box > .rating').should('be.visible')
        //verify reviwes.
        cy.get('.product-review-links > :nth-child(1)').should('be.visible').contains('1773 review(s)')

        //verify add to wishlist button.
        cy.get('#add-to-wishlist-button-43').should('be.visible')  
        //verify Email a friend.
        cy.get('.email-a-friend > .button-2').should('be.visible')
        //verify add to compare list.
        cy.get('.compare-products > .button-2').should('be.visible')
        //verify add to cart button.
        cy.get('#add-to-cart-button-43').should('be.visible');   //it's not exsisting in the page.
    }
}
export default electronicsPage