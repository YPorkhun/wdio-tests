import { browser, expect } from "@wdio/globals";
import MainPage from "../../pages/MainPage";
import DragAndDropPage from "../../pages/DragAndDropPage";
import CheckboxesPage from "../../pages/CheckboxesPage";
import ABTestingPage from "../../pages/ABTestingPage";



describe('Home Task #4', () => {


    it('Page Object in action', async () => {

        await browser.url('https://the-internet.herokuapp.com/')

        await MainPage.clickOnABTestingLink();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/abtest')

        await ABTestingPage.checkHeaderDisplayed()
        await browser.pause(2000)

        await ABTestingPage.getTextOnPage()
        await browser.pause(2000)
        
    });

});