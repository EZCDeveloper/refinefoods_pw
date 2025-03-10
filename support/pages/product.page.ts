import { Page, Locator, expect } from '@playwright/test';
import { TestData } from '../../fixtures/data/test-data';


export class ProductPage {
    private page: Page;

    // Locators
    private addNewProductButton: Locator;
    private uploadImageButton: Locator;
    private uploadImageInput: Locator;
    private nameInput: Locator;
    private descriptionInput: Locator;
    private priceInput: Locator;
    private categoryDropdown: Locator;
    private pizzasCategoryOption: Locator;
    private saveButton: Locator;
    private successNotification: Locator;
    private errorNotification: Locator;
    private statusContainer: Locator;


    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.addNewProductButton = page.getByRole('button', { name: 'Add new product' });
        this.uploadImageButton = page.getByRole('button', { name: 'Upload Image' });
        this.uploadImageInput = page.getByRole('textbox', { name: 'Upload Image' });
        this.nameInput = page.getByRole('textbox', { name: 'Name' });
        this.descriptionInput = page.getByRole('textbox', { name: 'Description' });
        this.priceInput = page.getByRole('spinbutton', { name: 'Price' });
        this.categoryDropdown = page.getByRole('combobox', { name: 'Category' });
        this.pizzasCategoryOption = page.getByRole('option', { name: '🍕 Pizzas' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.successNotification = page.locator('#notistack-snackbar');
        this.errorNotification = page.getByText('This field is required');
        this.statusContainer = page.locator('#isActive'); // Contenedor principal de los botones
    }


    async clickAddNewProduct() {
        await this.addNewProductButton.click();
    }

    // TIP: Upload image is not needed for this test
    /*  async clickUploadImage() {
         await this.uploadImageButton.click();
     } */

    async uploadImage(imagePath: string) {
        await this.uploadImageInput.setInputFiles(imagePath);
        await this.page.waitForSelector('img[alt="product"]', { state: 'visible', timeout: 10000 });
    }

    async fillProductName(name: string) {
        await this.nameInput.click();
        await this.nameInput.fill(name);
    }

    async fillProductDescription(description: string) {
        await this.descriptionInput.click();
        await this.descriptionInput.fill(description);
    }

    async fillProductPrice(price: string) {
        await this.priceInput.click();
        await this.priceInput.fill(price);
    }

    async selectCategory() {
        await this.categoryDropdown.click();
        await this.pizzasCategoryOption.click();
    }

    async setStatus(status: "Available" | "Unavailable") {
        const button = this.statusContainer.getByRole('button', { name: status, exact: true });
        const isActive = await button.getAttribute("aria-pressed") === "true";

        if (!isActive) {
            await button.click();
        }
    }

    async saveProduct() {
        await this.saveButton.click();
    }

    async getMessage() {
        return this.successNotification
    }

    async createProduct(product: TestData['product'], status: 'Available' | 'Unavailable') {
        await this.clickAddNewProduct();
        if (product.imagePath) await this.uploadImage(product.imagePath);
        if (product.name) await this.fillProductName(product.name);
        if (product.description) await this.fillProductDescription(product.description);
        if (product.price) await this.fillProductPrice(product.price);
        await this.selectCategory();
        await this.setStatus(status);
        await this.saveProduct();
    }

    async getErrorMessage() {
        return this.errorNotification
    }
}