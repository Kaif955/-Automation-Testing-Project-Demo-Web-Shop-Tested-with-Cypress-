import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Demowebshop Registration Page
Given('I visit the registration page', () => {
  cy.visit('/register');
});

When('I fill in the registration form', () => {
  cy.get('input[name="email"]').type('john.doe@example.com');
  cy.get('input[name="password"]').type('password123');
  cy.get('button[type="submit"]').click();
});

Then('I should see a success message', () => {
  cy.get('.success-message').should('contain', 'Registration successful');
});


// Demowebshop Login Page
Given('I visit the login page', () => {
  cy.visit('/login');
  
});

When('I enter valid credentials', () => {
  cy.get('input[name="email"]').type('john.doe@example.com');
  cy.get('input[name="password"]').type('password123');
  cy.get('button[type="submit"]').click();
});

Then('I should be redirected to the homepage', () => {
  cy.url().should('include', '/home');
});


// Demowebshop Search Bar
Given('I visit the homepage', () => {
  cy.visit('/');
});

When('I enter a product name in the search bar', () => {
  cy.get('input[name="search"]').type('laptop');
  cy.get('button[type="submit"]').click();
});

Then('I should see search results for that product', () => {
  cy.get('.search-results').should('contain', 'laptop');
});


// Demowebshop Books Page
Given('I visit the books category', () => {
  cy.visit('/books');
});

Then('I should see a list of books', () => {
  cy.get('.book-list').should('have.length.greaterThan', 0);
});


// Demowebshop Add to Cart and Checkout
Given('I visit a product page', () => {
  cy.visit('/product/1');
});

When('I click on "Add to Cart"', () => {
  cy.get('.add-to-cart').click();
});

Then('I should see the product in the cart', () => {
  cy.get('.cart').should('contain', 'Product 1');
});


// Demowebshop Wishlist
Given('I visit a product page', () => {
  cy.visit('/product/1');
});

When('I click on "Add to Wishlist"', () => {
  cy.get('.add-to-wishlist').click();
});

Then('the product should be added to the wishlist', () => {
  cy.get('.wishlist').should('contain', 'Product 1');
});


// Demowebshop Apparel & Shoes Page
Given('I visit the apparel & shoes category', () => {
  cy.visit('/apparel-shoes');
});

Then('I should see a list of apparel and shoes products', () => {
  cy.get('.apparel-shoes-list').should('have.length.greaterThan', 0);
});


// Demowebshop Digital Download Page
Given('I visit the digital downloads category', () => {
  cy.visit('/digital-downloads');
});

Then('I should see a list of digital products', () => {
  cy.get('.digital-download-list').should('have.length.greaterThan', 0);
});


// Demowebshop Jewelry Page
Given('I visit the jewelry category', () => {
  cy.visit('/jewelry');
});

Then('I should see a list of jewelry products', () => {
  cy.get('.jewelry-list').should('have.length.greaterThan', 0);
});


// Demowebshop Gift Cards Page
Given('I visit the gift cards category', () => {
  cy.visit('/gift-cards');
});

Then('I should see a list of gift cards', () => {
  cy.get('.gift-cards-list').should('have.length.greaterThan', 0);
});


// Demowebshop Computers Page
Given('I visit the computers category', () => {
  cy.visit('/computers');
});


Then('I should see a list of computers', () => {
  cy.get('.computers-list').should('have.length.greaterThan', 0);
});


// Demowebshop Electronics Page
Given('I visit the electronics category', () => {
  cy.visit('/electronics');
});

Then('I should see a list of electronics products', () => {
  cy.get('.electronics-list').should('have.length.greaterThan', 0);
});


// Demowebshop User Profile Page
Given('I am logged in', () => {
  cy.login('john.doe@example.com', 'password123');  // Define a custom login command if necessary
});

When('I visit the user profile page', () => {
  cy.visit('/profile');
});

Then('I should see my profile information', () => {
  cy.get('.profile-info').should('contain', 'John Doe');
});


// Demowebshop Footer Links
Given('I visit the homepage', () => {
  cy.visit('/');
});

When('I click on the "About Us" link in the footer', () => {
  cy.get('.footer').contains('About Us').click();
});

Then('I should be redirected to the "About Us" page', () => {
  cy.url().should('include', '/about-us');
});
