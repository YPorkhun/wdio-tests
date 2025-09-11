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

     xit('should check text on docs/api page', async () => {

        await browser.url('https://webdriver.io/docs/api')

        await expect(await $('h1').getText()).toEqual('Introduction');

    });

        xit('should check attribute', async () => {

        await browser.url('https://webdriver.io/docs/api')

        const element = await $('a')
        const attr = await element.getAttribute('href')
        console.log("Attribute of element is: " + attr)

    });

       xit('should click on search and fill in it', async () => {

        await browser.url('https://webdriver.io/docs/api')

        let searchField = await $('.DocSearch-Button-Placeholder')
        await searchField.click()
        
        let inputField = await $('.DocSearch-Input')
        await inputField.addValue("all is done")
        await browser.pause(4000)

        let resetButton = await $('.DocSearch-Reset')
        await resetButton.click()
        await browser.pause(4000)
   
    })

});