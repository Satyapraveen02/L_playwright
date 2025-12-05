import { test } from '@playwright/test';

var Url = `https://youngandreckless.com`

test('hitting Url', async ({page}) =>{
       await page.goto(Url)

});
test