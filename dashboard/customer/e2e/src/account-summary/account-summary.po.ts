import {browser, by, element, protractor} from 'protractor';

export class AccountSummaryPage {

    navigateTo() {
        return browser.get(browser.baseUrl + '/account-summary') as Promise<any>;
    }


    hasStrongContentOnSummaryPage(contentString) {
        return browser.isElementPresent(by.cssContainingText("strong", contentString));
    }

    clickEmailEdit() {
        element(by.cssContainingText('button', 'Edit Email Address')).click();
    }

    setNewEmailAddress(emailAddress) {
        let emailField = element(by.css('ka-edit-email [type="email"]'));
        emailField.clear();
        return emailField.sendKeys(emailAddress) as Promise<any>;
    }

    setEditEmailPassword(password) {
        let passwordField = element(by.css('ka-edit-email [type="password"]'));
        passwordField.clear();
        return passwordField.sendKeys(password) as Promise<any>;
    }

    clickUpdateEmail() {
        element(by.cssContainingText('button', 'Update email address')).click();
    }


    clickResetPassword() {
        element(by.cssContainingText('button', 'Reset Password')).click();
    }

    confirmReset() {
        browser.switchTo().alert().accept();
    }

    cancelReset() {
        browser.switchTo().alert().dismiss();
    }


    clickMobileEdit() {
        element(by.cssContainingText('button', 'Edit Mobile Number')).click();
    }

    setNewMoblie(phonenumber) {
        let emailField = element(by.css('ka-edit-mobile [type="text"]'));
        emailField.clear();
        return emailField.sendKeys(phonenumber) as Promise<any>;
    }

    setMobilePassword(password) {
        let passwordField = element(by.css('ka-edit-mobile [type="password"]'));
        passwordField.clear();
        return passwordField.sendKeys(password) as Promise<any>;
    }

    clickUpdateMobile() {
        element(by.cssContainingText('button', 'Update mobile number')).click();
    }


    clickBackupEmail() {
        element(by.cssContainingText('button', 'Edit Backup Email Address')).click();
    }

    setBackupEmailAddress(emailAddress) {
        let emailField = element(by.css('ka-edit-backup-email [type="email"]'));
        emailField.clear();
        return emailField.sendKeys(emailAddress) as Promise<any>;
    }

    setBackupEmailPassword(password) {
        let passwordField = element(by.css('ka-edit-backup-email [type="password"]'));
        passwordField.clear();
        return passwordField.sendKeys(password) as Promise<any>;
    }


    clickEnable2FA() {
        element(by.cssContainingText('button', 'Enable 2FA')).click();
    }

    hasErrorText() {
        return browser.isElementPresent(by.css('.error'));
    }

}