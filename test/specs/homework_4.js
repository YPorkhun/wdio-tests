import { browser, expect } from "@wdio/globals";
import MainPage from "../../pages/MainPage";
import DragAndDropPage from "../../pages/DragAndDropPage";
import CheckboxesPage from "../../pages/CheckboxesPage";
import ABTestingPage from "../../pages/ABTestingPage";



describe('Home Task #4', () => {


    xit('Page Object in action 1', async () => {

        await browser.url('https://the-internet.herokuapp.com/')

        await MainPage.clickOnABTestingLink();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/abtest')

        await ABTestingPage.checkHeaderDisplayed()
        await browser.pause(2000)

        await ABTestingPage.getTextOnPage()
        await browser.pause(2000)
        
    });
    xit('Page Object in action 2', async () => {

        await browser.url('https://the-internet.herokuapp.com/')

        await MainPage.clickOnCheckboxesLink();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/checkboxes')

        await CheckboxesPage.clickOnFirstCheckbox();
        await CheckboxesPage.clickOnSecondCheckbox();
        await browser.pause(2000)
        await CheckboxesPage.logCheckboxStates();
        
    });
    xit('Page Object in action 3', async () => {

        await browser.url('https://the-internet.herokuapp.com/')

        await MainPage.clickOnDragAndDropLink();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/drag_and_drop')

        await DragAndDropPage.dragAndDrop();
        await browser.pause(2000)        
    });

});