import {StandardForm} from "../framework/standard-form";
import {browser} from "protractor";
import {TestData} from "../framework/test-data";


describe('Sign in tests', () => {

    let firstTime = true;

    beforeEach(() => {

        if (firstTime) {
            firstTime = false;
            new TestData().run();
        }

        browser.get(browser.baseUrl + '/sign-in');
    });


    it("Should not be able to login with blank email and password", () => {


        // Submit the form.
        StandardForm.submit();

        // Should now be able to see errors on both fields
        expect(StandardForm.hasFieldError("email")).toBeTruthy();
        expect(StandardForm.hasFieldError("password")).toBeTruthy();

        expect(StandardForm.getFieldError("email")).toContain("email address is required");
        expect(StandardForm.getFieldError("password")).toContain("password is required");


    });


    it("Should see error message and captcha if bad credentials supplied", () => {


        StandardForm.setFieldValue("email", "mark@test.com");
        StandardForm.setFieldValue("password", "badpassword");

        // Submit the form.
        StandardForm.submit();

        browser.sleep(500);

        expect(StandardForm.hasFieldError("password")).toBeTruthy();
        expect(StandardForm.getFieldError("password")).toContain("username or password supplied was invalid");

        // Expect captcha to be visible
        expect(StandardForm.isCaptchaVisible()).toBeTruthy();

    });


});
