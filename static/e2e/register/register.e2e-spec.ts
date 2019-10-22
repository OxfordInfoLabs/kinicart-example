import {TestData} from "../framework/test-data";
import {browser} from "protractor";
import {StandardForm} from "../framework/standard-form";


describe('Register tests', () => {

    let firstTime = true;

    beforeEach(() => {

        if (firstTime){
            firstTime = false;
            new TestData().run();
        }

        browser.get(browser.baseUrl + '/register');
    });



    it("Should not be able to login with blank email, company and password", () => {


        // captcha initially
        expect(StandardForm.isCaptchaVisible()).toBeTruthy();

        // Submit the form.
        StandardForm.submit();

        // Should now be able to see errors on all fields
        expect(StandardForm.hasFieldError("email")).toBeTruthy();
        expect(StandardForm.hasFieldError("name")).toBeTruthy();
        expect(StandardForm.hasFieldError("password")).toBeTruthy();

        expect(StandardForm.getFieldError("email")).toContain("email address is required");
        expect(StandardForm.getFieldError("name")).toContain("account name is required");
        expect(StandardForm.getFieldError("password")).toContain("password is required");
        expect(StandardForm.hasFieldError("recaptcha")).toBeTruthy();

    });

    it("Should see error message if bad password supplied", () => {

        expect(StandardForm.isCaptchaVisible()).toBeTruthy();

        // Set bad code
        StandardForm.setFieldValue("email", "sushizey@teppanyaki.eu");
        StandardForm.setFieldValue("email", "x");
        StandardForm.setFieldValue("email", "must be at least 8 characters with one number, one uppercase and one lowercase letter");

        // Complete captcha
        StandardForm.completeCaptcha();

        // Submit the form.
        StandardForm.submit();

        browser.sleep(1000);

        expect(StandardForm.getFieldError("password")).toContain("password is required");

    });

});

