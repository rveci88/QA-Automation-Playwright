import {test,expect} from '../Fixture/FixtureUI'
import {UserFactory} from '../Factory/Data'
import {UserApi} from '../Services/UserApi'

test.describe('Test de Login',()=>{
    test('Login existoso @smoke @regression', async({page, loginPage, request})=>{
         const user=UserFactory.createRandomUser();
         await UserApi.createUser(request, user);
         await loginPage.gotologinPage();
         await loginPage.fillformLogin(user.email, user.password);
         await expect(page.getByText('Logged in as '+user.firstName)).toBeVisible();
         await expect(page).toHaveURL('/');
         await UserApi.deleteUser(request, user.email, user.password);
    })
    test('Login con campos vacio @regression',async({page, loginPage})=>{
        await loginPage.gotologinPage();
        await loginPage.fillemailLogin('');
        await loginPage.fillpasswordLogin('');
        await loginPage.clickLoginButton();
        await expect(page).toHaveURL('/login');
    })
    test('login con email valido y contraseña invalida @regression',async({page, loginPage, request})=>{
        const user=UserFactory.createRandomUser();
        await UserApi.createUser(request, user);
        await loginPage.gotologinPage();
        await loginPage.fillemailLogin(user.email);
        await loginPage.fillpasswordLogin('contraseñaInvalida');
        await loginPage.clickLoginButton();
        await expect(page).toHaveURL('/login');
        await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
        await UserApi.deleteUser(request, user.email, user.password);
    })
    test('Login con ambas credenciales invalidas @regression',async({page, loginPage})=>{
        const user=UserFactory.createRandomUser();
        await loginPage.gotologinPage();
        await loginPage.fillformLogin(user.email, user.password);
        await loginPage.clickLoginButton();
        await expect(page).toHaveURL('/login');
    })
    test('Logout exitoso @regression',async({page, loginPage, request, navHeader})=>{
        const user=UserFactory.createRandomUser();
        await UserApi.createUser(request, user);
        await loginPage.gotologinPage();
        await loginPage.fillformLogin(user.email, user.password);
        await expect(page.getByText('Logged in as '+user.firstName)).toBeVisible();
        await navHeader.clickLogoutLink();
        await expect(page).toHaveURL('/login');
        await UserApi.deleteUser(request, user.email, user.password);
    })
    test('Verificar Login con credenciales validas presionando enter @regression',async({page, loginPage, request})=>{
        const user=UserFactory.createRandomUser();
        await UserApi.createUser(request, user);
        await loginPage.gotologinPage();
        await loginPage.fillemailLogin(user.email);
        await loginPage.fillpasswordLogin(user.password);
        await page.keyboard.press('Enter');
        await expect(page.getByText('Logged in as '+user.firstName)).toBeVisible();
        await expect(page).toHaveURL('/');
        await UserApi.deleteUser(request, user.email, user.password);
    })
    test('Verificar contraseña encriptada @regression',async({loginPage})=>{
        await loginPage.gotologinPage();
        await expect(loginPage.passwordLogin).toHaveAttribute('type', 'password');
    })
})