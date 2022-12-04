import Page from "./page";

class CheckoutOverviewPage extends Page {
    public get pageTitle() {
        return $('.title')
    }

    public get totalPrice() {
        return $('.summary_total_label')
    }

    public get confirmOrderButton() {
        return $('#finish')
    }

    async confirmOrder() {
        await this.confirmOrderButton.click()
    }

}

export default new CheckoutOverviewPage()