import {Page, Locator} from '@playwright/test';


export class Footer {
   readonly page: Page;
   readonly placeHolder: Locator;
   readonly subscribeButton: Locator;


   constructor(page:Page){
        this.page=page;
        this.placeHolder=page.locator('#susbscribe_email');
        this.subscribeButton=page.locator('#subscribe');
   }

   async footermailSubscribe(email:string): Promise<void> {
        await this.placeHolder.fill(email);
        await this.subscribeButton.click();
   }
   async clickSubscribeButtonText(): Promise<void> {
        await this.subscribeButton.click();
   }
   async footersubscription(email:string): Promise<void> {
        await this.placeHolder.fill(email);
        await this.subscribeButton.click();
   }
}