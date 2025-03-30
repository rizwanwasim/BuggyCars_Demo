import { test, expect, Page, Locator } from '@playwright/test'


export class HomePage {
    readonly page:Page
    readonly logoutButton: Locator;
    readonly profileButton: Locator;
    readonly mainHeading: Locator;

    constructor(page:Page){
        this.page = page;
        this.mainHeading = page.getByRole('link', { name: 'Buggy Rating' });
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
        this.profileButton = page.getByRole('link', { name: 'Profile' });
    }
}
