# 🧪 QA Automation Cypress Framework

![Cypress Tests](https://github.com/ivaneidepmn/qa-automation-cypress-framework/actions/workflows/cypress-tests.yml/badge.svg)

<p align="center">
  <img src="assets/cypress-qa-framework-banner.png" alt="QA Automation Cypress Framework" width="900"/>
</p>

<p align="center">

![Cypress](https://img.shields.io/badge/Cypress-Test%20Automation-green)
![BDD](https://img.shields.io/badge/BDD-Cucumber-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node](https://img.shields.io/badge/Node.js-20.x-green)
![CI/CD](https://img.shields.io/badge/CI/CD-GitHub%20Actions-orange)
![Status](https://img.shields.io/badge/Status-Active-success)

</p>

<p align="center">
Professional and scalable <b>QA Automation Framework</b> built with <b>Cypress</b>, using <b>BDD (Cucumber)</b> and <b>Page Object Model (POM)</b>.
</p>

<p align="center">
Created by <b>Ivaneide Monteiro</b>
</p>

---

# 🎯 Project Objective

This project demonstrates how to build a **production-ready QA automation framework** following industry best practices.

- scalability
- maintainability
- CI/CD integration

It includes:

✅ End-to-End (E2E) automation  
✅ BDD test scenarios using Cucumber  
✅ Page Object Model architecture  
✅ Test tagging strategy (Smoke / Regression)  
✅ CI/CD pipeline with GitHub Actions  

---

# 🧪 Automated Test Scenarios

## 🔐 Login Module

| Scenario | Description |
|--------|-------------|
| Login success | Valid user logs into the system |
| Invalid password | Error message validation |
| Locked user | System blocks login |

## 🛒 Cart Module

| Scenario | Description |
|--------|-------------|
| Add product to cart | User adds item to shopping cart |

---

## 🧾 Example BDD Scenario

Example of a real automated scenario written using **Cucumber BDD syntax**.

```gherkin
Feature: Login

@smoke
Scenario: Login success
  Given que eu acesso a página de login
  When eu faço login com usuário "standard_user" e senha "secret_sauce"
  Then devo ver a página de produtos
  ```

---

# 🧩 Page Object Example

This framework uses the **Page Object Model (POM)** pattern to keep tests clean and maintainable.

Example of a simplified Page Object:

````markdown
```javascript
class LoginPage {

  selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]'
  }

  login(user, password){
    cy.get(this.selectors.username).type(user)
    cy.get(this.selectors.password).type(password)
    cy.get(this.selectors.loginButton).click()
  }

}

export default new LoginPage()

```
---

# 🛠 Tech Stack

- Cypress
- Cucumber (BDD)
- JavaScript (ES6)
- Node.js
- Page Object Model (POM)
- Git
- GitHub
- GitHub Actions (CI/CD)
- Chrome Headless
- Mochawesome Reporting

```
---

## 📈 Test Strategy

This project uses a test strategy based on layered test execution.

The objective is to ensure fast feedback for critical flows while maintaining broader regression coverage.

The strategy includes:

- **Smoke tests** for critical application flows
- **Regression tests** for broader validation scenarios
- **CI execution** with automated reporting
- **Tag-based execution** for flexible pipeline runs

This approach allows teams to scale automation while keeping execution time optimized.

---

## 🧠 QA Engineering Decisions

This framework was designed following real-world QA engineering practices.

Several architectural decisions were made to ensure scalability, maintainability and reliable test execution.

### BDD with Cucumber

Behavior Driven Development (BDD) was adopted to make test scenarios easier to read and understand for both technical and non-technical stakeholders.

Feature files describe system behavior while step definitions implement the automation logic.

### Page Object Model (POM)

The Page Object Model pattern was implemented to separate:

- UI selectors
- Page actions
- Test assertions

This improves maintainability and reduces test duplication.

### Tag-Based Test Execution

Tests are organized using tags to allow selective execution:

- **@smoke** → Critical flows
- **@regression** → Extended validation scenarios

This allows CI pipelines to run fast smoke tests while still enabling full regression coverage.

### CI/CD Automation

GitHub Actions was integrated to run automated tests on every code change.

The pipeline provides:

- Continuous feedback
- Early defect detection
- Automated reporting

### Automated Test Reporting

Test results are generated using **Mochawesome**, producing HTML and JSON reports that can be used for analysis and documentation.

---

## 📊 Skills Demonstrated

This project demonstrates several important QA engineering skills and practices used in modern software development environments.

### Test Automation Engineering

Design and implementation of an end-to-end automation framework using Cypress with a scalable architecture.

### Test Strategy Definition

Implementation of a test execution strategy separating:

- Smoke tests for critical flows
- Regression tests for broader validation
- Tag-based execution for CI pipelines

### Automation Architecture

Use of **Page Object Model (POM)** to create reusable and maintainable automation components.

### Behavior Driven Development (BDD)

Adoption of Cucumber syntax to improve collaboration between QA, developers and product teams.

### CI/CD Integration

Automated test execution through **GitHub Actions**, enabling continuous validation of application quality.

### Test Reporting

Integration with **Mochawesome Reporting** to generate structured reports for test execution results.

### Real User Flow Validation

Automation scenarios simulate real user journeys including:

- Login flows
- Error handling
- Shopping cart interactions

---

## 💼 Business Value of This Project

Beyond demonstrating automation techniques, this project highlights how a well-designed QA automation framework can bring measurable value to software teams.

### Faster Feedback for Development Teams

Automated tests executed in CI pipelines provide immediate feedback when a change introduces a defect.

### Reduced Production Bugs

Critical flows are protected by **Smoke Tests**, ensuring that core functionality remains stable after deployments.

### Improved Release Confidence

Regression tests help validate broader system behavior before releases, reducing risk during production deployments.

### Scalable Test Architecture

The use of **Page Object Model (POM)** and modular test structure allows easy expansion of test coverage as the application grows.

### Standardized Quality Process

By combining **BDD scenarios, tagging strategies and CI/CD pipelines**, the project demonstrates how teams can implement a structured QA process.

### Transparent Test Results

Automated reporting with **Mochawesome** allows teams to quickly understand test outcomes and identify failures.

---

## 🔄 CI/CD Pipeline

This project uses GitHub Actions to run tests automatically.

## Pipeline features:

Push to main → runs smoke tests

Pull Request → runs regression tests

Uploads Mochawesome report as artifact

Headless browser execution

CI test status badge

## 📁 Project Structure
<details> <summary><b>Click to expand</b></summary>


```bash
qa-automation-cypress-framework/

├─ assets/
│  ├─ cypress-qa-framework-banner.png
│  └─ test-run.gif

├─ cypress/
│  ├─ e2e/
│  │  ├─ login/
│  │  │  ├─ login.feature
│  │  │  └─ login-locked.feature
│  │  └─ cart/
│  │     └─ cart.feature
│  ├─ fixtures/
│  │  └─ example.json
│  └─ support/
│     ├─ pages/
│     │  ├─ LoginPage.js
│     │  └─ InventoryPage.js
│     ├─ step_definitions/
│     │  ├─ login.steps.js
│     │  └─ cart.steps.js
│     ├─ commands.js
│     └─ e2e.js

├─ .github/
│  └─ workflows/
│     └─ cypress-tests.yml

├─ .gitignore
├─ cypress.config.js
├─ package.json
└─ README.md

</details>

```markdown
## ▶️ Running Tests Locally

Install dependencies

```bash
npm install
Open Cypress UI
npx cypress open
Run all tests
npx cypress run --browser chrome
Run a specific test
npx cypress run --spec "cypress/e2e/login/login.feature"

or

npx cypress run --spec "cypress/e2e/cart/cart.feature"
🎥 Test Execution Example

## 🚀 Future improvements planned:

- Parallel test execution
- API testing integration
- Multi-environment configuration
- Visual regression testing

---

## 👩‍💻 Author

Ivaneide Monteiro

QA Automation Engineer focused on:

Test Automation

Quality Engineering

CI/CD Pipelines

---

## ⚙️ Continuous Integration Workflow

This project integrates **GitHub Actions** to automatically execute tests.

### CI Pipeline Flow

1️⃣ Developer pushes code to repository  
2️⃣ GitHub Actions triggers the pipeline  
3️⃣ Cypress tests run in headless Chrome  
4️⃣ Mochawesome report is generated  
5️⃣ Results are stored as pipeline artifacts  

### Example pipeline trigger

- Push to `main` → Smoke tests
- Pull Requests → Regression tests

This ensures that every change is validated automatically before being merged.

---

### GitHub

https://github.com/ivaneidepmn

⭐ If you like this project

Give it a ⭐ on GitHub to support the work!