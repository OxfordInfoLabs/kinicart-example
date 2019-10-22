import {TestData} from "../framework/test-data";
import {browser} from "protractor";
import {StandardForm} from "../framework/standard-form";

describe('Password reset tests', () => {

    let firstTime = true;

    beforeEach(() => {

        if (firstTime){
            firstTime = false;
            new TestData().run();
        }

        browser.get(browser.baseUrl + '/sign-in/password-reset');
    });

    it("Should see error message if blank", () => {

        // Submit the form.
        StandardForm.submit();

        expect(StandardForm.hasFieldError("email")).toBeTruthy();
        expect(StandardForm.getFieldError("email")).toContain("must supply an email address");


    });

});