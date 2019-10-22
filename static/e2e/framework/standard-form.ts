/**
 * Generic forms logic
 */
import {by, element} from "protractor";

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
        return element(by.css('[data-' + fieldKey + '-error]')).isDisplayed();
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
        try {
            return element(by.css('ka-recaptcha')).isDisplayed();
        } catch (e) {
            return false;
        }
    }


    /**
     * Complete the captcha
     */
    public static completeCaptcha() {

    }


    /**
     * Submit a form using the submit button.
     */
    public static submit() {
        let submitButton = element(by.css('[type="submit"]'));
        submitButton.click();
    }


}
