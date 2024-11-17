class searchbarPage {
    search_bar(){

        //navigate the Search bar.
        cy.get('#small-searchterms').should('be.visible');
        cy.should('have.attr','value','Search store').type('book{enter}');
        //verify page url.
        cy.url().should('include','/search?q=book');
         //verify advance search option.
         cy.get('.basic-search > .reversed').should('be.visible');
        //verify search result.
        cy.get('.product-title > a').should('be.visible');
        //verify actual price.
        cy.get('.actual-price').should('be.visible').contains('10.00');
        //verify rating.
        cy.get('.rating > div').should('be.visible');
        //veriy add to cart button.
        cy.get('.button-2').should('be.visible');
        //verify product image.
        cy.get('.picture > a > img').should('be.visible');
    }

    sortingProduct(){
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
        //reload page
        cy.reload();
        //verify view as, select list.
        cy.get('#products-viewmode').should('be.visible').select('List')
        }

        selectingProduct(){
            //click on product
            cy.get('.product-item > .picture > a > img').should('be.visible').click()
            //verify page url.
            cy.url().should('include','health')
            //verify quantity option.
            cy.get('.qty-input').should('be.visible').clear().type('3');
            //verify short discription text.
            cy.get('.short-description').should('be.visible').contains('Worried about your health. Get the newest insights here!')
            //verify actual price.
            cy.get('.price-value-22').should('be.visible').contains('10.00')
            //verify rating stars.
            cy.get('.product-review-box > .rating > div').should('be.visible')
            //verify reviwes.
            cy.get('.product-review-links > :nth-child(1)').should('be.visible').contains('478 review(s)')
            //verify add riviews.
            cy.get('.product-review-links > :nth-child(3)').should('be.visible');
        }

        wishlistButton(){
            //verify add to wishlist button.
            cy.get('#add-to-wishlist-button-22').should('be.visible')
                
            }
        emailAFriendButton(){
            //verify Email a friend button.
            cy.get('.email-a-friend > .button-2').should('be.visible').click();
            cy.url().should('include', 'productemailafriend/22')
            cy.get('h1').should('be.visible').contains('Email a friend')
            //enter email your friend.
            cy.get('#FriendEmail').should('be.visible').type('kbeg461@gmail.com')
            //enter your email.
            cy.get('#YourEmailAddress').should('be.visible').clear().type('kaifmirza5665@gmail.com');
            //type box mail. 
            cy.get('#PersonalMessage').should('be.visible').type('This is a test message');
            //click send email.
            cy.get('form > .buttons > .button-1').should('be.visible').click();
            //verify success email sent message.
            cy.get('.result').should('be.visible').contains('Your message has been sent.')
            

            cy.go('back');
            cy.go('back');

            
        }

        compareListButton(){
             //verify add to compare list.
             cy.get('.compare-products > .button-2').should('be.visible').click()
             //verify compare list page.
             cy.url().should('include', 'compareproducts')
             //verify compare list page.
             cy.get('h1').should('be.visible').contains('Compare products')
             //verify which book user selected that showing.
             cy.get('.overview > td.a-center').should('be.visible')
             //remove book frome comape list.
             cy.get('.button-2').should('be.visible').click()
             //verify product successfully removed message.
             cy.get('.page-body').should('be.visible')

             cy.go('back');
             cy.go('back');
             
            
        }

        addtoCartButton(){
            //verify add to cart button.
            cy.get('#add-to-cart-button-22').should('be.visible');
            //
        }       
            
    }

export default searchbarPage;