import {Page, Locator}  from '@playwright/test';

export class LoginPage{
  
    readonly page:Page;
    readonly emailLogin: Locator;
    readonly passwordLogin: Locator;
    readonly loginButton: Locator
    readonly nameSignup: Locator;
    readonly emailSignup: Locator;
    readonly signupButton: Locator;

    constructor(page:Page){

        this.page=page;
        this.emailLogin=page.locator('[data-qa="login-email"]');
        this.passwordLogin=page.locator('[data-qa="login-password"]');
        this.loginButton=page.locator('[data-qa="login-button"]');
        this.nameSignup=page.locator('[data-qa="signup-name"]');
        this.emailSignup=page.locator('[data-qa="signup-email"]');
        this.signupButton=page.locator('[data-qa="signup-button"]');
    }
    
    async gotologinPage():Promise<void>{
        await this.page.goto('/login');
    }
    async fillemailLogin(email:string):Promise<void>{
        await this.emailLogin.fill(email);
    }
    async fillpasswordLogin(password:string):Promise<void>{
        await this.passwordLogin.fill(password);
    }
    async clickLoginButton():Promise<void>{
        await this.loginButton.click();
    }
    async fillformLogin(email:string, password:string):Promise<void>{
        await this.fillemailLogin(email);
        await this.fillpasswordLogin(password);
        await this.clickLoginButton();
    }
    async fillnameSignup(name:string):Promise<void>{
        await this.nameSignup.fill(name);
    }
    async fillemailSignup(email:string):Promise<void>{
        await this.emailSignup.fill(email);
    }   
    async clickSignupButton():Promise<void>{
        await this.signupButton.click();
    }
    async fillformSignup(name:string, email:string):Promise<void>{
        await this.fillnameSignup(name);
        await this.fillemailSignup(email);
        await this.clickSignupButton();
    }
}


