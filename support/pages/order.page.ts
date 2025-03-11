import { Page } from "playwright-core";
import { expect } from '@playwright/test';
import fs from 'fs';

export class OrderPage {
    constructor(private page: Page) { }

    getExportButton() {
        return this.page.getByRole('button', { name: 'Export' });
    }

    async exportCSV(): Promise<string> {
        const [download] = await Promise.all([
            this.page.waitForEvent("download"),
            this.getExportButton().click()
        ]);

        const filePath = await download.path();
        expect(filePath).not.toBeNull();

        const fileName = download.suggestedFilename();
        expect(fileName).toMatch(/^Orders-\d{1,2}_\d{1,2}_\d{4},_\d{1,2}_\d{1,2}_\d{1,2}_(AM|PM)\.csv$/);

        return filePath;
    }

    verifyCsvContent(filePath: string, expectedHeaders: string[]): void {
        const csvContent = fs.readFileSync(filePath, 'utf-8');
        const csvRows = csvContent.trim().split('\n');

        // Check headers
        const headers = csvRows[0].split(',').map(header =>
            header.trim().replace(/^"|"$/g, '').toLowerCase()
        );
        expect(headers).toEqual(expectedHeaders.map(h => h.toLowerCase()));;

        // Check at least one order exists (more than just the header row)
        expect(csvRows.length).toBeGreaterThan(1);

        // Optional: Basic data validation
        const dataRow = csvRows[1].split(',').map(cell => cell.trim().replace(/^"|"$/g, ''));
        expect(dataRow.length).toBe(expectedHeaders.length);
    }
}