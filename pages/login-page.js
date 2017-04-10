'use strict';

var EC     = protractor.ExpectedConditions;
var helper = require('../helpers/e2e-helper.js');

var emailInputField    = $('#Email');
var passwordInputField = $('#Password');
var loginButton        = $('.login-button');

var LoginPage = function () {

    this.log_in_as_admin = function () {
        browser.get('http://localhost:29993/admin');
        helper.waitAndEnterValue(emailInputField, 'sumejjaslj@maestralsolutions.com');
        helper.waitAndEnterValue(passwordInputField, 'test');
        loginButton.click();
        return this;
    }
};

module.exports = new LoginPage();

