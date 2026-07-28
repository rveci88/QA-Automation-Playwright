import {Page, Locator} from '@playwright/test';

export class ProductPage{
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator

    constructor(page:Page){
        this.page=page;
        this.searchInput=page.locator('#search_product');
        this.searchButton=page.locator('#submit_search');
    }
    
    async searchProduct(productName:string): Promise<void> {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }



}