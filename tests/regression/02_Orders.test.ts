import { TEST_DATA } from '../../fixtures/data/test-data';
import { URL } from '../../fixtures/data/url-data';
import { test } from '../../fixtures/myFixtures/allFixtures';
import { expect } from '@playwright/test';


test.describe('TS01_Orders', () => {

    test.beforeEach(async ({ basePage }) => {
        await basePage.navigateTo(URL.ORDERS);
    })

    test("TC-001. Verify the Existence and Visibility of the Export Button",
        async ({ orderPage }) => {
            const exportButton = orderPage.getExportButton();
            await expect(exportButton).toBeVisible();
            await expect(exportButton).toBeEnabled();
        })

    test("TC-002: Verify That Exporting Generates a CSV File Correctly",
        async ({ orderPage }) => {
            await orderPage.exportCSV();
        })

    test('TC-003: Verify That the CSV Content Is Correct',
        async ({ orderPage }) => {
            const filePath = await orderPage.exportCSV();
            orderPage.verifyCsvContent(filePath, TEST_DATA.csv.orderHeaders);
        })

    test('TC-004: Verify That the Button Is Disabled If There Is an Export Error',
        async ({ page }) => {

            // TIP: Improvement. 
            //Indicates the Test must fail
            test.fail();

            await page.evaluate(() => {
                // Simulate API error
                window.fetch = () => Promise.reject(new Error('Internal Server Error'));
            });

            const exportButton = page.getByRole('button', { name: 'Export' });
            await expect(exportButton).toBeDisabled();
        })
})