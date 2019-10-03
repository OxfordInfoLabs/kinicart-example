import {browser, by, element} from 'protractor';

export class AccountSummaryPage {

    navigateTo() {
        return browser.get(browser.baseUrl + '/account-summary') as Promise<any>;
    }


    hasStrongContent(contentString) {
        return browser.isElementPresent(by.cssContainingText("strong", contentString));
    }

    clickEmailEdit() {
        element(by.cssContainingText('button', 'Edit Email Address')).click();
    }

    clickResetPassword() {
        element(by.cssContainingText('button', 'Reset Password')).click();
    }

    clickMobileEdit() {
        element(by.cssContainingText('button', 'Edit Mobile Number')).click();
    }

    clickEnable2FA() {
        element(by.cssContainingText('button', 'Enable 2FA')).click();
    }

}