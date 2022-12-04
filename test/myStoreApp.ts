import cartPage from "./pageobjects/cart.page";
import checkoutPage from "./pageobjects/checkout.page";
import checkoutOverviewPage from "./pageobjects/checkoutOverview.page";
import completeOrderPage from "./pageobjects/completeOrder.page";
import loginPage from "./pageobjects/login.page";
import page from "./pageobjects/page";
import productPage from "./pageobjects/products.page";

class MyStore {

    currentPage: page

    async login(username: string, password: string) {
        if (! await loginPage.isOpen()) {
            await loginPage.open()
        }
        await loginPage.login(username, password)
        this.currentPage = loginPage
    }

    async addProductToCart(productName: string) {
        if (! await productPage.isOpen()) {
            productPage.open()
        }
        this.currentPage = productPage
        await productPage.addByProductName(productName)
        await productPage.goToShoppingCart()
    }

    async goToCheckout() {
        cartPage.clickOnCheckout()
    }

    async fillCheckoutInfoAndConfirm(name: string, secondName: string, postalCode: string) {
        await checkoutPage.fillAddressAndProceed(name, secondName, postalCode)
    }

    async confirmOrder() {
        await checkoutOverviewPage.confirmOrder()
    }

    async validateProducPageIsProperlyRendered() {
        await expect(productPage.productsPageTitle).toBeExisting()
        await expect(productPage.productsPageTitle).toHaveTextContaining('PRODUCTS')
    }

    async validateTotalPrice(price: string) {
        await expect(checkoutOverviewPage.totalPrice).toHaveTextContaining('Total: $' + price)
    }

    async validateOrderConfirmed() {
        await expect(completeOrderPage.orderCompleteTitle).toHaveTextContaining('THANK YOU FOR YOUR ORDER')
    }

    getCurrentPage() {
        return this.currentPage
    }
}

export default MyStore