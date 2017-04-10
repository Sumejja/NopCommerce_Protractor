'use strict';

var EC     = protractor.ExpectedConditions;
var helper = require('../helpers/e2e-helper.js');

var emailInputField = $('[name=Email]');
var passwordInputFiled = $('#Password');
var loginButton = $('.login-button');

var menu = $('.fa-book');
var menu_product = $('[href="/Admin/Product/List"]');
var new_product = $('[href="/Admin/Product/Create"]');

var product_inf = $('[href="#tab-info"]');
var pictures = $('[href="#tab-pictures"]');
var product_attributes = $('[href="#tab-product-attributes"]');
var specification_attributes = $('[href="#tab-specification-attributes"]');

var tabs = [
    product_inf,
    pictures,
    product_attributes,
    specification_attributes
];

var results = [
    'Product info.....',
    'Pictures.....',
    'Product attributes.....',
    'Specification attributes.....',
];

var seo = $('[href="#tab-seo"]');

var ProductsPage = function () {

    this.login = function () {
        browser.get('http://localhost:29993/admin');
        emailInputField.sendKeys('sumejjaslj@maestralsolutions.com');
        passwordInputFiled.sendKeys('test');
        loginButton.click();
    };

    this.go_to_crate_page = function () {
        helper.waitAndClick(menu);
        helper.waitAndClick(menu_product);
        helper.waitAndClick(new_product);

    };

    this.navigate_to = function () {
        this.login();
        this.go_to_crate_page();
        return this;
    };

    this.verify_basic_tabs = function () {
        for(var i = 0; i < tabs.length; i++){
            expect(tabs[i].getText()).toBe(results[i]);
        }
        helper.waitPresence(seo);
        helper.verifyElementIsNotVisible(seo);
    };
}

module.exports    = new ProductsPage();