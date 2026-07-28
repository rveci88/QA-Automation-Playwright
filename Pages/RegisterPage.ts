import { Page, Locator } from '@playwright/test';
import {UserData} from '../Factory/Data';

export class RegisterPage {
    readonly page: Page;
    readonly radioMr: Locator;
    readonly radioMrs: Locator;
    readonly password: Locator;
    readonly birthday: Locator;
    readonly birthmonth: Locator;
    readonly birthyear: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator
    readonly company: Locator;
    readonly address: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountButton: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.radioMr = page.getByRole('radio', { name: 'Mr.' });
        this.radioMrs = page.getByRole('radio', { name: 'Mrs.' });
        this.password = page.locator('[data-qa="password"]');
        this.birthday = page.locator('[data-qa="days"]');
        this.birthmonth = page.locator('[data-qa="months"]');
        this.birthyear = page.locator('[data-qa="years"]');
        this.firstName = page.locator('[data-qa="first_name"]');
        this.lastName = page.locator('[data-qa="last_name"]');
        this.company = page.locator('[data-qa="company"]');
        this.address = page.locator('[data-qa="address"]');
        this.country = page.locator('[data-qa="country"]');
        this.state = page.locator('[data-qa="state"]');
        this.city = page.locator('[data-qa="city"]');
        this.zipcode = page.locator('[data-qa="zipcode"]');
        this.mobileNumber = page.locator('[data-qa="mobile_number"]');
        this.createAccountButton = page.locator('[data-qa="create-account"]');
        this.continueButton = page.locator('[data-qa="continue-button"]');
    }

    async markMr(): Promise<void> {
        await this.radioMr.check();
    }
    async markMrs(): Promise<void> {
        await this.radioMrs.check();
    }
    async fillPassword(password: string): Promise<void> {
        await this.password.fill(password);
    }
    async selectBirthday(day: string): Promise<void> {
        await this.birthday.selectOption(day);
    }
    async selectBirthmonth(month: string): Promise<void> {
        await this.birthmonth.selectOption(month);
    }
    async selectBirthyear(year: string): Promise<void> {
        await this.birthyear.selectOption(year);
    }
    async fillFirstName(firstName: string): Promise<void> {
        await this.firstName.fill(firstName);
    }
    async fillLastName(lastName: string): Promise<void> {
        await this.lastName.fill(lastName);
    }
    async fillCompany(company: string): Promise<void> {
        await this.company.fill(company);
    }
    async fillAddress(address: string): Promise<void> {
        await this.address.fill(address);
    }
    async selectCountry(country: string): Promise<void> {
        await this.country.selectOption(country);
    }
    async fillState(state: string): Promise<void> {
        await this.state.fill(state);
    }
    async fillCity(city: string): Promise<void> {
        await this.city.fill(city);
    }
    async fillZipcode(zipcode: string): Promise<void> {
        await this.zipcode.fill(zipcode);
    }
    async fillMobileNumber(mobileNumber: string): Promise<void> {
        await this.mobileNumber.fill(mobileNumber);
    }
    async clickCreateAccountButton(): Promise<void> {
        await this.createAccountButton.click();
    }
    async clickContinueButton(): Promise<void> {
        await this.continueButton.click();
    }
    async fillFormRegister(user:UserData): Promise<void> {
        if (user.gender === "Mr.") {
            await this.markMr();
        } else {
            await this.markMrs();
        }
        await this.fillPassword(user.password);
        await this.selectBirthday(user.day);
        await this.selectBirthmonth(user.month);
        await this.selectBirthyear(user.year);
        await this.fillFirstName(user.firstName);
        await this.fillLastName(user.lastName);
        await this.fillCompany(user.company);
        await this.fillAddress(user.address);
        await this.selectCountry(user.country);
        await this.fillState(user.state);
        await this.fillCity(user.city);
        await this.fillZipcode(user.zipcode);
        await this.fillMobileNumber(user.mobileNumber);
        await this.clickCreateAccountButton();
    }
}


