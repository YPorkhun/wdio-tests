import { browser, expect } from "@wdio/globals";

describe('Home Task #2', () => {

    xit('should click on API tab', async () => {

        await browser.url('https://webdriver.io/')

        let apiTab = await $("//a[@class='navbar__item navbar__link' and contains(text(),'API')]")
        await browser.pause(2000)
        await apiTab.click()
        await browser.pause(2000)

    });
     xit('scroll into element and checking it is visible', async () => {

        await browser.url('https://webdriver.io/docs/api')

        const blogLink  = await $('.footer__link-item[href="/blog"]')
        await browser.pause(2000)
        await blogLink.scrollIntoView();
        await browser.pause(2000)
        await blogLink.isDisplayed();

    });
    xit('check link is visible,clickable and get html. After click on it and wait until "WebDriver Protocol" is shown', async () => {

        await browser.url('https://webdriver.io/docs/api')

        const nextLink  = await $('.pagination-nav__link[href="/docs/api/protocols"]')
        await browser.pause(2000)
        await nextLink.isDisplayed();
        await browser.pause(2000)
        await nextLink.isClickable();
        await nextLink.getHTML(false); 

        await nextLink.click();
        await browser.pause(2000)
        await browser.waitUntil( async () => {
            return $('h2#webdriver-protocol').isDisplayed();
        }, 2000, "Header is not displayed")

    });
});