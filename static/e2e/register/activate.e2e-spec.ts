import {TestData} from "../framework/test-data";
import {browser} from "protractor";
import {StandardForm} from "../framework/standard-form";

describe('Sign in tests', () => {

    let firstTime = true;

    beforeEach(() => {

        if (firstTime) {
            firstTime = false;
            new TestData().run();
        }

        browser.get(browser.baseUrl + '/register/activate/');
    });

    it("Should see error message if blank", () => {

        expect(StandardForm.isCaptchaVisible()).toBeTruthy();

        // Submit the form.
        StandardForm.submit();

        expect(StandardForm.hasFieldError("code")).toBeTruthy();
        expect(StandardForm.getFieldError("code")).toContain("activation code is required");
        expect(StandardForm.hasFieldError("recaptcha")).toBeTruthy();


    });

    it("Should see error message if bad code supplied", () => {

        expect(StandardForm.isCaptchaVisible()).toBeTruthy();

        // Set bad code
        StandardForm.setFieldValue("code", "BEANS BEANS BEANS!");

        // Complete captcha
        StandardForm.completeCaptcha();

        // Submit the form.
        StandardForm.submit();

        browser.sleep(1000);


        expect(StandardForm.getFieldError("code")).toContain("Invalid activation code");

    });

});