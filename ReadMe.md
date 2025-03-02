# CypressProject  

## 📌 Overview  
This project uses **Cypress** for automation testing with **BDD (Cucumber)** and generates reports using **Mochawesome**. It supports multiple projects like **Shwapno, MeenaBazar, and API Testing**.

## 🛠 Prerequisites  
Ensure the following software and dependencies are installed before proceeding:
- **VS Code** (1.95 or higher)
- **Git** (latest version recommended)
- **Node.js** (LTS version recommended)
- **Cypress** (latest version)
- **Mochawesome Reporter**

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
npx cypress run
```

### Run specific project (e.g., MeenaBazar)  
```sh
npx cypress run --env PROJECT_NAME=MeenaBazar
```

### Run Cypress in GUI mode  
```sh
npx cypress open
```

## 🧪 Framework Architecture  
- **Feature files (`.feature`)** are inside each project folder (`Shwapno`, `MeenaBazar`, `API Testing`).  
- **Step definitions (`.js`)** are inside `StepDefinitions` folder in each project.  
- **Page objects** are stored inside `PageObjects` in each project folder.  
- **Environment variables** should be configured in a `.env` file instead of passing directly in CLI.

## 📊 Generating Reports with Mochawesome  

1. **Run tests and generate report:**  
   ```sh
   npx cypress run --reporter mochawesome
   ```
2. **View the report:**  
   ```sh
   npx mochawesome-merge --reportDir cypress/reports > mochawesome.json
   npx marge mochawesome.json
   ```
   The generated report will be available in `cypress/reports/mochawesome.html`.

## 🛠 Dependencies  
Ensure these dependencies are installed in `package.json`:  
```json
"dependencies": {
  "@badeball/cypress-cucumber-preprocessor": "^15.0.0",
  "cypress-mochawesome-reporter": "^3.2.0",
  "mochawesome": "^7.1.3",
  "cypress": "^12.0.0"
}
```

## 📚 License  
This project is open-source and available under the [MIT License](LICENSE).

