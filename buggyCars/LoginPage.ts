import { test, expect, Page, Locator } from '@playwright/test'


export class LoginPage {
    readonly page: Page
    readonly welcome: Locator;
    // readonly emailLabel: Locator;
    // readonly passwordLabel: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginin : Locator;
    readonly mainHeading : Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly loginErrorMessage: Locator;

    // const emailis = "riz@getMaxListeners.xom";
    constructor(page: Page) {
        this.page = page;
        this.mainHeading = page.getByRole('link', { name: 'Buggy Rating' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.email = page.getByRole('textbox', { name: 'Login' });
        this.password = page.locator('input[name="password"]');
        this.loginin = page.getByRole('button', { name: 'Login' });
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
        this.loginErrorMessage = page.getByText('Invalid username/password');
    }
    // Method to set the email input field
    // Method to set the email input field
    async setEmail(emailValue: string) {
        if (emailValue) {
            await this.email.fill(emailValue);
        }
    }

    // Method to set the password input field
    async setPassword(passwordValue: string) {
        if (passwordValue) {
            await this.password.fill(passwordValue);
        }
    }
}
