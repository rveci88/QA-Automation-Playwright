import {Page, Locator} from '@playwright/test';

export class PaymentPage {
    readonly page: Page;
    readonly nameOnCardInput: Locator;
    readonly cardNumberInput: Locator; 
    readonly CVCInput: Locator;
    readonly expirationMonthInput: Locator;
    readonly expirationYearInput: Locator;
    readonly confirmOrderButton: Locator;
    readonly fcontinue:Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
        this.cardNumberInput = page.locator('[data-qa="card-number"]');
        this.CVCInput = page.locator('[data-qa="cvc"]');
        this.expirationMonthInput = page.locator('[data-qa="expiry-month"]');
        this.expirationYearInput = page.locator('[data-qa="expiry-year"]');
        this.confirmOrderButton = page.locator('[data-qa="pay-button"]');
        this.fcontinue=page.locator('[data-qa="continue-button"]');
    }
    
    async fillNameOnCard(name: string) {
        await this.nameOnCardInput.fill(name);
    }
    async fillCardNumber(cardNumber: string) {
        await this.cardNumberInput.fill(cardNumber);
    }   
    async fillCVC(cvc: string) {
        await this.CVCInput.fill(cvc);
    }
    async fillExpirationMonth(month: string) {
        await this.expirationMonthInput.fill(month);
    }   
    async fillExpirationYear(year: string) {
        await this.expirationYearInput.fill(year);
    }
    async clickConfirmOrder() {
        await this.confirmOrderButton.click();
    }
    async fillPaymentForm(name: string, cardNumber: string, cvc: string, month: string, year: string) {
        await this.fillNameOnCard(name);
        await this.fillCardNumber(cardNumber);
        await this.fillCVC(cvc);
        await this.fillExpirationMonth(month);
        await this.fillExpirationYear(year);
        await this.clickConfirmOrder();
    }
    async clickContinueButton() {
        await this.fcontinue.click();
    }
}
