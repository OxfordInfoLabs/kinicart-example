import {TestData} from "../framework/test-data";
import {browser} from "protractor";
import {StandardForm} from "../framework/standard-form";

describe('New password tests', () => {

    let firstTime = true;

    beforeEach(() => {

        if (firstTime) {
            firstTime = false;
            new TestData().run();
        }

        browser.get(browser.baseUrl + '/sign-in/new-password');
    });

    it("Should not be able to create new password with blank password", () => {

        // Submit the form.
        StandardForm.submit();

        // Should now be able to see errors on all fields
        expect(StandardForm.hasFieldError("password")).toBeTruthy();
        expect(StandardForm.hasFieldError("confirm")).toBeTruthy();

        expect(StandardForm.getFieldError("password")).toContain("enter a password");
        expect(StandardForm.getFieldError("confirm")).toContain("enter a confirm password");

    });

    it("Should see error message if bad password supplied", () => {

        StandardForm.setFieldValue("password", "ba");
        StandardForm.setFieldValue("confirm", "ba");

        // Submit the form.
        StandardForm.submit();

        browser.sleep(500);

        expect(StandardForm.hasFieldError("password")).toBeTruthy();
        expect(StandardForm.getFieldError("password")).toContain("must be at least 8 characters with one number, one uppercase and one lowercase letter");

    });

    it("Should see error message if passwords don't match", () => {


        StandardForm.setFieldValue("password", "SensiblePW6795");
        StandardForm.setFieldValue("confirm", "This place has shoes, I love shoes, OMG, shoppingshoppingshoppingshoppingshopping");

        // Submit the form.
        StandardForm.submit();

        browser.sleep(500);

        expect(StandardForm.hasFieldError("confirm")).toBeTruthy();
        expect(StandardForm.getFieldError("confirm")).toContain("confirm password must match the new password");


    });

});