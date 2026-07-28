import {Page, Locator} from '@playwright/test';

export class ProductTable{
    readonly page: Page;
    readonly productGrid: Locator;
    readonly productItems: Locator;


    constructor(page:Page){
        this.page=page;
        this.productGrid=page.locator('.features_items');
        this.productItems=page.locator('.product-image-wrapper');
    }

    async ProductsCount(): Promise<number> {
        return await this.productItems.count();
    }
    async clickAddToCartButton(productname: string): Promise<void> {
        const productItem = this.productItems.filter({hasText:productname});
        await productItem.hover();
        await productItem.locator('.product-overlay .add-to-cart').click();
    }
    async clickViewProductLink(): Promise<void> {
        await this.productItems.getByRole('link', { name: /View Product/ }).click();
    }

}