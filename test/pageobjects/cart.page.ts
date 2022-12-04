import Page from "./page";

class CartPage extends Page {
    protected pageUrl = '/cart.html'

    public get cartTitle() {
        return $('.title')
    }

    public get checkoutButton() {
        return $('#checkout')
    }

    public async clickOnCheckout() {
        await this.checkoutButton.click()
    }

}

export default new CartPage()