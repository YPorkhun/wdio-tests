class ABTestingPage {

get header() {return $ ('h3')};
get text() {return $('//p[contains(text(), "Also known as split testing")]')}

async checkHeaderDisplayed () {
    await this.header.isDisplayed()
}

async getTextOnPage () {
    console.log(await this.text.getText());
}

}

export default new ABTestingPage ()