# 🧪 QA Automation Cypress Framework

[![Cypress Tests](https://github.com/ivaneidepmn/qa-automation-cypress-framework/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/ivaneidepmn/qa-automation-cypress-framework/actions/workflows/cypress-tests.yml)

<p align="center">
  <img src="./assets/cypress-qa-framework-banner.png" alt="QA Automation Cypress Framework Banner" width="900">
</p>

<p align="center">
  End-to-End QA Automation Framework designed with modern testing architecture.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Cypress-Test%20Automation-green" alt="Cypress">
  <img src="https://img.shields.io/badge/BDD-Cucumber-blue" alt="BDD">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-20.x-green" alt="Node.js">
  <img src="https://img.shields.io/badge/CI/CD-GitHub%20Actions-orange" alt="CI/CD">
  <img src="https://img.shields.io/badge/Status-Active-success" alt="Status">
</p>

<p align="center">
  <strong>Professional and scalable QA Automation Framework</strong> built with <strong>Cypress</strong>, using <strong>BDD (Cucumber)</strong> and <strong>Page Object Model (POM)</strong>.
</p>

<p align="center">
  Created by <strong>Ivaneide Monteiro</strong>
</p>

---

# 🎯 Project Objective

This project demonstrates how to build a **production-ready QA automation framework** following industry best practices.

### Main goals

- Scalability  
- Maintainability  
- CI/CD integration  

### The framework includes

✅ End-to-End (E2E) automation  
✅ BDD test scenarios using Cucumber  
✅ Page Object Model architecture  
✅ Test tagging strategy (Smoke / Regression)  
✅ CI/CD pipeline with GitHub Actions  

---

# 🧪 Automated Test Scenarios

## 🔐 Login Module

| Scenario | Description |
|----------|-------------|
| Login success | Valid user logs into the system |
| Invalid password | Error message validation |
| Locked user | System blocks login |

## 🛒 Cart Module

| Scenario | Description |
|----------|-------------|
| Add product to cart | User adds item to shopping cart |

---

# 🧾 Example BDD Scenario

Example of an automated test scenario written using **Cucumber syntax**.

```gherkin
Feature: Login

@smoke
Scenario: Login success
  Given que eu acesso a página de login
  When eu faço login com usuário "standard_user" e senha "secret_sauce"
  Then devo ver a página de produtos
````

---

# 🎥 Test Execution Example

Below is an example of Cypress automated tests running.

<p align="center">
  <img src="assets/test-run.gif" width="800"/>
</p>

The tests are executed automatically through CI pipelines and locally by developers and QA engineers.

---

# 🛠 Tech Stack

* Cypress
* Cucumber (BDD)
* JavaScript (ES6)
* Node.js
* Page Object Model (POM)
* Git
* GitHub
* GitHub Actions (CI/CD)
* Chrome Headless
* Mochawesome Reporting

---

# 🔎 Demo Application

This automation project validates the demo e-commerce application:

[https://www.saucedemo.com](https://www.saucedemo.com)

The application is widely used in automation practice and contains realistic user flows such as:

* authentication
* product listing
* shopping cart operations
* error handling scenarios

This makes it ideal for demonstrating real-world QA automation strategies.

---

# 🏗 Automation Architecture

The framework follows a layered architecture designed to maximize scalability and maintainability.

```text
Test Scenarios (BDD Feature Files)
            │
            ▼
Step Definitions
            │
            ▼
Page Object Model (POM)
            │
            ▼
Reusable Cypress Commands
            │
            ▼
Application Under Test (AUT)
```

Architecture principles used in this framework:

* Separation of concerns
* Reusable automation components
* Scalable test design
* Clear communication between QA and stakeholders

---

# 🔺 Test Pyramid Strategy

The automation approach follows the Test Pyramid concept.

```text
          UI Tests (Cypress E2E)
                ▲
                │
        Integration Tests
                ▲
                │
           Unit Tests
```

Current focus of this repository:

**UI End-to-End Tests**

These tests validate full user journeys such as login and shopping cart operations.

### Future improvements include

* API testing layer
* Integration test coverage
* Contract testing

---

# 🧪 Test Automation Scope

This framework automates real user workflows including:

* Authentication flows
* Error validation scenarios
* Shopping cart interactions
* UI behavior validation
* Business critical flows

The automation focuses on **end-to-end validation using Cypress**.

---

# 📈 Test Strategy

This project uses a **layered test execution strategy**.

The goal is to provide **fast feedback for critical flows while maintaining broader regression coverage**.

### Strategy components

* Smoke tests → critical flows
* Regression tests → extended validation
* CI execution → automated test runs
* Tag-based execution → flexible pipeline execution

This approach helps teams **scale automation while keeping execution time optimized**.

---

# 🧠 QA Engineering Decisions

This framework was designed using **real-world QA engineering practices**.

## BDD with Cucumber

BDD was adopted to make test scenarios easier to understand for both technical and non-technical stakeholders.

Feature files describe system behavior while step definitions implement the automation logic.

---

## Page Object Model (POM)

The POM pattern separates:

* UI selectors
* Page actions
* Test assertions

This improves maintainability and reduces test duplication.

---

## Tag-Based Test Execution

Tests are organized using tags:

* `@smoke` → Critical flows
* `@regression` → Extended scenarios

This allows CI pipelines to run **faster smoke tests while keeping full regression coverage available**.

---

## CI/CD Automation

GitHub Actions automatically runs tests on every change.

Benefits:

* continuous feedback
* early defect detection
* automated reporting

---

## Automated Test Reporting

Test reports are generated using **Mochawesome**, producing HTML and JSON files.

---

# 📊 QA Engineering Skills Demonstrated

This project demonstrates important QA engineering capabilities:

### Test Automation Engineering

Design and implementation of an automation framework using Cypress.

### Test Strategy Definition

Implementation of smoke and regression test layers.

### Automation Architecture

Use of **Page Object Model** to create reusable automation components.

### Behavior Driven Development

BDD adoption using **Cucumber syntax**.

### CI/CD Integration

Automated test execution using **GitHub Actions**.

### Test Reporting

Automated reporting with **Mochawesome**.

### Real User Flow Validation

Automated validation of real application flows such as:

* login
* error handling
* cart interactions

---

# 📊 Quality Metrics Strategy

This framework helps teams monitor and improve software quality through measurable indicators.

### Examples of metrics supported by this automation approach

**Test Coverage**
Automation covers critical business flows such as authentication and cart operations.

**Automation Stability**
Tests are executed consistently through CI pipelines.

**Execution Time**
Smoke tests provide fast feedback for critical system behavior.

**Defect Detection**
Automated tests detect regressions early in the development lifecycle.

**Continuous Quality Monitoring**
CI integration ensures continuous validation of system behavior.

---

# 🚀 Release Confidence Strategy

Automation plays a critical role in increasing release confidence.

Before a release:

* Smoke tests validate critical flows
* Regression tests validate extended system behavior
* CI pipelines ensure tests run automatically for every change

This approach helps teams release software faster while maintaining high quality standards.

---

# 💼 Business Impact of Test Automation

This framework demonstrates how QA automation can deliver measurable value to software teams.

### Faster Feedback

CI pipelines provide immediate feedback when code changes introduce defects.

### Reduced Production Bugs

Critical flows are protected by automated smoke tests.

### Improved Release Confidence

Regression tests validate system behavior before releases.

### Scalable Automation

POM architecture allows easy expansion of test coverage.

### Standardized QA Process

Combining **BDD + CI/CD + tagging** creates a structured quality process.

### Transparent Test Results

Mochawesome reports provide clear test execution results.

---

# 🔄 CI/CD Pipeline with GitHub Actions

This project uses **GitHub Actions** to run tests automatically.

### Pipeline features

* Push to `main` → smoke tests
* Pull Requests → regression tests
* Headless Chrome execution
* Mochawesome report artifacts
* CI status badge

---

# 📁 Project Structure

<details>
<summary><b>Click to expand</b></summary>

```text
qa-automation-cypress-framework/

├─ assets/
│  ├─ cypress-qa-framework-banner.png
│  └─ test-run.gif
│
├─ cypress/
│  ├─ e2e/
│  │  ├─ login/
│  │  │  ├─ login.feature
│  │  │  └─ login-locked.feature
│  │  │
│  │  └─ cart/
│  │     └─ cart.feature
│
│  ├─ fixtures/
│  │  └─ example.json
│
│  └─ support/
│     ├─ pages/
│     │  ├─ LoginPage.js
│     │  └─ InventoryPage.js
│
│     ├─ step_definitions/
│     │  ├─ login.steps.js
│     │  └─ cart.steps.js
│
│     ├─ commands.js
│     └─ e2e.js
│
├─ .github/
│  └─ workflows/
│     └─ cypress-tests.yml
│
├─ .gitignore
├─ cypress.config.js
├─ package.json
└─ README.md
```

</details>

---

# ▶️ Running Tests Locally

### Install dependencies

```bash
npm install
```

### Open Cypress UI

```bash
npx cypress open
```

### Run all tests

```bash
npx cypress run --browser chrome
```

### Run a specific test

```bash
npx cypress run --spec "cypress/e2e/login/login.feature"
```

or

```bash
npx cypress run --spec "cypress/e2e/cart/cart.feature"
```

---

# 🚀 Future Improvements

Planned improvements:

* Parallel test execution
* API test automation
* Multi-environment configuration
* Visual regression testing

---

# 👩‍💻 Author

**Ivaneide Monteiro**

QA Automation Engineer focused on:

* Test Automation
* Quality Engineering
* CI/CD Pipelines

GitHub
[https://github.com/ivaneidepmn](https://github.com/ivaneidepmn)

---

⭐ If you like this project, give it a star on GitHub.