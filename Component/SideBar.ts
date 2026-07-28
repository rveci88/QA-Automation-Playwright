import {Page, Locator} from '@playwright/test';

export class SideBar{
    readonly page: Page;
    readonly womenCategory: Locator;
    readonly dresssub: Locator;
    readonly topssub: Locator;
    readonly sareesub: Locator;
    readonly menCategory: Locator;
    readonly tshirtsub: Locator;
    readonly jeanssub: Locator;
    readonly kidsCategory: Locator;
    readonly kiddressub: Locator;
    readonly kidtopsub: Locator;
    readonly poloBrand: Locator;
    readonly hmBrand: Locator;
    readonly madameBrand: Locator;
    readonly mastharbourbrand: Locator;
    readonly babyhugBrand: Locator;
    readonly allenBrand: Locator;
    readonly kookieBrand: Locator;
    readonly bibabrand: Locator;

    constructor(page:Page){
        this.page=page;
        this.womenCategory=page.locator('[href="#Women"]');
        this.dresssub=page.locator('[href="/category_products/1"]');
        this.topssub=page.locator('[href="/category_products/2"]');
        this.sareesub=page.locator('[href="/category_products/7"]');
        this.menCategory=page.locator('[href="#Men"]');
        this.tshirtsub=page.locator('[href="/category_products/3"]');
        this.jeanssub=page.locator('[href="/category_products/6"]');
        this.kidsCategory=page.locator('[href="#Kids"]');
        this.kiddressub=page.locator('[href="/category_products/4"]');
        this.kidtopsub=page.locator('[href="/category_products/5"]');
        this.poloBrand=page.locator('[href="/brand_products/Polo"]');
        this.hmBrand=page.locator('[href="/brand_products/H&M"]');
        this.madameBrand=page.locator('[href="/brand_products/Madame"]');
        this.mastharbourbrand=page.locator('[href="/brand_products/Mast & Harbour"]');
        this.babyhugBrand=page.locator('[href="/brand_products/Babyhug"]');
        this.allenBrand=page.locator('[href="/brand_products/Allen Solly Junior"]');
        this.kookieBrand=page.locator('[href="/brand_products/Kookie Kids"]');
        this.bibabrand=page.locator('[href="/brand_products/Biba"]');
    }

    async clickWomenCategory(): Promise<void> {
        await this.womenCategory.click();
    }
    async clickDressSubCategory(): Promise<void> {
        await this.dresssub.click();
    }
    async clickTopsSubCategory(): Promise<void> {
        await this.topssub.click();
    }
    async clickSareeSubCategory(): Promise<void> {
        await this.sareesub.click();
    }
    async clickMenCategory(): Promise<void> {
        await this.menCategory.click();
    }
    async clickTshirtSubCategory(): Promise<void> {
        await this.tshirtsub.click();
    }
    async clickJeansSubCategory(): Promise<void> {
        await this.jeanssub.click();
    }
    async clickKidsCategory(): Promise<void> {
        await this.kidsCategory.click();
    }
    async clickKidDressSubCategory(): Promise<void> {
        await this.kiddressub.click();
    }
    async clickKidTopSubCategory(): Promise<void> {
        await this.kidtopsub.click();
    }
    async clickPoloBrand(): Promise<void> {
        await this.poloBrand.click();
    }
    async clickHMBrand(): Promise<void> {
        await this.hmBrand.click();
    }
    async clickMadameBrand(): Promise<void> {
        await this.madameBrand.click();
    }
    async clickMastHarbourBrand(): Promise<void> {
        await this.mastharbourbrand.click();
    }
    async clickBabyHugBrand(): Promise<void> {
        await this.babyhugBrand.click();
    }
    async clickAllenBrand(): Promise<void> {
        await this.allenBrand.click();
    }
    async clickKookieBrand(): Promise<void> {
        await this.kookieBrand.click();
    }
    async clickBibaBrand(): Promise<void> {
        await this.bibabrand.click();
    }
}