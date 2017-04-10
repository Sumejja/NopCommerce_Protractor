'use strict';

var EC     = protractor.ExpectedConditions;
var helper = require('../helpers/e2e-helper.js');
var D      = require('../data-provider/configuration-data.js');
var menu   = require('../pages/menu.js');

var productNameInput      = $('[data-val-required="Please provide a name."]');
var saveAndContinueButton = $('[name="save-continue"]');
var picturesTab           = $('[href="#tab-pictures"]');
var uploadedImage         = $('.uploaded-image');


var Admin_CreateProduct_Page = function () {

    this.enter_random_product_name = function () {
        helper.waitAndEnterValue(productNameInput, D.randomProductName);
        return this;
    };

    this.click_Save_and_Continue_Edit = function () {
        helper.waitAndClick(saveAndContinueButton);
        return this;
    };

    this.select_Pictures_tab = function () {
        helper.waitAndClick(picturesTab);
        return this;
    };

    this.upload_file = function () {
        helper.uploadFile('watch.jpg', 2);
        return this;
    };

};


module.exports = new Admin_CreateProduct_Page();

