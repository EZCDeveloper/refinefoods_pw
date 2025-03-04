import { test as baseTest} from "@playwright/test";
import { BasePage } from "../../support/pages/base.page";
import { ProductPage } from "../../support/pages/product.page";


type PageFixtures = {
    basePage: BasePage
    productPage: ProductPage
}

export const test = baseTest.extend<PageFixtures>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    }
})