import {browser, by, element, protractor} from 'protractor';

export class AddressBookPage {

    navigateTo() {
        return browser.get(browser.baseUrl + '/account-summary/address-book') as Promise<any>;
    }


    clickNewContact() {
        element(by.cssContainingText('span', 'New Contact')).click();
    }


    getSaveChangesEnabled(){
        return element(by.cssContainingText('button', 'SAVE CHANGES')).isEnabled();
    }

    setFullName(fullName) {
        let fullnameField = element(by.css('input[name="name"]'));
        fullnameField.clear();
        return fullnameField.sendKeys(fullName) as Promise<any>;
    }

    setAddress1(addressStreet1) {
        let addressStreet1Field = element(by.css('input[name="addressStreet1"]'));
        addressStreet1Field.clear();
        return addressStreet1Field.sendKeys(addressStreet1) as Promise<any>;
    }

    setTownCity(townCity) {
        let addressCityField = element(by.css('input[name="addressCity"]'));
        addressCityField.clear();
        return addressCityField.sendKeys(townCity) as Promise<any>;
    }

    setCounty(addressCounty) {
        let addressCountyField = element(by.css('input[name="addressCounty"]'));
        addressCountyField.clear();
        return addressCountyField.sendKeys(addressCounty) as Promise<any>;
    }

    setPostCode(postCode) {
        let addressPostcodeField = element(by.css('input[name="postcode"]'));
        addressPostcodeField.clear();
        return addressPostcodeField.sendKeys(postCode) as Promise<any>;
    }



    clickSaveChanges() {
        element(by.cssContainingText('button', 'SAVE CHANGES')).click();
    }



}