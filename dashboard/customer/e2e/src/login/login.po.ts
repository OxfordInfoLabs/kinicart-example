import {browser, by, element} from 'protractor';

export class LoginPage {

    navigateTo() {
        return browser.get(browser.baseUrl + '/login') as Promise<any>;
    }

    setEmailAddress(emailAddress) {
        let emailField = element(by.css('[name="email"]'));
        emailField.clear();
        return emailField.sendKeys(emailAddress) as Promise<any>;
    }


    setPassword(password) {
        let passwordField = element(by.css('[name="password"]'));
        passwordField.clear();
        return passwordField.sendKeys(password) as Promise<any>;
    }

    hasErrorText() {
        return browser.isElementPresent(by.css('.error'));
    }


    clickSignIn() {
        element(by.cssContainingText('button', 'Sign in')).click();
    }


    // Create a valid login.
    validLogin() {
        this.navigateTo();
        this.setEmailAddress("sam@samdavisdesign.co.uk");
        this.setPassword("password");
        this.clickSignIn();
    }


}