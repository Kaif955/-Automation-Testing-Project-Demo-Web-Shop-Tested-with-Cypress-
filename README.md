# **Demo Web Shop Automation Testing Project - Tested with Cypress**

## 📌 **Project Overview**
---
This project focuses on the **automation testing** of the **Demo Web Shop** e-commerce platform using **Cypress**. The goal is to verify the core functionalities of the website, ensuring that critical features like **login**, **search**, **cart management**, **checkout**, and **UI responsiveness** work as expected across multiple devices. The tests are built with an emphasis on **reusability** and **scalability** to allow easy extension as the application evolves.

---

## 🛠️ **Tools and Technologies**
---
- **Automation Tool:** **Cypress** - A powerful, easy-to-use framework for automating end-to-end tests.
- **Programming Language:** **JavaScript** - Chosen for its seamless integration with Cypress.
- **Framework:** **Page Object Model (POM)** - For efficient and maintainable test scripts.
- **Version Control:** **Git** - For managing project code changes and collaboration.
- **CI/CD:** **GitHub Actions** - For continuous integration and automatic test execution on each commit.

---

## 📂 **Features Tested**
---
1. **User Authentication:**
   - Verified the **login** and **registration** functionality with valid credentials.
   - Tested **password recovery** to ensure proper functionality for account recovery.

2. **Search Functionality:**
   - Ensured that **search results** match expected results based on queries.
   - Validated search filters like category, price, and brand.

3. **Cart and Wishlist Management:**
   - Validated the ability to **add**, **remove**, and **update** products in both the **cart** and **wishlist**.
   - Verified that the **cart** retains items across user sessions.

4. **Checkout Process:**
   - Fully tested the **checkout workflow**, including applying coupon codes, entering shipping details, and processing payments.
   - Ensured that the **order confirmation page** is correctly displayed after completing the purchase.

5. **UI Testing and Responsiveness:**
   - Verified that the website adjusts and looks correctly on **desktop**, **tablet**, and **mobile** screens.
   - Ensured **UI elements** like buttons, forms, and navigation align properly across devices.

---

## 📄 **Artifacts Included**
---
This project includes various documentation and reports to ensure comprehensive coverage and traceability:

1. **Test Scripts:**
   - Modular **Cypress** test scripts following the **Page Object Model (POM)**, covering core features like login, search, cart management, and checkout.
   - Each test case is structured to ensure reusability and maintainability, making the tests scalable.

2. **RTM (Requirements Traceability Matrix):**
   - A detailed **RTM** report that links test cases to corresponding requirements, ensuring all functionalities are covered and traceable.
   - This artifact provides a clear mapping between user stories and test scenarios.

3. **Mindmap:**
   - A **mindmap** outlining the testing strategy, covering major areas of testing like functional, non-functional, UI, and API testing.

4. **Test Plan:**
   - A comprehensive **Test Plan** document detailing the scope, objectives, testing types, strategy, resource requirements, and timelines.
   - The plan outlines the testing approach for both manual and automated tests.

5. **BDD Scenarios:**
   - **Behavior Driven Development (BDD)** scenarios written in Gherkin format. These scenarios help define the application behavior from the user's perspective, ensuring clarity in testing requirements.

6. **Manual Test Cases for Non-Functional Testing:**
   - **Manual test cases** for **non-functional testing** covering performance, security, and usability tests.
   - These cases ensure the application can handle large user loads, is secure, and provides a good user experience.

7. **Bug Report:**
   - A detailed **bug report** listing all issues discovered during testing, including bug IDs, descriptions, severity, steps to reproduce, and status.

8. **Test Summary Report:**
   - A summary of test execution results, including the number of test cases passed, failed, skipped, and details on any major defects found.
   - The report includes high-level recommendations based on the testing outcomes.

9. **Presentation Report:**
   - A **presentation report** summarizing key findings, bug trends, test execution results, and suggestions for improvement. This report is aimed at stakeholders and developers to help them prioritize work.

---

## 🐞 **Key Bugs Identified**
| **Bug ID** | **Feature**             | **Description**                                   | **Severity** | **Status** |
|------------|-------------------------|-------------------------------------------------|--------------|------------|
| **BUG-001** | Wishlist Functionality  | Wishlist button missing for certain products.   | High         | Open       |
| **BUG-002** | Checkout Process        | Promo code field not visible on checkout page.  | Medium       | Open       |
| **BUG-003** | UI Responsiveness       | Layout issues on mobile devices.                | High         | Open       |

---

## ✨ **Highlights**
---
- **Page Object Model (POM)**: Used for organizing the test code in a way that makes it easier to maintain and scale over time.
- **Comprehensive Test Coverage:** Includes functional, non-functional, UI, and regression testing for all major workflows.
- **Cross-Device Testing:** Ensures that the application is responsive and functional across desktop, tablet, and mobile.
- **Bug Identification:** Key bugs were found and categorized, providing insights into areas for improvement.
- **Detailed Documentation:** The project includes essential documentation like the **Test Plan**, **Test Summary**, and **Bug Report** for transparency and traceability.

---

## 🌐 **Demo Web Shop URL**
[Demo Web Shop](https://demowebshop.tricentis.com/)

---

## 📝 **Conclusion**
---
This project successfully implemented **Cypress-based automation tests** for the **Demo Web Shop**. The tests cover key user functionalities and UI components, ensuring the website remains stable and user-friendly across various platforms. The use of **Page Object Model (POM)** made the test scripts modular, reducing code repetition and improving maintainability.

The identified bugs have been documented and shared with the development team to prioritize fixes. The comprehensive **RTM**, **Test Plan**, and other artifacts ensure that the testing process was thorough and transparent.

---

## 🚀 **Future Enhancements**
---
- Expanding test coverage to include additional non-functional tests (e.g., performance and security).
- Integrating test execution into a Continuous Integration (CI) pipeline for automatic testing with every code change.
- Adding more complex test cases to cover edge scenarios and multi-step workflows.

