import {Page, Locator} from '@playwright/test';



export class CheckoutPage {
    readonly page: Page;
    readonly orderButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderButton = page.getByRole('link', { name: 'Place Order' });
    }

    async clickPlaceOrder() {
        await this.orderButton.click();
    }
}


// await page.getByRole('link', { name: 'Place Order' }).click();