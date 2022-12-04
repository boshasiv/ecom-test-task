import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * Products page
 */
class ProductsPage extends Page {

    protected pageUrl = '/inventory.html'
    /**
     * define selectors using getter methods
     */
    public get productsPageTitle() {
        return $('.title');
    }

    public get productTiles() {
        return $('.inventory_item');
    }

    public get productNames() {
        return $$('.inventory_item .inventory_item_name');
    }

    public get shoppingCart() {
        return $('.shopping_cart_link')
    }

    productByName(name: string) {
        return $(`//div[@class="inventory_item"]//div[contains(., "${name}")]`)
    }

    async addByProductName(name: string) {
        await this.productByName(name).$('.btn_inventory').click()
    }

    async goToShoppingCart() {
        await this.shoppingCart.click()
    }
    /**
    * Opens product page url
    */
    public open() {
        return super.open(this.pageUrl);
    }
}

export default new ProductsPage();
