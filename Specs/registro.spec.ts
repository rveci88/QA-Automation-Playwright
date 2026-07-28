import {test, expect} from '../Fixture/FixtureUI'
import {UserFactory} from '../Factory/Data'
import {UserApi} from '../Services/UserApi'

test.describe('Test de Registro',()=>{
    test('Registro exitoso @smoke @regression', async({page, loginPage, registerPage, request})=>{
       const user=UserFactory.createRandomUser();
       await loginPage.gotologinPage();
       await loginPage.fillformSignup(user.firstName, user.email);
       await expect(page.getByText('Enter Account Information')).toBeVisible();
       await registerPage.fillFormRegister(user);
       await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
       await registerPage.clickContinueButton();
       await expect(page).toHaveURL('/');
       await expect(page.getByText('Logged in as '+user.firstName)).toBeVisible();
       await UserApi.deleteUser(request, user.email, user.password);
    })
    test('Singup con name vacio',async({page, loginPage})=>{
        const user=UserFactory.createRandomUser();
        await loginPage.gotologinPage();
        await loginPage.fillformSignup('', user.email);
        await expect(page).toHaveURL('/login');
    })
    test('Singup con email vacio',async({page, loginPage})=>{
        const user=UserFactory.createRandomUser();
        await loginPage.gotologinPage();
        await loginPage.fillformSignup(user.firstName, '');
        await expect(page).toHaveURL('/login');
    })
    test('Singup con email invalido @regression',async({page, loginPage})=>{
        const user=UserFactory.createRandomUser();
        await loginPage.gotologinPage();
        await loginPage.fillformSignup(user.firstName, 'emailinvalido');
        await expect(page).toHaveURL('/login');
    })
    test('Registro con email ya existente @regression',async({page, loginPage, request})=>{
        const user=UserFactory.createRandomUser();
        try{
        await UserApi.createUser(request, user);
        await loginPage.gotologinPage();
        await loginPage.fillformSignup(user.firstName, user.email);
        await expect(page.getByText('Email Address already exist!')).toBeVisible();
        }finally{
        await UserApi.deleteUser(request, user.email, user.password);
        }
    })
    test('Registro con campos obligatorios vacios @regression',async({page, loginPage, registerPage})=>{
        const user=UserFactory.createRandomUser();
        await loginPage.gotologinPage();
        await loginPage.fillformSignup(user.firstName, user.email);
        await registerPage.clickCreateAccountButton();
        await expect(page).toHaveURL('/signup')
    })
})