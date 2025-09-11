import { browser, expect } from "@wdio/globals";

describe('Home Task #1', () => {

    xit('should click on API tab and check URL', async () => {
        await browser.url('https://webdriver.io/')

        let apiTab = await $("//a[@class='navbar__item navbar__link' and contains(text(),'API')]")
        await browser.pause(2000)
        await apiTab.click()
        await browser.pause(4000)

        await expect(browser).toHaveUrl("https://webdriver.io/docs/api")

    });

     it('should check text on docs/api page', async () => {

        await browser.url('https://webdriver.io/docs/api')

        await expect(await $('h1').getText()).toEqual('Introduction');

    })

});