import {browser, by} from "protractor";
import {AccountSummaryPage} from "./account-summary.po";
import {LoginPage} from "../login/login.po";

describe('Account Summary Tests', () => {
    let page: AccountSummaryPage;

    beforeEach(() => {

        page = new AccountSummaryPage();

        let loginPage = new LoginPage();

        // Login
        loginPage.validLogin();

        page.navigateTo();
    });


    it("Should see logged in data", () => {
        expect(page.hasStrongContent("sam@samdavisdesign.co.uk")).toBeTruthy();
        expect(page.hasStrongContent("07891 147676")).toBeTruthy();
        expect(page.hasStrongContent("samdavis@gmail.com")).toBeTruthy();
    });


    it( "Cannot change email address if invalid password is supplied", () => {
        page.clickEmailEdit();
        page.setNewEmailAddress('burger@chips.pizza');
        page.setEditEmailPassword('How do you do fellow kids? ΩΩΩΩΩΩΩ');
        page.clickUpdateEmail();
        expect(page.hasErrorText()).toBeTruthy();
    });

    it ("Cannot change email address to an invalid email", () => {
        page.clickEmailEdit();
        page.setNewEmailAddress('Call me Ishmail');
        page.setEditEmailPassword('password');
        page.clickUpdateEmail();
        expect(page.hasErrorText()).toBeTruthy();
    })

    it ("Cannot change mobile number if invalid password is supplied", () => {
        page.clickMobileEdit();
        page.setNewMoblie('+44 09543 555540');
        page.setMobilePassword("I'm just a girl who can't say no.");
        page.clickUpdateMobile();
        expect(page.hasErrorText()).toBeTruthy();
    })


});
