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


});
