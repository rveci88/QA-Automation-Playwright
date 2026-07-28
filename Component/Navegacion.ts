import {Page, Locator} from "@playwright/test";


export class Navegacion {
     readonly page: Page;
     readonly homeLink: Locator;
     readonly productsLink: Locator;
     readonly cartLink: Locator;
     readonly loginLink: Locator;
     readonly testCasesLink: Locator;
     readonly apiTestingLink: Locator;
     readonly videoTutorialsLink: Locator;
     readonly contactUsLink: Locator;
     readonly deleteLink: Locator;
     readonly logoutLink: Locator;


     constructor(page:Page){
        this.page=page;
        this.homeLink=page.getByRole('link', { name: /Home/ });
        this.productsLink=page.getByRole('link', { name: /Products/ });
        this.cartLink=page.getByRole('link', { name: /Cart/ }).first();
        this.loginLink=page.getByRole('link', { name: /Signup/ });
        this.testCasesLink=page.getByRole('link', { name: /Test Cases/ }).first();
        this.videoTutorialsLink=page.getByRole('link', { name: /Video Tutorials/ });
        this.contactUsLink=page.getByRole('link', { name: /Contact us/ });
        this.deleteLink=page.getByRole('link', { name: /Delete Account/ });
        this.logoutLink=page.getByRole('link', { name: /Logout/ });
        this.apiTestingLink=page.getByRole('link', { name: /API Testing/ });
    }

    async clickHomeLink(): Promise<void> {
        await this.homeLink.click();
    }
    async clickProductsLink(): Promise<void> {
        await this.productsLink.click();
    }
    async clickCartLink(): Promise<void> {
        await this.cartLink.click();
    }
    async clickSignupLink(): Promise<void> {
        await this.loginLink.click();
    }
    async clickContactusLink(): Promise<void> {
        await this.contactUsLink.click();
    }
    async clickDeleteLink(): Promise<void> {
        await this.deleteLink.click();
    }
    async clickLogoutLink():Promise<void>{
        await this.logoutLink.click();
    }
    async clickTestCasesLink(): Promise<void> {
        await this.testCasesLink.click();
    }
    async clickApiTestingLink(): Promise<void> {
        await this.apiTestingLink.click();
    }


}
