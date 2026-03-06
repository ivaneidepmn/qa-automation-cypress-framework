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

Main goals:

- scalability  
- maintainability  
- CI/CD integration  

The framework includes:

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

# 🧾 Example BDD Scenario

Example of an automated test scenario written using **Cucumber syntax**.

```gherkin
Feature: Login

@smoke
Scenario: Login success
  Given que eu acesso a página de login
  When eu faço login com usuário "standard_user" e senha "secret_sauce"
  Then devo ver a página de produtos
```
  ---

# 🛠 Tech Stack

Cypress

Cucumber (BDD)

JavaScript (ES6)

Node.js

Page Object Model (POM)

Git

GitHub

GitHub Actions (CI/CD)

Chrome Headless

Mochawesome Reporting

# 📈 Test Strategy

This project uses a layered test execution strategy.

The goal is to provide fast feedback for critical flows while maintaining broader regression coverage.

Strategy components:

Smoke tests → critical flows

Regression tests → extended validation

CI execution → automated test runs

Tag-based execution → flexible pipeline execution

This approach helps teams scale automation while keeping execution time optimized.

# 🧠 QA Engineering Decisions

This framework was designed using real-world QA engineering practices.

BDD with Cucumber

BDD was adopted to make test scenarios easier to understand for both technical and non-technical stakeholders.

Feature files describe system behavior while step definitions implement the automation logic.

Page Object Model (POM)

The POM pattern separates:

UI selectors

Page actions

Test assertions

This improves maintainability and reduces test duplication.

Tag-Based Test Execution

Tests are organized using tags:

@smoke → Critical flows

@regression → Extended scenarios

This allows CI pipelines to run faster smoke tests while keeping full regression coverage available.

CI/CD Automation

GitHub Actions automatically runs tests on every change.

Benefits:

continuous feedback

early defect detection

automated reporting

Automated Test Reporting

Test reports are generated using Mochawesome, producing HTML and JSON files.

# 📊 Skills Demonstrated

This project demonstrates important QA engineering capabilities:

Test Automation Engineering

Design and implementation of an automation framework using Cypress.

Test Strategy Definition

Implementation of smoke and regression test layers.

Automation Architecture

Use of Page Object Model to create reusable automation components.

Behavior Driven Development

BDD adoption using Cucumber syntax.

CI/CD Integration

Automated test execution using GitHub Actions.

Test Reporting

Automated reporting with Mochawesome.

Real User Flow Validation

Automated validation of real application flows such as:

login

error handling

cart interactions

# 💼 Business Value of This Project

This framework demonstrates how QA automation can deliver measurable value to software teams.

Faster Feedback

CI pipelines provide immediate feedback when code changes introduce defects.

Reduced Production Bugs

Critical flows are protected by automated smoke tests.

Improved Release Confidence

Regression tests validate system behavior before releases.

Scalable Automation

POM architecture allows easy expansion of test coverage.

Standardized QA Process

Combining BDD + CI/CD + tagging creates a structured quality process.

Transparent Test Results

Mochawesome reports provide clear test execution results.

# 🔄 CI/CD Pipeline

This project uses GitHub Actions to run tests automatically.

Pipeline features:

Push to main → smoke tests

Pull Requests → regression tests

Headless Chrome execution

Mochawesome report artifacts

CI status badge

# 📁 Project Structure
<details> <summary><b>Click to expand</b></summary>
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

├─ .github/
│  └─ workflows/
│     └─ cypress-tests.yml

├─ .gitignore
├─ cypress.config.js
├─ package.json
└─ README.md
</details>

# ▶️ Running Tests Locally

Install dependencies

npm install

Open Cypress UI

npx cypress open

Run all tests

npx cypress run --browser chrome

Run a specific test

npx cypress run --spec "cypress/e2e/login/login.feature"

or

npx cypress run --spec "cypress/e2e/cart/cart.feature"

# 🚀 Future Improvements

Planned improvements:

Parallel test execution

API test automation

Multi-environment configuration

Visual regression testing

# ##👩‍💻 Author

Ivaneide Monteiro

QA Automation Engineer focused on:

Test Automation

Quality Engineering

CI/CD Pipelines

GitHub
https://github.com/ivaneidepmn

⭐ If you like this project, give it a star on GitHub.