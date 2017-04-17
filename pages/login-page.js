'use strict';

var EC     = protractor.ExpectedConditions;
var helper = require('../helpers/e2e-helper.js');
var D = require('../data-provider/configuration-data.js');

var emailInputField    = $('#Email');
var passwordInputField = $('#Password');
var loginButton        = $('.login-button');

var LoginPage = function () {

    this.log_in_as_admin = function () {
        browser.get('http://localhost:29993/admin');
       /* if (D.selectedBrowser === 'Edge') {
            helper.waitAndEnterValue(emailInputField, 'sumejjaslj@maestralsolutions.com');
        }
        else {*/
            helper.waitAndEnterValue(emailInputField, 'sumejjaslj@maestralsolutions.com');
       // }
        helper.waitAndEnterValue(passwordInputField, 'test');
        loginButton.click();
        return this;
    }
};

module.exports = new LoginPage();

