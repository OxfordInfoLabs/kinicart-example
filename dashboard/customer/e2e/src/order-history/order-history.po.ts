import {browser, by, element, protractor} from 'protractor';

export class OrderHistoryPage {

    navigateTo() {
        return browser.get(browser.baseUrl + '/account-summary/order-history') as Promise<any>;
    }

    clickOrder(orderIndex) {
        element(by.css('app-order-history table tbody tr:nth-of-type(' + orderIndex + ') a')).click();
    }

}