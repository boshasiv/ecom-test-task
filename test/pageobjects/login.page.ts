import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * Login page
 */
class LoginPage extends Page {

    pageUrl = '/'

    public get inputUsername() {
        return $('#user-name');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get btnSubmit() {
        return $('#login-button');
    }

    /**
     * Login operation
     */
    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * Opens login page url
     */
    public open() {
        return super.open(this.pageUrl);
    }
}

export default new LoginPage();
