import { TEST_COPY } from '../../fixtures/data/test-copy';
import { TEST_DATA } from '../../fixtures/data/test-data';
import { URL } from '../../fixtures/data/url-data';
import { test  } from '../../fixtures/myFixtures/allFixtures';
import { expect } from '@playwright/test';


test.describe('TS01_Products', () => {
    
    test.beforeEach(async ({ basePage }) => {
        await basePage.navigateTo(URL.PRODUCTS);
    })

    test("TC01. Create a Product Successfully", async ({productPage}) => {
        await productPage.createProduct(
            TEST_DATA.PRODUCT
        );
        const message = await productPage.getMessage();
        await expect(message).toContainText(TEST_COPY.MESSAGES.PRODUCT_CREATED_SUCCESS);
    })

    test("TC02. Fail to Create a Product: product name is empty", async ({productPage}) => {
        const productWithoutName = {
            ...TEST_DATA.PRODUCT,
            NAME: "" // We omit the name
        };
    
        await productPage.createProduct(productWithoutName); 

        const message = await productPage.getErrorMessage();
        await expect(message).toContainText(TEST_COPY.MESSAGES.PRODUCT_NAME_REQUIRED);

    })
})
