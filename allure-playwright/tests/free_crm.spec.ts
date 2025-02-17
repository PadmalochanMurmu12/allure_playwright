import {test, expect} from '@playwright/test'

test("Test landing page", async({page})=>{
    await page.goto('https://freecrm.com/en')
    // await(expect(page.))
    await(expect(page.locator('.MuiTypography-root.MuiTypography-body2.mui-vb1jy7')).toBeVisible)
})

test.fail("Test loginfunctionality", async({page})=>{
    await page.goto('https://ui.cogmento.com/?lang=en')
    // await(expect(page.))
    await page.locator("input[name='email']").fill("james@gmail.com")
    await page.locator("input[name='password']").fill("Test@123")
    await page.locator(".ui.fluid.large.blue.submit.button").click()
})