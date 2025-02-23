# CypressProject  

## 📌 Overview  
This project uses **Cypress** for automation testing with **BDD (Cucumber)** and generates reports using **Mochawesome**. It supports multiple projects like **Shwapno, MeenaBazar, and API Testing**.  

## 🛠 Installation  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/MaksuraM/CypressProjects.git
   cd CypressProjects
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

## 🚀 Running Tests  

### Run all projects  
```sh
$env:CYPRESS_PROJECT_NAME=$null; npx cypress run
```
For Mac/Linux:  
```sh
CYPRESS_PROJECT_NAME=null npx cypress run
```

### Run specific project (e.g., MeenaBazar)  
```sh
$env:CYPRESS_PROJECT_NAME=MeenaBazar; npx cypress run
```

### Run Cypress in GUI mode  
```sh
npx cypress open
```

## 🧪 BDD Cucumber Setup  
- Feature files (`.feature`) are inside each project folder (`BDD`, `BDDA`, `BDDM`).  
- Step definitions (`.js`) are inside `StepDefinitions` folder in each project.  
- Page objects are stored inside `PageObjects` in each project folder.  

## 📊 Generating Reports with Mochawesome  

1. **Run tests and generate report:**  
   ```sh
   npx cypress run --reporter mochawesome
   ```
2. **View the report:**  
   Open the `cypress/reports/mochawesome.html` file in your browser.

## 📂 Project Structure  
```
CypressProjects/
│── cypress/
│   ├── integration/
│   │   ├── examples/
│   │   │   ├── BDD/              # Project: Shwapno
│   │   │   │   ├── FeatureFiles/   # BDD feature files
│   │   │   │   ├── StepDefinitions/ # Step definitions
│   │   │   │   ├── PageObjects/     # Page Object files
│   │   │   ├── BDDA/             # Project: API Testing
│   │   │   │   ├── FeatureFiles/
│   │   │   │   ├── StepDefinitions/
│   │   │   │   
│   │   │   ├── BDDM/             # Project: MeenaBazar
│   │   │   │   ├── FeatureFiles/
│   │   │   │   ├── StepDefinitions/
│   │   │   │   ├── PageObjects/
│   ├── reports/                   # Mochawesome reports
│── package.json
│── cypress.config.js
│── README.md
```

## 📌 Dependencies  
Ensure these dependencies are installed in `package.json`:  
```json
"dependencies": {
  "@badeball/cypress-cucumber-preprocessor": "^15.0.0",
  "cypress-mochawesome-reporter": "^3.2.0",
  "mochawesome": "^7.1.3",
  "cypress": "^12.0.0"
}
```

## 📌 License  
This project is open-source and available under the [MIT License](LICENSE).
