Feature: Demowebshop Features Automation

  # Registration Page
  Feature: Demowebshop Registration Page
    Scenario: User registers successfully
      Given I visit the registration page
      When I fill in the registration form
      Then I should see a success message

  # Login Page
  Feature: Demowebshop Login Page
    Scenario: User logs in successfully
      Given I visit the login page
      When I enter valid credentials
      Then I should be redirected to the homepage

  # Search Bar
  Feature: Demowebshop Search Bar
    Scenario: User searches for a product
      Given I visit the homepage
      When I enter a product name in the search bar
      Then I should see search results for that product

  # Books Page
  Feature: Demowebshop Books Page
    Scenario: User views the books category
      Given I visit the books category
      Then I should see a list of books

  # Add to Cart and Checkout
  Feature: Demowebshop Add to Cart and Checkout
    Scenario: User adds a product to the cart and proceeds to checkout
      Given I visit a product page
      When I click on "Add to Cart"
      Then I should see the product in the cart

  # Wishlist
  Feature: Demowebshop Wishlist
    Scenario: User adds a product to the wishlist
      Given I visit a product page
      When I click on "Add to Wishlist"
      Then the product should be added to the wishlist

  # Apparel & Shoes Page
  Feature: Demowebshop Apparel & Shoes Page
    Scenario: User views apparel and shoes category
      Given I visit the apparel & shoes category
      Then I should see a list of apparel and shoes products

  # Digital Download Page
  Feature: Demowebshop Digital Download Page
    Scenario: User views the digital downloads category
      Given I visit the digital downloads category
      Then I should see a list of digital products

  # Jewelry Page
  Feature: Demowebshop Jewelry Page
    Scenario: User views the jewelry category
      Given I visit the jewelry category
      Then I should see a list of jewelry products

  # Gift Cards Page
  Feature: Demowebshop Gift Cards Page
    Scenario: User views the gift cards category
      Given I visit the gift cards category
      Then I should see a list of gift cards

  # Computers Page
  Feature: Demowebshop Computers Page
    Scenario: User views the computers category
      Given I visit the computers category
      Then I should see a list of computers

  # Electronics Page
  Feature: Demowebshop Electronics Page
    Scenario: User views the electronics category
      Given I visit the electronics category
      Then I should see a list of electronics products

  # User Profile Page
  Feature: Demowebshop User Profile Page
    Scenario: User views their profile information
      Given I am logged in
      When I visit the user profile page
      Then I should see my profile information

  # Footer Links
  Feature: Demowebshop Footer Links
    Scenario: User clicks on "About Us" link in the footer
      Given I visit the homepage
      When I click on the "About Us" link in the footer
      Then I should be redirected to the "About Us" page
