class pageHome{
    homePage() {
        //verify the web logo is visible
        cy.get('.header-logo > a > img').should('be.visible')

        //verify the search bar is visible
        cy.get('#small-searchterms').should('be.visible')

        //verify the search button is visible
        cy.get('form > .button-1').should('be.visible')

        //verify the shopping cart is visible
        cy.get('#topcartlink > .ico-cart').should('be.visible')

        //verify the wishlist is visible
        cy.get(':nth-child(4) > .ico-wishlist').should('be.visible')

        //verify the logout button is visible
        cy.get('.ico-logout').should('be.visible')

        //verify the profile is visible
        cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible')

        //verify the book category is visible
        cy.get('.top-menu > :nth-child(1)').should('be.visible')

        //verify the computers category is visible
        cy.get('.top-menu > :nth-child(2)').should('be.visible')

        //verify the electronics category is visible
        cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').should('be.visible')

        //verify the apparel category is visible
        cy.get('.top-menu > :nth-child(4) > a').should('be.visible')

        //verify the digital downloads category is visible
        cy.get('.top-menu > :nth-child(5) > a').should('be.visible')

        //verify the jewelry category is visible
        cy.get('.top-menu > :nth-child(6) > a').should('be.visible')

        //verify the gift cards category is visible
        cy.get('.top-menu > :nth-child(6) > a').should('be.visible')

        //verify the category option is visible
        cy.get('.block-category-navigation > .title > strong').should('be.visible')

        //verify the Newslater option is visible
        cy.get('.block-newsletter').should('be.visible').contains('Newsletter')
        cy.get('.block-newsletter').should('be.visible').type('kbeg461@gmail.com')
        cy.get('#newsletter-subscribe-button').should('be.visible').click()
        //verify tha success message is visible
        cy.get('#newsletter-result-block').should('be.visible').contains('Thank you for signing up! A verification ')



        //verify the popular tags
        cy.get('.block-popular-tags').should('be.visible').contains('Popular tags')
        //verify the text
        cy.get('.tags > ul').should('be.visible').
        //verify the view all button
        cy.get('.view-all > a').should('be.visible').click()
        cy.url().should('include', '/producttag/al')
        cy.go('back')
        cy.url().should('include', 'https://demowebshop.tricentis.com/')
    }
}

export default pageHome;