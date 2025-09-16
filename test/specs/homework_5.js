import { browser, expect } from "@wdio/globals";
import MarketPage from "../../pages/MarketPage";
import SoonToBePublishedPage from "../../pages/SoonToBePublishedPage";


describe('Home Task #5', () => {


    xit('Click on registration button and fill in the fields', async () => {

        await browser.url('https://store.ababahalamaha.com.ua/')

        await MarketPage.clickOnButtonSignUp();
        await browser.waitUntil( async () => {
            return $('.ant-modal-body').isDisplayed();
            }, {
            timeout: 3000,
            timeoutMsg: "Modal window is not displayed"
});
       
        await MarketPage.enterName("Yuliia")
        const valueName = await MarketPage.userName.getValue();
        await MarketPage.enterSurName("Test")
        const valueSurName = await MarketPage.userSurName.getValue();
        await MarketPage.enterEmail("example@mail.com")
        const valueEmail = await MarketPage.userEmail.getValue();

        console.log(valueSurName); //Test
        console.log(valueName); //Yuliia
        console.log(valueEmail); //example@mail.com
        
    });

    xit('Navigate new Page, get text of header and use checkbox filter', async () => {

        await browser.url('https://store.ababahalamaha.com.ua/')

        await MarketPage.clickOnSoonBePublishedLink();
        await expect(browser).toHaveUrl('https://store.ababahalamaha.com.ua/soon-to-be-published')

        await SoonToBePublishedPage.getTextOfHeader(); // У друці
        await SoonToBePublishedPage.clickOnCheckboxForHarryPotterBooks();

        await SoonToBePublishedPage.getTextOfHeader(); //У друці, Серія: Гаррі Поттеp

    });

});