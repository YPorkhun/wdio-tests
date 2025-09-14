import { browser, expect } from "@wdio/globals";

describe('Home Task #3', () => {

    /* 
    'User can log in DOU page using different accounts'
    STR:
       1. Open page dou.com
       2. Click on button "Вхід і реєстрація"
    ER: 
    User can see modal window with different accounts
    */

    xit('Modal window with accounts is shown', async () => {

        await browser.url('https://dou.ua/')

        const loginButton = await $("#login-link[href='javascript:;']")
        await browser.pause(2000)
        await loginButton.click();
        await browser.pause(4000)

        const modalWindowAccounts = await $('.border')
        await modalWindowAccounts.isDisplayed();

        const googleButton = await $('login-button btnGoogle');
        await googleButton.isDisplayed();
        await googleButton.isClickable();
        await browser.pause(2000)
        const linkedInButton = await $('.login-button btnLin');
        await linkedInButton.isDisplayed();
        await linkedInButton.isClickable();
        await browser.pause(2000)
        const gitHubButton = await $('.login-button btnLoginGitHub');
        await gitHubButton.isDisplayed();
        await gitHubButton.isClickable();
        await browser.pause(2000)

        const closeButton = await $('//div[@class="close cancel"]');
        await closeButton.click();
        await browser.pause(2000)
    });

/* 'User can see blog page'
     STR:
       1. Scroll into blog tab
       2. Click on blog tab
    ER: 
    Blog page is open
*/

    xit('Blog page is opened', async () => {

        await browser.url('https://dou.ua/')

        const blogButton = await $('//a[@href="https://dou.ua/forums/blogs/?from=fpcol"]')
        await browser.pause(2000)
        await blogButton.click();
        await browser.pause(2000)
        await expect(browser).toHaveUrl("https://dou.ua/forums/blogs")

        const searchBlogdropdown = await $('.select')
        await searchBlogdropdown.isDisplayed();
        await searchBlogdropdown.click();
        await browser.pause(2000)
        const optionAll = await $('//option[@value="https://dou.ua/forums/"]')
        await optionAll.click();
        await browser.pause(2000)
        console.log("Text in dropdown menu is: " + await searchBlogdropdown.getText()); //Всі розділи форуму

});

/* 'User can see comments from other users in blog page'
     STR:
       1. Navigate comments sidebar
       2. Click on comment
    ER: 
    User can see the comments in threads
    User can see text of comments and time when they were left
*/

    xit('User can see other comments in blog page', async () => {

        await browser.url('https://dou.ua/forums/blogs/')

        const commentButton = await $('.b-sidebar-comments')
        await commentButton.isDisplayed();
        await browser.pause(2000)

        const lastComment = await $('(//div[contains(@class, "b-sidebar-comment")])[1]//a[@class="time"]/@title')
        console.log("Text of last comment: " + lastComment); 

});
});