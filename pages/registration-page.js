'use strict';

var helper = require('../helpers/e2e-helper.js');
var db   = require('../helpers/database-connection.js');


var firstName         = $('#FirstName');
var lastName          = $('#LastName');
var email             = $('#Email');
var company           = $('#Company');
var password          = $('#Password');
var maleRadioButton   = $('#gender-male');
var femaleRadioButton = $('#gender-female');
var confirmPass       = $('#ConfirmPassword');
var dateOfBirthDay    = $('[name="DateOfBirthDay"]');
var dateOfBirthMonth  = $('[name="DateOfBirthMonth"]');
var dateOfBirthYear   = $('[name="DateOfBirthYear"]');

var registerLink   = $('.ico-register');
var registerButton = $('#register-button');
var validationErrors = $$('.field-validation-error');
var registrationCompletedMsg = $('.result');
var serverValidationError = $('.message-error');


var allInputFields = [
    firstName,
    lastName,
    email,
    company,
    password,
    confirmPass
];

var inputWrappers = $$('.inputs');

var requiredFields = [
    inputWrappers.get(1),
    inputWrappers.get(2),
    inputWrappers.get(4),
    inputWrappers.get(7),
    inputWrappers.get(8),
];


var RegistrationPage = function () {

this.registerButton = registerButton;

    this.navigate_to = function () {
        browser.get('http://localhost:29993/');
        helper.waitAndClick(registerLink)
        return this;
    };

    this.click_Male_radio_button = function () {
        maleRadioButton.click();
    };

    this.is_female_radio_button_selected = function (trueOrFalse) {
        expect(femaleRadioButton.isSelected()).toBe(trueOrFalse);
    };


    this.is_male_radio_button_selected = function (trueOrFalse) {
        expect(maleRadioButton.isSelected()).toBe(trueOrFalse);
    };

    this.verify_all_input_fields_are_blank = function () {
        helper.verifyAllInputFieldsAreBlank(allInputFields );
    };


    this.verifyRequiredFields = function (fieldsArray) {
        for (var i = 0; i < fieldsArray.length; i++) {
            expect(fieldsArray[i].getText()).toContain('*');
        }
    };

    this.click_Register = function () {
        helper.scrollAndClick(registerButton);
        return this;
    };

    this.verify_registration_is_completed_successfully = function () {
        helper.verifyText(registrationCompletedMsg, 'Your registration completed')
        return this;
    };

    this.verify_all_validation_messages = function (messages) {
        helper.verifyTextOnSequentialFields(validationErrors, messages)
        return this;
    };

    this.verify_new_user_is_saved_to_database = function () {
        db.verify_number_of_records_is_increased_by_1(registrationCompletedMsg, 'Select * from Customer');
        return browser.getCurrentUrl();
    };

    this.verify_server_side_validation_message = function (message) {
        helper.verifyText(serverValidationError, message);
        return this;
    };


    this.enter_all_values_on_form = function (allInputValues) {
        helper.selectDropdownOption(dateOfBirthDay, allInputValues[6]);
        helper.selectDropdownOption(dateOfBirthMonth, allInputValues[7]);
        helper.selectDropdownOption(dateOfBirthYear, allInputValues[8]);
        helper.clearAndEnterValuesToAllInputFields(allInputFields, allInputValues);
        return this;

    };



}
module.exports       = new RegistrationPage();