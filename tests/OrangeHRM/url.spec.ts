import{test } from '@playwright/test';
import { assert } from 'node:console';

var Url = `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`

test('hitting Url', async ({page}) =>{
       await page.goto(Url)
});

test('has title', async({page}) => {
       await page.goto(Url)
});

test('login page elements', async({page}) => {

   await  page.goto(Url);
   await page.getByPlaceholder('Username').isVisible();
   await page.getByPlaceholder('Password').isVisible();
   await page.getByRole('button', { name: 'Login' }).isVisible()
});

test('login to application', async({page}) => {

   await  page.goto(Url); 
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForLoadState('networkidle');
    const dashboard = page.getByRole('heading', { name: 'Dashboard' });
    await dashboard.isVisible();
});

test('logout from application', async({page}) => {  
    await  page.goto(Url);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');

    const profileicon = page.locator('.oxd-userdropdown-name');
    await profileicon.click();
    const logoutbutton = page.getByRole('link', { name: 'Logout' });
    await logoutbutton.click();
    const loginpanel = page.getByRole('heading', { name: 'Login' });
    await loginpanel.isVisible();
});

