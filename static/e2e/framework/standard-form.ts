/**
 * Generic forms logic
 */
import {browser, by, element, protractor} from "protractor";
import {until} from "selenium-webdriver";

export class StandardForm {


    /**
     * Set a form field value
     *
     * @param fieldKey
     * @param fieldValue
     */
    public static setFieldValue(fieldKey, fieldValue) {
        let field = element(by.css('[data-' + fieldKey + '-field]'));
        field.clear();
        return field.sendKeys(fieldValue) as Promise<any>;
    }


    /**
     * Check whether a field has an error or not.
     *
     * @param fieldKey
     */
    public static hasFieldError(fieldKey) {

        var displayed = false;
        var runs = 0;
        while (!(displayed = element(by.css('[data-' + fieldKey + '-error]')).isDisplayed() && runs < 5)) {
            browser.sleep(100);
            runs++;
        }
        return displayed;
    }


    /**
     * Get the field error text
     *
     * @param fieldKey
     */
    public static getFieldError(fieldKey) {
        return element(by.css('[data-' + fieldKey + '-error]')).getText();
    }


    /**
     * Boolean indicator for captcha visible
     */
    public static isCaptchaVisible() {

        var until = protractor.ExpectedConditions;

        browser.wait(until.presenceOf(element(by.css('ka-recaptcha iframe'))));

        return element(by.css('ka-recaptcha iframe')).isDisplayed()

    }


    /**
     * Complete the captcha
     */
    public static completeCaptcha() {

        // Switch to the iframe
        let iframe = browser.driver.findElement(by.tagName("iframe"));
        browser.switchTo().frame(iframe);

        element(by.css(".recaptcha-checkbox")).click();

        // Switch back
        browser.switchTo().defaultContent();

        // Wait a second
        browser.sleep(1000);


    }


    /**
     * Submit a form using the submit button.
     */
    public static submit() {
        let submitButton = element(by.css('[type="submit"]'));
        submitButton.click();

    }


}
