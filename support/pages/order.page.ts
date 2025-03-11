import { Page, Download } from "playwright-core";
import { expect } from '@playwright/test';

export class OrderPage {
    constructor(private page: Page) { }

    getExportButton() {
        return this.page.getByRole('button', { name: 'Export' });
    }

    async exportCSV(): Promise<void> {
        const [download] = await Promise.all([
            this.page.waitForEvent("download"),
            this.getExportButton().click()
        ]);

        const filePath = await download.path();
        expect(filePath).not.toBeNull();

        const fileName = download.suggestedFilename();
        expect(fileName).toMatch(/^Orders-\d{1,2}_\d{1,2}_\d{4},_\d{1,2}_\d{1,2}_\d{1,2}_(AM|PM)\.csv$/);
    }
}