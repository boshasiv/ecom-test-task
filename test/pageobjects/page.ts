/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    protected pageUrl = '/'

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string) {
        return browser.url(this.pageUrl)
    }

    async isOpen() {
        return await browser.getUrl() === browser.options.baseUrl + this.pageUrl
    }
}
