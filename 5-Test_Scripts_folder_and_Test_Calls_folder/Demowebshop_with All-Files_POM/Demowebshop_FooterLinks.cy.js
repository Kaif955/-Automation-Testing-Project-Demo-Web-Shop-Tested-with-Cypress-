class footerLinks{
    aboutPage(){
        //Navigate the About page.
        cy.get('.information > ul > :nth-child(5) > a').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','about-us')
        //verify the page title.
        cy.contains('About us').should('be.visible')
    }
    privacyPage(){
        //Navigate the Privacy page.
        cy.get('.information > ul > :nth-child(3) > a').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','privacy-policy')
        //verify the page title.
        cy.contains('Privacy policy').should('be.visible')
    }
    conditionsPage(){
        //Navigate the Conditions page.
        cy.get('.information > ul > :nth-child(2) > a').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','conditions-of-use')
        //verify the page title.
        cy.contains('Conditions of use').should('be.visible')
    }
    siteMapPage(){
        //Navigate the SiteMap page.
        cy.get('.information > ul > :nth-child(1) > a').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','sitemap')
        //verify the page title.
        cy.contains('Sitemap').should('be.visible')
    }

    contactUsPage(){
        //Navigate the ContactUs page.
        cy.get('.information > ul > :nth-child(6) > a').should('be.visible').click()
        //verify the page url.
        cy.url().should('include','contactus')
        //verify the page title.
        cy.contains('Contact us').should('be.visible')
    }
}

export default footerLinks;