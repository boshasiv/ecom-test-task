import MyStore from '../myStoreApp'

describe('My shopping web app', () => {
    it('should login with valid credentials', async () => {
        const store = new MyStore()
        await store.login('standard_user', 'secret_sauce')
        await store.validateProducPageIsProperlyRendered()
    })

    it('should successfully checkout 1 product', async () => {
        const store = new MyStore()
        await store.login('standard_user', 'secret_sauce')
        await store.addProductToCart('Sauce Labs Backpack')
        await store.goToCheckout()
        await store.fillCheckoutInfoAndConfirm('john', 'doe', '10000')
        await store.validateTotalPrice('32.39')
        await store.confirmOrder()
        await store.validateOrderConfirmed()
    })
})


