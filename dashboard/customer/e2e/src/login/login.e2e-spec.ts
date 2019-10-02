import { LoginPage } from './login.po';
import {browser, by} from "protractor";

describe('Application Global Data Is Correct', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
    });

    it('Should not be able to log in as an invalid user', () => {

        // Navigate to the page
        page.navigateTo();

        // Ensure that there is no error text on the page to start with
        expect(page.hasErrorText()).toEqual(false);

        // Set a bad email, and password and sign in
        page.setEmailAddress("patrick@test.com");
        page.setPassword("password");
        page.clickSignIn();

        // Check that error text is on the page
        expect(page.hasErrorText()).toEqual(true);

    });

    it('Should be able to log in with a valid user', () => {

        // Navigate to the page
        page.navigateTo();

        // Ensure that there is no error text on the page to start with
        expect(page.hasErrorText()).toEqual(false);

        // Set a bad email, and password and sign in
        page.setEmailAddress("sam@samdavisdesign.co.uk");
        page.setPassword("password");
        page.clickSignIn();

        // Check that error text is not on the page
        expect(page.hasErrorText()).toEqual(false);

        expect(browser.isElementPresent(by.cssContainingText("h4", "Mobile Phone Number")));

    });


});
