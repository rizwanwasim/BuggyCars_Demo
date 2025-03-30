import { test, expect} from '@playwright/test';
import * as dotenv from 'dotenv';
import { LoginPage } from '../buggyCars/LoginPage';
import { HomePage } from '../buggyCars/HomePage';

// Load environment variables from .env file
dotenv.config();

test('Buggy Cars Login Successfully', async ({ page }) => {
    // Initialize the Login and Home Page objects
    const loginPage = new LoginPage(page);
    const mainPage = new HomePage(page);

    // Navigate to the Buggy Cars login page
    await page.goto('/');

    // Verify that the login page is loaded correctly
    await expect(loginPage.mainHeading).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    // Enter valid credentials from environment variables
    await loginPage.setEmail(process.env.correctEmial!);
    await loginPage.setPassword(process.env.correctPass!);

    // Click the login button to submit the form
    await loginPage.loginButton.click();

    // Verify that the user is successfully logged in by checking if the logout button is visible
    await expect(mainPage.logoutButton).toBeVisible();
});

test('Buggy Cars Login Failed', async ({ page }) => {
    // Initialize the Login Page object
    const loginPage = new LoginPage(page);

    // Navigate to the Buggy Cars login page
    await page.goto('/');

    // Verify that the login page is loaded correctly
    await expect(loginPage.mainHeading).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    // Enter a valid email but an incorrect password
    await loginPage.setEmail(process.env.correctEmial!);
    await loginPage.setPassword(process.env.incorrectPass!);

    // Click the login button to submit the form
    await loginPage.loginButton.click();

    // Verify that an error message is displayed indicating failed login
    await expect(loginPage.loginErrorMessage).toBeVisible();
});
