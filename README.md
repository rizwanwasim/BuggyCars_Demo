# **BuggyCars_Demo**  
Automated tests for **Buggy Cars Demo** using **Playwright**  

## **Prerequisites**  
Before running the tests, ensure you have the following installed:  
- **Node.js (LTS version recommended)** → [Download Node.js](https://nodejs.org/)  
- **npm (Node Package Manager)** (comes with Node.js)  

## **Setup Instructions**  

### **1. Clone the Repository**  
```sh
git clone <repository-url>
cd BuggyCars_Demo
```

### **2. Install Playwright**  
```sh
npm init playwright@latest
```

### **3. Install Browser Dependencies**  
```sh
npx playwright install --with-deps chromium
```

### **4. Configure Environment Variables**  
Create a **`.env`** file in the root directory and add your credentials:  
```sh
correctEmail=your-email@example.com
correctPass=your-secure-password
incorrectPass=wrong-password
```

### **5. Install dotenv Package**  
```sh
npm install dotenv
```

### **6. Run Tests**  
```sh
npx playwright test
```

### **7. Run Tests with Workers**  
```sh
npx playwright test --workers 4
```

### **8. View Test Report**  
```sh
npx playwright show-report
```

## **Additional Notes**  
- **Modify `.env` file** with valid credentials before running the tests.  
- **Tests are configured to run in Chromium** (you can modify `playwright.config.ts` to use other browsers).  
- **To run a specific test**, use:  
  ```sh
  npx playwright test tests/<test-file-name>.test.ts
  ```  
- **For debugging**, run tests in UI mode:  
  ```sh
  npx playwright test --ui
  ```  

## Test Execution Screenshot

Below is an screenshot as reference that was captured after test execution:

![Test Screenshot](screenshot.png)

## GitHub Actions Test Results

You can also verify that the tests have passed in **GitHub Actions** by checking the workflow runs.  
To do this:
1. Navigate to the **Actions** tab in your GitHub repository.
2. Select the latest workflow run.
3. Check the logs and reports to confirm test execution status.

![Test Screenshot](gitactions.png)

This ensures your tests are running smoothly in both local and CI/CD environments!
