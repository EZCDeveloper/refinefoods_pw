
import { TEST_COPY } from '../../fixtures/data/test-copy';
import { TEST_DATA } from '../../fixtures/data/test-data';
import { URL } from '../../fixtures/data/url-data';
import { test } from '../../fixtures/myFixtures/allFixtures';
import { expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';


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
            orderPage.verifyCsvContent(filePath);
        })
})