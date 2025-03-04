import { test, expect } from '@playwright/test';
import { BasePage } from '../../support/pages/base.page';
import { ProductPage } from '../../support/pages/product.page';

test.describe('TS01_Products', () => {
    
    test.beforeEach(async ({ page }) => {
        const basePage = new BasePage(page);
        await basePage.navigateTo('products');
        await basePage.waitForPageLoad();
    })


    test("TC01. Create a Product Successfully", async ({page}) => {
        const productPage = new ProductPage(page);
        await productPage.createProduct(
            'fixtures/images/wp1813257.jpg', 
            'The Big piza', 
            'Delicious Pizza with peperoni', 
            '15'
        );
        const message = await productPage.getMessage();
        await expect(message).toContainText('Successfully created Products');
    })
    
})
