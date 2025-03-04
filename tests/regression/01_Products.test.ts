import { test  } from '../../fixtures/myFixtures/allFixtures';
import { expect } from '@playwright/test';


test.describe('TS01_Products', () => {
    
    test.beforeEach(async ({ basePage }) => {
        await basePage.navigateTo('products');
    })


    test("TC01. Create a Product Successfully", async ({productPage}) => {
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
