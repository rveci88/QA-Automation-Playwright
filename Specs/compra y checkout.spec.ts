import {test, expect} from '../Fixture/FixtureUI';
import {UserApi} from '../Services/UserApi';
import {UserFactory} from '../Factory/Data'; 

test.describe('Test de compra y checkout',()=>{
    test('Agregar producto al carrito sin estar registrado @regression',async({page,modalShop, homePage, productTable, navHeader, productPage})=>{
         await homePage.gotohomePage();
         await navHeader.clickProductsLink();
         await productPage.searchProduct('Blue Top');
         await productTable.clickAddToCartButton('Blue Top');
         await modalShop.clickViewCartButton();
         await expect(page).toHaveURL(/view_cart/);
    })
    test('Agregar producto al carrito y continuar comprando @regression',async({page,modalShop, homePage, productTable, navHeader, productPage})=>{
        await homePage.gotohomePage();
        await navHeader.clickProductsLink();
        await productPage.searchProduct('Blue Top');
        await productTable.clickAddToCartButton('Blue Top');
        await modalShop.clickContinueShoppingButton();
        await expect(page.getByText('Searched Products')).toBeVisible();
    })
    test('Agregar producto al carrito y proceder a checkout sin loguear @regression',async({page, modalShop, homePage, productTable, navHeader, productPage, cartPage, productDetailPage})=>{
        await homePage.gotohomePage();
        await navHeader.clickProductsLink();
        await productPage.searchProduct('Blue Top');
        await productTable.clickViewProductLink();
        await productDetailPage.setProductQuantity(2);
        await productDetailPage.clickAddToCartButton();
        await modalShop.clickViewCartButton();
        await expect(page).toHaveURL('/view_cart');
        await cartPage.clickProceedButton();
        await expect(page.getByText('Register / Login account to proceed on checkout.')).toBeVisible();
    })
    test('Agregar producto al carrito y proceder a checkout logueado @regression',async({page, modalShop, request, productTable, navHeader, productPage, cartPage, productDetailPage, loginPage})=>{
        const user=UserFactory.createRandomUser();
        await UserApi.createUser(request, user);
        try{
        await loginPage.gotologinPage();
        await loginPage.fillformLogin(user.email, user.password);
        await navHeader.clickProductsLink();
        await productPage.searchProduct('Blue Top');
        await productTable.clickViewProductLink();
        await productDetailPage.setProductQuantity(2);
        await productDetailPage.clickAddToCartButton();
        await modalShop.clickViewCartButton();
        await expect(page).toHaveURL('/view_cart');
        await cartPage.clickProceedButton();
        await expect(page).toHaveURL('/checkout');
        }finally{
        await UserApi.deleteUser(page.request, user.email, user.password);}
    })
    test('Flujo completo search, checkout, payment @smoke @regression',async({cartPage, modalShop,page,paymentPage,request, loginPage, navHeader, productPage, productTable,productDetailPage, checkoutPage})=>{
        const user=UserFactory.createRandomUser();
        await UserApi.createUser(request, user);
        try{
        await loginPage.gotologinPage();
        await loginPage.fillformLogin(user.email, user.password);
        await navHeader.clickProductsLink();
        await productPage.searchProduct('Blue Top');
        await productTable.clickViewProductLink();
        await productDetailPage.setProductQuantity(2);
        await productDetailPage.clickAddToCartButton();
        await modalShop.clickViewCartButton();
        await cartPage.clickProceedButton();
        await checkoutPage.clickPlaceOrder();
        await paymentPage.fillPaymentForm(user.firstName+' '+user.lastName, user.cardNumber, user.cvc, user.month, user.year);
        await expect(page.getByText('Order Placed!')).toBeVisible();
        await paymentPage.clickContinueButton();
        await expect(page).toHaveURL('/');
        }finally{
        await UserApi.deleteUser(request, user.email, user.password);
        }
    })
})