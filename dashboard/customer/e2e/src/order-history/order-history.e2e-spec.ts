import {browser, by} from "protractor";
import {OrderHistoryPage} from "./order-history.po";
import {LoginPage} from "../login/login.po";
import {TestData} from "../tools/test-data";

describe('Order History Tests', () => {
    let page: OrderHistoryPage;
    let firstTime = true;

    // Make sure we are logged in clean before each test
    beforeEach(() => {

        if (firstTime){
            firstTime = false;
            new TestData().run();
        }

        page = new OrderHistoryPage();

        let loginPage = new LoginPage();

        // Login
        loginPage.validLogin();

        page.navigateTo();
    });


    it('Should be able to navigate to the first existing order and see correct data', () => {

        page.clickOrder(1);

        expect(browser.isElementPresent(by.cssContainingText(".order-details .content div:nth-of-type(1)", "1"))).toBeTruthy();
        expect(browser.isElementPresent(by.cssContainingText(".order-details .content div:nth-of-type(2)", "15/10/19 10:00"))).toBeTruthy();
        expect(browser.isElementPresent(by.cssContainingText(".order-details .content div:nth-of-type(3)", "1 Long Road"))).toBeTruthy();
        expect(browser.isElementPresent(by.cssContainingText(".order-description", "Virtual hosts rented on a monthly basis"))).toBeTruthy();
        expect(browser.isElementPresent(by.cssContainingText("table tbody tr:nth-of-type(3)", "4.20"))).toBeTruthy();
    });

    it('Should be able to navigate to the second existing order and see correct data', () => {

        page.clickOrder(2);

        expect(browser.isElementPresent(by.cssContainingText(".order-details .content div:nth-of-type(1)", "2"))).toBeTruthy();
        expect(browser.isElementPresent(by.cssContainingText(".order-details .content div:nth-of-type(2)", "17/10/19 12:30"))).toBeTruthy();
        expect(browser.isElementPresent(by.cssContainingText(".order-details .content div:nth-of-type(3)", "1 Long Road"))).toBeTruthy();
        expect(browser.isElementPresent(by.cssContainingText(".order-description", "Virtual hosts rented on a monthly basis"))).toBeTruthy();
        expect(browser.isElementPresent(by.cssContainingText("table tbody tr:nth-of-type(3)", "12.00"))).toBeTruthy();
    });


});