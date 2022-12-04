import Page from "./page";

class CheckoutPage extends Page {

    public get pageTitle() {
        return $('.title')
    }

    public get firstName() {
        return $('#first-name')
    }

    public get lastName() {
        return $('#last-name')
    }

    public get postalCode() {
        return $('#postal-code')
    }

    public get continueButton() {
        return $('#continue')
    }

    public async fillAddressAndProceed(firstName: string, lastName: string, postalCode: string) {
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.postalCode.setValue(postalCode)
        await this.continueButton.click()
    }
}

export default new CheckoutPage()