class CheckboxesPage {

get checkbox_1() {return $ ('//form//input[1]')};
get checkbox_2() {return $ ('//form//input[2]')};


async clickOnFirstCheckbox () {
    await this.checkbox_1.click()
}

async clickOnSecondCheckbox () {
    await this.checkbox_2.click()
}

async logCheckboxStates() {
    const isFirstChecked = await this.checkbox_1.isSelected();
    const isSecondChecked = await this.checkbox_2.isSelected();

    console.log(`Checkbox 1 is selected: ${isFirstChecked}`);
    console.log(`Checkbox 2 is selected: ${isSecondChecked}`);
    }

}

export default new CheckboxesPage ()