import{Page, Locator} from '@playwright/test';

export class HomePage{
    readonly page:Page;


    constructor(page:Page){
        this.page=page;
    }

    async gotohomePage():Promise<void>{
        await this.page.goto('/');
    }
}