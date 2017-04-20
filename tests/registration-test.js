var page = require('../pages/registration-page.js');
var D    = require('../data-provider/configuration-data.js');
var db   = require('../helpers/database-connection.js');

var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
// This is your api key, make sure you use it in all your tests.
eyes.setApiKey('7db1001alAVkOh3t111FyIQwcbChUwgpzqvsa100TmSRzCSPA110');


describe('Registration page functionalities', function () {

    beforeAll(function () {
        db.countDbRecordsBeforeAction('Select * from Customer');
    });

    fit('1. Visual validation', function () {
        page.navigate_to()

        // Start visual testing with browser viewport set to 1024x768.
        eyes.open(browser, 'Kurs', 'Registration page');

        // Visual validation point #1
        eyes.checkWindow('Registration page- default');

        // End visual testing. Validate visual correctness.
        eyes.close();
    });

    it('2. Verify validation messages when submitting a blank form', function () {
        page.navigate_to()
            .click_Register()
            .verify_all_validation_messages(D.validationMessages_blankForm)
    });

    it('3. Verify client_side validation messages', function () {
        page.navigate_to()
            .enter_all_values_on_form(D.invalidValues1)
            .click_Register()
            .verify_all_validation_messages(D.validationMessages_client_side)
    });

    it('4. Verify server-side validation messages', function () {
        page.navigate_to()
            .enter_all_values_on_form(D.invalidValues2)
            .click_Register()
            .verify_server_side_validation_message('The specified email already exists');
    });

    fit('5. Verify registration with valid values', function () {
        page.navigate_to()
            .enter_all_values_on_form(D.validValues)
            .click_Register()
            .verify_registration_is_completed_successfully()
    });

    fit('6. Verify new user is saved to database', function (done) {
        page.verify_new_user_is_saved_to_database().then(function () {
            done()
        })
    });

})