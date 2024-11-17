class addtoCart{
    selectProduct() {
        //select any porduct
        cy.get(':nth-child(3) > .product-item > .picture > a > img').should('be.visible').click()
        //verify page url
        cy.url().should('include','141-inch-laptop');
        //verify price.
        cy.get('.price-value-31').should('be.visible').contains('1590.00')
        //verify product 
        cy.get('#addtocart_31_EnteredQuantity').should('be.visible').clear().type('3')
        //click on add to cart
        cy.get('#add-to-cart-button-31').should('be.visible').click()
        //verify product adding success message.
        cy.contains('The product has been added to your shopping cart').should('be.visible')
    }

    addtoCart(){
        //navigate to cart page
        cy.get('.ico-cart > .cart-label').should('be.visible').click()
        //verify cart page url
        cy.url().should('include','cart')
        //verify product added to cart
        cy.get('.product-name').should('be.visible').contains('14.1-inch Laptop')
        //Remove previous product from cart first select your product.
        //cy.get(':nth-child(1) > .remove-from-cart > input').should('be.visible').check();
        //Click Remove button.
        //cy.get('.update-cart-button').should('be.visible').click()

        //update quantity
        cy.get('.qty-input').should('be.visible').clear().type('2');

        //update shoping cart button
        cy.get('.update-cart-button').should('be.visible')

        //continoue shoping button.
        cy.get('.continue-shopping-button').should('be.visible').click()
        cy.url().should('include','search')
        cy.go('back');

        //apply coupon code random in inbox then click on
        cy.get('.discount-coupon-code').should('be.visible').type('1236');
        cy.get('.coupon-box > .coupon-code > .button-2').should('be.visible').click()
        //if coupon worng shown error.
        cy.get('.message').should('be.visible').contains("The coupon code you entered couldn't be applied to your order")

        //Enter gift card code random in inbox then click on
        cy.get('.gift-card-coupon-code').should('be.visible').type('d3hy9');
        cy.get('.giftcard-box > .coupon-code > .button-2').should('be.visible').click()
        //if gift card worng shown error.
        cy.get('.message').should('be.visible').contains("The coupon code you entered couldn't be applied to your order")

        //update quantity
        cy.get('.qty-input').should('be.visible').clear().type('2 {enter}');

        //Verify Estimate shipping
        cy.get('#CountryId').should('be.visible').select('India').should('have.value','41');
        cy.get('#StateProvinceId').should('be.visible').select('Other (Non US)').should('have.value','0');   
        cy.get('#ZipPostalCode').should('be.visible').clear().type('242307').should('have.value','242307');
        cy.get(':nth-child(4) > .button-2').should('be.visible').click()
        //after ckicking shown message
        cy.get(':nth-child(1) > .option-name').should('be.visible').contains('Ground (0.00)')



        //verify sub-total ammount.
        cy.get(':nth-child(1) > .cart-total-right').should('be.visible').contains('3180.00')

        //i agree with term an dconditions checkbox
        cy.get('#termsofservice').should('be.visible').check();        
    }

    checkOut(){
        //navigate to checkout button.
        cy.get('#checkout').should('be.visible').click();
        //verify page url.
        cy.url().should('include','/onepagecheckout');

        //verify there shoing billing address.
        cy.get('#opc-billing > .step-title > h2').should('be.visible').contains('Billing address');

        //Filling the shipping form, if user has visit first time then it will fill the form, otherwise it will not fill the form.
        // //First name
        // cy.get('#BillingNewAddress_FirstName').should('be.visible').clear().type('Kaif');
        // //Last name
        // cy.get('#BillingNewAddress_LastName').should('be.visible').clear().type('Beg');
        // //Email id
        // cy.get('#BillingNewAddress_Email').should('be.visible').clear().type('kaifmirza5665@gmail.com');
        // //company name
        // cy.get('#BillingNewAddress_Company').should('be.visible').type('ABC');
        // //select country
        // cy.get('#BillingNewAddress_CountryId').should('be.visible').select('India');
        // //select state
        // cy.get('#BillingNewAddress_StateProvinceId').should('be.visible').select();
        // //city name
        // cy.get('#BillingNewAddress_City').should('be.visible').type('Shahjahanpur');
        // //Address1
        // cy.get('#BillingNewAddress_Address1').should('be.visible').type('Tilhar');
        // //Address2
        // cy.get('#BillingNewAddress_Address2').should('be.visible').type('Shahjahanpur');
        // //Zip code
        // cy.get('#BillingNewAddress_ZipPostalCode').should('be.visible').type('242307');
        // //Phone number
        // cy.get('#BillingNewAddress_PhoneNumber').should('be.visible').type('8299376556');
        // //Fax number
        // cy.get('#BillingNewAddress_FaxNumber').should('be.visible').type('82993765838');

        //Select shipping Address
        //Continoue button
        cy.get('#billing-buttons-container > .button-1').should('be.visible').click();

        //Select picup store
        cy.get('#PickUpInStore').should('be.visible').check();
        //Continoue button
        cy.get('#shipping-buttons-container > .button-1').should('be.visible').click();
        
        //Select pyment method (Cash on delivery, credit card, check payment, purchase order)
        //choosen cash on delivery
        cy.get('#paymentmethod_0').should('be.visible').check();
        //Continoue button
        cy.get('#payment-method-buttons-container > .button-1').should('be.visible').click();

        //Pyment information
        cy.contains('You will pay by COD').should('be.visible');
        //Continoue button
        cy.get('#payment-info-buttons-container > .button-1').should('be.visible').click();


        //confirm order
        cy.contains('Billing Address').should('be.visible');
        //product visible
        cy.get('.product-name').should('be.visible').contains('14.1-inch Laptop');
        //Continoue button
        cy.get('#confirm-order-buttons-container > .button-1').should('be.visible').click();

        //order completed and success message
        cy.contains('Your order has been successfully processed!').should('be.visible');
        //order number
        //cy.get('.details > :nth-child(1)').should('be.visible').contains('Order number: 1830133');

        
        //if you want to see your order details
        cy.get('.button-2').should('be.visible').click();
    }
}
export default addtoCart;