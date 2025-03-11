import { test as baseTest } from "@playwright/test";
import { BasePage } from "../../support/pages/base.page";
import { ProductPage } from "../../support/pages/product.page";
import { OrderPage } from "../../support/pages/order.page";


type PageFixtures = {
    basePage: BasePage
    productPage: ProductPage
    orderPage: OrderPage
}

export const test = baseTest.extend<PageFixtures>({
    /*-- Page Fixtures --*/
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    orderPage: async ({ page }, use) => {
        const orderPage = new OrderPage(page);
        await use(orderPage);
    }
})