class MainPage {

get linkToChecboxPage() {return $ ('//a[@href="/checkboxes"]')};
get linkToDragAndDropPage () {return $('//a[@href="/drag_and_drop"]')};
get linkToABTestingPage () {return $('//a[@href="/abtest"]')};


async clickOnCheckboxesLink () {
    await this.linkToChecboxPage.click()
}

async clickOnDragAndDropLink () {
    await this.linkToDragAndDropPage.click()
}

async clickOnABTestingLink () {
    await this.linkToABTestingPage.click()
}

}

export default new MainPage ()