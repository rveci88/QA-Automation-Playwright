import {Page, Locator} from '@playwright/test';

export class ProductDetailPage{

    readonly page: Page;
    readonly productQuantity: Locator;
    readonly addToCartButton: Locator;
    readonly namereviewInput: Locator;
    readonly emailreviewInput: Locator;
    readonly reviewTextarea: Locator;
    readonly reviewSubmitButton: Locator;

    constructor(page:Page){
        this.page=page;
        this.productQuantity=page.locator('#quantity');
        this.addToCartButton=page.getByRole('button', { name: /Add to cart/ });
        this.namereviewInput=page.locator('#name');
        this.emailreviewInput=page.locator('#email');
        this.reviewTextarea=page.locator('#review');
        this.reviewSubmitButton=page.getByRole('button', { name: 'Submit' });
    }

    async setProductQuantity(quantity: number): Promise<void> {
        await this.productQuantity.fill(quantity.toString());
    }
    async clickAddToCartButton(): Promise<void> {
        await this.addToCartButton.click();
    }
    async fillNameReviewInput(name: string): Promise<void> {
        await this.namereviewInput.fill(name);
    }
    async fillEmailReviewInput(email: string): Promise<void> {
        await this.emailreviewInput.fill(email);
    }
    async fillReviewTextarea(review: string): Promise<void> {
        await this.reviewTextarea.fill(review);
    }
    async clickReviewSubmitButton(): Promise<void> {
        await this.reviewSubmitButton.click();
    }
    async fillReviewForm(name: string, email: string, review: string): Promise<void> {
        await this.fillNameReviewInput(name);
        await this.fillEmailReviewInput(email);
        await this.fillReviewTextarea(review);
        await this.clickReviewSubmitButton();
    }
}