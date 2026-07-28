import {test as base, expect} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage';
import {RegisterPage} from '../Pages/RegisterPage';
import {Navegacion} from '../Component/Navegacion';
import {HomePage} from '../Pages/HomePage';
import {Footer} from '../Component/Footer';
import {ProductPage} from '../Pages/ProductPage';
import {ProductTable} from '../Component/ProductTable';
import {SideBar} from '../Component/SideBar';
import {ModalShop} from '../Component/ModalShop';
import {CartPage} from '../Pages/CartPage';
import {ProductDetailPage} from '../Pages/ProductDetailPage';
import {CheckoutPage} from '../Pages/CheckoutPage';
import {PaymentPage} from '../Pages/PaymentPage';


type FixtureUI={
    loginPage: LoginPage;
    registerPage: RegisterPage;
    navHeader:Navegacion;
    homePage:HomePage;
    footer:Footer;
    productPage:ProductPage;
    productTable:ProductTable;
    sideBar:SideBar;
    modalShop:ModalShop;
    cartPage:CartPage;
    productDetailPage:ProductDetailPage;
    checkoutPage:CheckoutPage;
    paymentPage:PaymentPage;  
}

export const test=base.extend<FixtureUI>({
      loginPage:async ({page},use)=>{
        const loginPage=new LoginPage(page);
        await use(loginPage);
      },
      registerPage:async({page},use)=>{
        const registerPage=new RegisterPage(page)
        await use(registerPage);
      },
      navHeader:async({page},use)=>{
        const navHeader=new Navegacion(page);
        await use(navHeader);
      },
      homePage:async({page},use)=>{
        const homePage=new HomePage(page);
        await use(homePage);
      },
      footer:async({page},use)=>{
        const footer=new Footer(page);
        await use(footer);
      },
      productPage:async({page},use)=>{
        const productPage=new ProductPage(page);
        await use(productPage);
      },
      productTable:async({page},use)=>{
        const productTable=new ProductTable(page);
        await use(productTable);
      },
      sideBar:async({page},use)=>{
        const sideBar=new SideBar(page);
        await use(sideBar);
      },
      modalShop:async({page},use)=>{
        const modalShop=new ModalShop(page);
        await use(modalShop);
      },
      cartPage:async({page},use)=>{
        const cartPage=new CartPage(page);
        await use(cartPage);
      },
      productDetailPage:async({page},use)=>{
        const productDetailPage=new ProductDetailPage(page);
        await use(productDetailPage);
      },
      checkoutPage:async({page},use)=>{
        const checkoutPage=new CheckoutPage(page);
        await use(checkoutPage);
      },
      paymentPage:async({page},use)=>{
        const paymentPage=new PaymentPage(page);
        await use(paymentPage);
      }
}) 


export {expect}