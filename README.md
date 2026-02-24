# 🧪 QA Automation Cypress Framework

Professional and scalable **QA Automation Framework** built with **Cypress**, applying **Page Object Model (POM)**, **BDD (Cucumber style)** and fully integrated with **GitLab CI/CD**.

---

## 🎯 Project Objective

This project demonstrates how to build a production-ready automation framework following industry best practices.

It includes:

- ✅ End-to-End (E2E) test automation  
- ✅ Page Object Model (POM) design pattern  
- ✅ Behavior Driven Development (BDD) structure  
- ✅ Continuous Integration with GitLab CI  
- ✅ Headless execution for CI environments  
- ✅ Screenshot and video artifacts generation  
- ✅ CI pipeline optimization with Cypress binary caching  

---

## 🏗 Architecture & Design Principles

The framework was designed to ensure:

- 🔹 Scalability  
- 🔹 Maintainability  
- 🔹 Clear separation of concerns  
- 🔹 Reusability of page objects  
- 🔹 Clean and readable test scenarios  

It follows a layered structure separating:

- Test specifications  
- Page objects  
- Step definitions  
- Configuration  
- CI pipeline  

---

## 🛠 Tech Stack

- Cypress
- JavaScript (ES6)
- Node.js
- GitLab CI/CD
- Chrome Headless
- Cucumber (BDD style)

---

## 📂 Project Structure

```bash
qa-automation-cypress-framework/
│
├── cypress/
│   ├── e2e/                # Test specifications
│   ├── pages/              # Page Object classes
│   ├── step_definitions/   # BDD step implementations
│   ├── fixtures/           # Test data
│   └── support/            # Custom commands & hooks
│
├── .gitlab-ci.yml          # CI pipeline configuration
├── cypress.config.js       # Cypress configuration
├── package.json
└── README.md
```

---

## 🔄 CI/CD Pipeline

This project is fully integrated with **GitLab CI/CD**.

The pipeline runs automatically on every push to the `main` branch.

### Pipeline Stages:

- Install dependencies  
- Cache Cypress binary  
- Run tests in headless mode  
- Generate artifacts (screenshots & videos)  

Current status:

✔️ Pipeline passing  
✔️ Automated execution on every commit  

---

## ▶️ How to Run Locally

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Open Cypress UI

```bash
npx cypress open
```

### 3️⃣ Run tests headless

```bash
npx cypress run
```

---

## 📊 Test Strategy

This framework follows:

- E2E validation for critical user flows  
- Reusable Page Object components  
- BDD scenarios for readability  
- CI integration for early defect detection  

The goal is to simulate a real-world QA automation environment.

---

## 🚀 Future Improvements

- Multi-environment configuration (.env support)  
- Parallel test execution  
- Test reporting dashboard integration  
- Performance testing integration  
- API testing module integration  

---

## 👩‍💻 Author

Ivaneide Monteiro  
QA Automation Engineer  
Focused on quality culture, CI/CD and scalable automation solutions.