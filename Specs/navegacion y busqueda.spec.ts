import {test, expect} from '../Fixture/FixtureUI'
import {UserApi} from '../Services/UserApi'
import {UserFactory} from '../Factory/Data'


test.describe('Test de navegacion y busqueda',()=>{
    test('Navigate Products Page @regression',async({page, navHeader, homePage})=>{
        await homePage.gotohomePage();
        await navHeader.clickProductsLink();
        await expect(page).toHaveURL('/products');
    })
    test('Navigate Home Page @regression',async({modalShop, page, navHeader, homePage})=>{
        await homePage.gotohomePage();
        await navHeader.clickProductsLink();
        await expect(page).toHaveURL('/products');
        await navHeader.clickHomeLink();
        await expect(page).toHaveURL('/');
    })
    test('Navigate Cart Page @regression',async({page, navHeader, homePage})=>{
        await homePage.gotohomePage();
        await navHeader.clickCartLink();
        await expect(page).toHaveURL('/view_cart');
    })
    test('Validar Navigate Signup Page @regression',async({page, navHeader, homePage})=>{
        await homePage.gotohomePage();
        await navHeader.clickSignupLink();
        await expect(page).toHaveURL('/login');
    })
    test('Navigate Contact Us Page @regression',async({page, navHeader, homePage})=>{
        await homePage.gotohomePage();
        await navHeader.clickContactusLink();
        await expect(page).toHaveURL('/contact_us');
    })
    test('navigate Test Cases Page @regression',async({page, navHeader, homePage})=>{
        await homePage.gotohomePage();
        await navHeader.clickTestCasesLink();
        await expect(page).toHaveURL('/test_cases');
    })
    test('navigate API Testing Page @regression',async({page, navHeader, homePage})=>{
        await homePage.gotohomePage();
        await navHeader.clickApiTestingLink();
        await expect(page).toHaveURL('/api_list');
    })
    test('Verificar Navegacion @smoke @regression', async({page,navHeader,homePage})=>{
        await homePage.gotohomePage();
        await navHeader.clickProductsLink();
        await expect(page).toHaveURL('/products');
        await navHeader.clickCartLink();
        await expect(page).toHaveURL('/view_cart');
        await navHeader.clickSignupLink();
        await expect(page).toHaveURL('/login');
        await navHeader.clickContactusLink();
        await expect(page).toHaveURL('/contact_us');
        await navHeader.clickHomeLink();
        await expect(page).toHaveURL('/');
        await navHeader.clickTestCasesLink();
        await expect(page).toHaveURL('/test_cases');
        await navHeader.clickApiTestingLink();
        await expect(page).toHaveURL('/api_list');
    })
    test('Verificar subscripcion @smoke @regression', async({page,footer,homePage, request})=>{
        const user=UserFactory.createRandomUser();
        await UserApi.createUser(request, user);
        await homePage.gotohomePage();
        await footer.footermailSubscribe(user.email);
        await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();
        await UserApi.deleteUser(request, user.email, user.password);
    })
    test('buscar un producto @smoke @regression', async({productPage,homePage,navHeader, productTable})=>{
        await homePage.gotohomePage();
        await navHeader.clickProductsLink();
        await productPage.searchProduct('Blue Top');
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(1);
    })
    test('buscar un producto inexistente @regression', async({productPage,homePage,navHeader, productTable})=>{
        await homePage.gotohomePage();
        await navHeader.clickProductsLink();
        await productPage.searchProduct('ProductoInexistente');
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(0);
    })
    test('Buscar por categoria Women @regression', async({page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickWomenCategory();
        await sideBar.clickDressSubCategory();
        await expect(page.getByText('Women - Dress Products')).toBeVisible();
        await sideBar.clickWomenCategory();
        await sideBar.clickTopsSubCategory();
        await expect(page.getByText('Women - Tops Products')).toBeVisible();
        await sideBar.clickWomenCategory()
        await sideBar.clickSareeSubCategory();
        await expect(page.getByText('Women - Saree Products')).toBeVisible();
    })
    test('Buscar por categoria Men @regression', async({page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickMenCategory();
        await sideBar.clickTshirtSubCategory();
        await expect(page.getByText('Men - Tshirts Products')).toBeVisible();
        await sideBar.clickMenCategory();
        await sideBar.clickJeansSubCategory();
        await expect(page.getByText('Men - Jeans Products')).toBeVisible();
    })
    test('Buscar por categoria Kids @regression', async({page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickKidsCategory();
        await sideBar.clickKidDressSubCategory();
        await expect(page.getByText('Kids - Dress Products')).toBeVisible();
        await sideBar.clickKidsCategory();
        await sideBar.clickKidTopSubCategory();
        await expect(page.getByText('Kids - Tops &  Shirts Products')).toBeVisible();
    })
    test('Seleccionar Marca Polo @regression', async({productTable, page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickPoloBrand();
        await expect(page.getByText('Brand - Polo Products')).toBeVisible();
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(6);
    })
    test('Seleccionar Marca H&M @regression', async({productTable, page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickHMBrand();
        await expect(page.getByText('Brand - H&M Products')).toBeVisible();
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(5);
    })
    test('Seleccionar Marca Madame @regression', async({productTable, page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickMadameBrand();
        await expect(page.getByText('Brand - Madame Products')).toBeVisible();
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(5);
    })
    test('Seleccionar Marca Mast & Harbour @regression', async({productTable, page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickMastHarbourBrand();
        await expect(page.getByText('Brand - Mast & Harbour Products')).toBeVisible();
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(3);
    })
    test('Seleccionar Marca Babyhug @regression', async({productTable, page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickBabyHugBrand();
        await expect(page.getByText('Brand - Babyhug Products')).toBeVisible();
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(4);
    })
    test('Seleccionar Marca Allen Solly @regression', async({productTable, page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickAllenBrand();
        await expect(page.getByText('Brand - Allen Solly Junior Products')).toBeVisible();
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(3);
    })
    test('Seleccionar Marca Kookie Kids @regression', async({productTable, page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickKookieBrand();
        await expect(page.getByText('Brand - Kookie Kids Products')).toBeVisible();
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(3);
    })
    test('Seleccionar Marca Biba @regression', async({productTable, page, homePage,sideBar})=>{
        await homePage.gotohomePage();
        await sideBar.clickBibaBrand();
        await expect(page.getByText('Brand - Biba Products')).toBeVisible();
        const productCount=await productTable.ProductsCount();
        expect(productCount).toBe(5);
    })
})