class computersPage{
    desktops_page() {
        //Navigate the computer page
        cy.get('.top-menu > :nth-child(2) > [href="/computers"]').invoke('show')
        cy.xpath('(//a[@href="/desktops"])[1]').click({force:true});
        //verify the page url
        cy.url().should('include','desktops');


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
        cy.get(':nth-child(2) > .product-item > .details > .product-title > a').should('be.visible').click() 
        //verify page url with book name.
        cy.url().should('include', '/build-your-cheap-own-computer')
        //verify quantity option.
        cy.get('.qty-input').should('be.visible').clear().type('2');
        //verify short discription text.
        cy.get('.short-description').should('be.visible').contains('Build it');
        //verify actual price.
        cy.get('.price-value-72').should('be.visible').contains('800.00')
        //verify rating stars.
        cy.get('.product-review-box > .rating').should('be.visible')
        //verify reviwes.
        cy.get('.product-review-links > :nth-child(1)').should('be.visible').contains('588 review(s)')

        //verify slelct the processor with Fast.
        cy.get('#product_attribute_72_5_18_65').should('be.visible').click()
        //verify select RAM with 8GB
        cy.get('#product_attribute_72_6_19_91').should('be.visible').click()
        //verify select hdd with 400-GB
        cy.get('#product_attribute_72_3_20_58').should('be.visible').click()
        //verify select Software with office suite (+100.00)
        cy.get('#product_attribute_72_8_30_94').should('be.visible').click()



        //verify add to wishlist button.
        //cy.get('#add-to-wishlist-button-14').should('be.visible')  //its not existing in the page.   //it's not exsisting in the page.
        //verify Email a friend.
        cy.get('.email-a-friend > .button-2').should('be.visible')
        //verify add to compare list.
        cy.get('.compare-products > .button-2').should('be.visible')
        //verify add to cart button.
        cy.get('#add-to-cart-button-72').should('be.visible');

    }

    notebooks_Page(){

        //Navigate the computer page
        cy.get('.top-menu > :nth-child(2) > [href="/computers"]').invoke('show')
        cy.xpath('(//a[@href="/notebooks"])[1]').click({force:true});
        //verify the page url
        cy.url().should('include','notebooks');


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
        cy.get('.product-title > a').should('be.visible').click() 
        //verify page url with book name.
        cy.url().should('include', '/141-inch-laptop')
        //verify quantity option.
        cy.get('.qty-input').should('be.visible').clear().type('2');
        //verify short discription text.
        cy.get('.short-description').should('be.visible').contains('Unique Asian-influenced imprint wraps ');
        //verify actual price.
        cy.get('.price-value-31').should('be.visible').contains('1590.00')
        //verify rating stars.
        cy.get('.product-review-box > .rating').should('be.visible')
        //verify reviwes.
        cy.get('.product-review-links > :nth-child(1)').should('be.visible').contains('988 review(s)')

        //verify the peragraph.
        cy.get('p').should('be.visible').contains('Optimize your mobility with a BrightView 14.1-inch display that has the same viewable area as a 15.4-inch screen--in a notebook')

        //verify add to wishlist button.
        //cy.get('#add-to-wishlist-button-14').should('be.visible')  //its not existing in the page.   //it's not exsisting in the page.

        //verify Email a friend.
        cy.get('.email-a-friend > .button-2').should('be.visible')
        //verify add to compare list.
        cy.get('.compare-products > .button-2').should('be.visible')
        //verify add to cart button.
        cy.get('#add-to-cart-button-31').should('be.visible');

    }

    accessories_Page(){
        //Navigate the computer page
        cy.get('.top-menu > :nth-child(2) > [href="/computers"]').invoke('show')
        cy.xpath('(//a[@href="/accessories"])[1]').click({force:true});
        //verify the page url
        cy.url().should('include','accessories');


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
        cy.get('.remove-price-range-filter').should('be.visible').click()



        //select the product.
        cy.xpath('//a[@title="Show details for TCP Public Complete"]').should('be.visible').click() 
        //verify page url with book name.
        cy.url().should('include', '/copy-of-copy-of-')
        //verify quantity option.
        cy.get('.qty-input').should('be.visible').clear().type('2');
        //verify short discription text.
        cy.get('.short-description').should('be.visible').contains('TCP SPT, Material, Exam, TaaS 2 Month, 4 Days instructor in Saturn tower');
        //verify actual price.
        cy.get('.price-value-65').should('be.visible').contains('3000.00')
        //verify rating stars.
        cy.get('.product-review-box > .rating').should('be.visible')
        //verify reviwes.
        cy.get('.product-review-links > :nth-child(1)').should('be.visible').contains('163 review(s)')

        //verify add to wishlist button.
        cy.get('#add-to-wishlist-button-65').should('be.visible')  
        //verify Email a friend.
        cy.get('.email-a-friend > .button-2').should('be.visible')
        //verify add to compare list.
        cy.get('.compare-products > .button-2').should('be.visible')
        //verify add to cart button.
        cy.get('#add-to-cart-button-65').should('be.visible');
    }
}

export default computersPage;