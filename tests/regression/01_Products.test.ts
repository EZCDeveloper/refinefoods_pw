import { test, expect } from '@playwright/test';

test.describe('TS01_Products', () => {
    
    test.beforeEach(async ({ page }) => {
        const baseUrl = process.env.BASE_URL as string
        await page.goto(baseUrl);
    })
    
    test("TC01. Navigate to the homepage", async ({page}) => {
        const baseUrl = process.env.BASE_URL as string
        await page.goto(baseUrl + 'products');
    })
    
})
