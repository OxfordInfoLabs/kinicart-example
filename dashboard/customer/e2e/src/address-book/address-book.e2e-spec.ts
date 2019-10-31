import {AddressBookPage} from "./address-book.po";
import {TestData} from "../tools/test-data";
import {LoginPage} from "../login/login.po";
import {browser, by} from "protractor";

describe('Account Summary Tests', () => {
    let page: AddressBookPage;
    let firstTime = true;

    // Make sure we are logged in clean before each test
    beforeEach(() => {

        if (firstTime) {
            firstTime = false;
            new TestData().run();
        }

        page = new AddressBookPage();

        let loginPage = new LoginPage();

        // Login
        loginPage.validLogin();

        page.navigateTo();
    });


    it("Should see new contact link", () => {
        expect(browser.isElementPresent(by.cssContainingText("span", "New Contact"))).toBeTruthy();
    });


    it("Cannot create new contact with empty mandatory fields", () => {
        page.clickNewContact();
        expect(page.getSaveChangesEnabled()).toBeFalsy();
        });

    it("Cannot create new contact with 5 missing mandatory fields", () => {
        page.clickNewContact();
        page.setFullName("Ivo Robotnik");
        expect(page.getSaveChangesEnabled()).toBeFalsy();
    });

    it("Cannot create new contact with 4 missing mandatory fields", () => {
        page.clickNewContact();
        page.setFullName("Ivo Robotnik");
        page.setAddress1("52 Well Lane");
        expect(page.getSaveChangesEnabled()).toBeFalsy();
    });

    it("Cannot create new contact with 3 missing mandatory fields", () => {
        page.clickNewContact();
        page.setFullName("Ivo Robotnik");
        page.setAddress1("52 Well Lane");
        page.setTownCity("Patmore Heath");
        expect(page.getSaveChangesEnabled()).toBeFalsy();
    });

    it("Cannot create new contact with 2 missing mandatory fields", () => {
        page.clickNewContact();
        page.setFullName("Ivo Robotnik");
        page.setAddress1("52 Well Lane");
        page.setTownCity("Patmore Heath");
        page.setCounty("Fridge");
        expect(page.getSaveChangesEnabled()).toBeFalsy();
    });

    it("Cannot create new contact with 1 missing mandatory field", () => {
        page.clickNewContact();
        page.setFullName("Ivo Robotnik");
        page.setAddress1("52 Well Lane");
        page.setTownCity("Patmore Heath");
        page.setCounty("Fridge");
        page.setPostCode("SG11 7ZB");
        expect(page.getSaveChangesEnabled()).toBeFalsy();
    });

    it("Should create new contact with all essential fields filled in", () => {
        page.clickNewContact();
        page.setFullName("Ivo Robotnik");
        page.setAddress1("52 Well Lane");
        page.setTownCity("Patmore Heath");
        page.setCounty("Fridge");
        page.setPostCode("SG11 7ZB");
        page.setCountry("Heard Island");
        expect(page.getSaveChangesEnabled()).toBeTruthy();
        // page.clickSaveChanges();
    })

});