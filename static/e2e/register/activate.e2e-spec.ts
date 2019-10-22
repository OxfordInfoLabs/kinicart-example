import {TestData} from "../framework/test-data";
import {browser} from "protractor";
import {StandardForm} from "../framework/standard-form";

describe('Sign in tests', () => {

    let firstTime = true;

    beforeEach(() => {

        if (firstTime){
            firstTime = false;
            new TestData().run();
        }

        browser.get(browser.baseUrl + '/register/activate/');
    });

    it("Should see error message if blank", () => {

        // Submit the form.
        StandardForm.submit();

        expect(StandardForm.hasFieldError("code")).toBeTruthy();
        expect(StandardForm.getFieldError("code")).toContain("activation code is required");


    });

    it("Should see error message if bad code supplied", () => {

        StandardForm.setFieldValue("code", "BEANS BEANS BEANS!");

        // Submit the form.
        StandardForm.submit();

        browser.sleep(500);

        expect(StandardForm.getFieldError("code")).toContain("invalid activation code");

    });

});