class MarketPage {

get buttonSignUp() {return $ ('(//span[@class="user-option"])[2]')};
get userName () {return $('#coordinated_name')};
get userSurName () {return $('#coordinated_surname')};
get userEmail () {return $('#coordinated_email')};
get soonBePublishedLink () {return $('//a[@href="/soon-to-be-published"]')}


async clickOnButtonSignUp () {
    await this.buttonSignUp.isFocused()
    await this.buttonSignUp.click();
}

async clickOnSoonBePublishedLink () {
    await this.soonBePublishedLink.click();
}

async enterName (value) {
    await this.userName.setValue(value)
}

async enterSurName (value) {
    await this.userSurName.setValue(value)
}

async enterEmail (value) {
    await this.userEmail.setValue(value)
}

}

export default new MarketPage ()