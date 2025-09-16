class SoonToBePublishedPage {

get header() {return $ ('//h1[@id="title"]')};
get checkboxHarryPotter() {return $ ('//input[@value="series=115"]')};


async getTextOfHeader () {
    console.log(await this.header.getText())
}

async clickOnCheckboxForHarryPotterBooks () {
    await this.checkboxHarryPotter.click()
}

}

export default new SoonToBePublishedPage ()