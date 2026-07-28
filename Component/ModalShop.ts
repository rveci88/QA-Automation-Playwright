import {Page, Locator} from '@playwright/test';

export class ModalShop{
    readonly page: Page;
    readonly modalViewCart: Locator;
    readonly modalContinueShopping: Locator;
    readonly modalCloseButton: Locator;

    constructor(page:Page){
        this.page=page;
        this.modalViewCart=page.getByRole('link', { name: 'View Cart' }).first();
        this.modalContinueShopping=page.getByRole('button', { name: 'Continue Shopping' });
        this.modalCloseButton=page.locator('continue-prompt-text').getByText('close');
    }

    async clickViewCartButton(): Promise<void> {
        await this.modalViewCart.click();
    }
    async clickContinueShoppingButton(): Promise<void> {
        await this.modalContinueShopping.click();
    }
    async clickCloseButton(): Promise<void> {
        await this.modalCloseButton.click();
    }
}