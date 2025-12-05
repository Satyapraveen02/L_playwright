import { test, expect, Locator } from '@playwright/test';

    var Url = `https://www.youngandreckless.com/`


 test('hitting Url', async ({page}) =>{
        await page.goto(Url)
 });

 test('has title', async({page}) => {
        await page.goto(Url)
        await expect(page).toHaveTitle(/Young And Reckless/);
 });

 test('currencies', async({page}) => {
    
    await  page.goto(Url);
    page.getByAltText('a close up of a sign')

 });

 test('shop cargos', async({page}) => {
    
    await  page.goto(Url);
    //const locator = page.getByRole('link', { name: 'Shop Cargos' });
    await page.getByRole('link', { name: 'Shop Cargos' }).first().click();
 });

 test ('Bogo sale',async({page})=>{
   await page.goto(Url);
   const locators = page.locator('#shopify-section-header a[data-dropdown-rel="bogo-sale"]');
   await locators.hover();
   //await page.locator('a[data-dropdown-rel="bogo-sale"]').first().hover();

   const submenu_dropdown = locators.locator('ul.vertical-menu_submenu')
   await submenu_dropdown.waitFor({state : 'visible'})
   //await dropdown.locator('a[collections/bogo100-tees-march2025]').click();
   await submenu_dropdown.getByRole('link', { name: 'BOGO Tees' }).click();


 });