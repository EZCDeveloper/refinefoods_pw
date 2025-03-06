import { Page, Locator, expect } from '@playwright/test';

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
    private availableButton: Locator;
    private saveButton: Locator;
    private successNotification: Locator;

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
        this.availableButton = page.getByRole('button', { name: 'Available', exact: true });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.successNotification = page.locator('#notistack-snackbar');
    }

    async clickAddNewProduct() {
        await this.addNewProductButton.click();
    }

    async clickUploadImage() {
        await this.uploadImageButton.click();
    }

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

    async setAvailableStatus() {
        await this.page.waitForSelector('button[aria-pressed="true"]', { state: 'visible', timeout: 10000 });
        await this.availableButton.click();
    }

    async saveProduct() {
        await this.saveButton.click();
    }

    async getMessage() {
        return this.successNotification
    }

    async createProduct(product:
        {
            IMAGE_PATH: string,
            NAME: string,
            DESCRIPTION: string,
            PRICE: string
        }
    ) {
        await this.clickAddNewProduct();
        await this.clickUploadImage();
        await this.uploadImage(product.IMAGE_PATH);
        await this.fillProductName(product.NAME);
        await this.fillProductDescription(product.DESCRIPTION);
        await this.fillProductPrice(product.PRICE);
        await this.selectCategory();
        await this.setAvailableStatus();
        await this.saveProduct();
    }
}