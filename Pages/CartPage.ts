import {Page,Locator} from '@playwright/test';

export class CartPage{
    readonly page: Page;
    readonly proceedButton: Locator;
    

    constructor(page:Page){
        this.page=page;
        this.proceedButton=page.getByText('Proceed To Checkout');
    }

    async clickProceedButton(): Promise<void> {
        await this.proceedButton.click();
    }
}