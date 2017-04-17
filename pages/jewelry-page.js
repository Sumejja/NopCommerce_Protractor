'use strict';

var EC     = protractor.ExpectedConditions;
var helper = require('../helpers/e2e-helper.js');

// main menu items
var rentalStartDate      = $('#rental_start_date_40');
var rentalEndDate        = $('#rental_end_date_40');
var rentButton           = $('#add-to-cart-button-40');
var totalPrice           = $('.price-value-40');
var quantityInput        = $('.qty-input');
var notificationOnTheTop = $('.bar-notification');
var datePicker           = $('#ui-datepicker-div');
var productName_header   = $('.product-name');


var JewelryPage = function () {


    this.navigate_to = function (startDate) {
        browser.get('http://localhost:29993/elegant-gemstone-necklace-rental');
        return this;
    };

    this.enter_start_date = function (startDate) {
        helper.waitAndEnterValue(rentalStartDate, startDate);
        return this;
    };

    this.enter_end_date = function (endDate) {
        helper.waitAndEnterValue(rentalEndDate, endDate);
        return this;
    };

    this.click_Rent = function () {
        helper.waitAndClick(rentButton);
        return this;
    };

    this.enter_quantity = function (quantity) {
        helper.clearAndEnterValue(quantityInput, quantity);
        return this;
    };

    this.verify_total_price = function (price) {
        helper.verifyText(totalPrice, price);
        return this;
    };

    this.select_day_in_current_month_on_Start_date_picker = function (dayNumber) {
        helper.waitAndClick(rentalStartDate);

        if (dayNumber === '') {
            helper.waitAndClick(productName_header);
        }
        else {
            helper.waitAndClick(datePicker.element(by.linkText(dayNumber)));
        }
        return this;
    };

    this.select_day_in_current_month_on_End_date_picker = function (dayNumber) {
        helper.waitInvisibility(datePicker);
        helper.waitAndClick(rentalEndDate);
        if (dayNumber === '') {
            helper.waitAndClick(productName_header);
        }
        else {
            helper.waitAndClick(datePicker.element(by.linkText(dayNumber)));
        }
        return this;
    };

    this.verify_notification_on_the_top_of_the_page = function (msg) {
        helper.verifyText(notificationOnTheTop, msg);
        return this;
    };

}
module.exports  = new JewelryPage();