import { Page, expect } from '@playwright/test';

export class BasePage {
    constructor(private page: Page) {}

    async navigateTo(url: string): Promise<void> {
        const baseUrl = process.env.BASE_URL as string
        await this.page.goto(baseUrl + url);
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
     }
}