'use strict';

var EC     = protractor.ExpectedConditions;
var helper = require('../helpers/e2e-helper.js');
var menu   = require('../pages/menu.js');
var D      = require('../data-provider/configuration-data.js');

var sortingDropdown              = $('#products-orderby');
var displayDropdown              = $('#products-pagesize');
var productBoxes                 = $$('.product-item');
var categoriesToggle_smallScreen = $('.menu-toggle');

var ComputersPage = function () {

    this.navigate_to = function () {
        browser.get('http://localhost:29993/');

        if (D.selectedVersion === D.versions.mobile || D.selectedVersion === D.versions.desktop_small) {
            helper.waitAndClick(categoriesToggle_smallScreen)
        }
        menu.click_Computers();
        return this;
    };

    this.sort_by = function (sortingCriteria) {
        helper.selectDropdownOption(sortingDropdown, sortingCriteria);
        helper.verifySelectedOptionOnDropdown(sortingDropdown, sortingCriteria)
        return this;
    };

    this.verify_that_sorting_option_works_properly = function (sortedElementsArray) {
        helper.verifyTextOnSequentialFields(productBoxes, sortedElementsArray)
        return this;
    };

    this.getArray = function () {
        var arr    = [
            'someitem1',
            'someitem1',
        ];
        arr.length = 6;

        for (var i = 0; i < arr.length; i++) {
            (function (h) {
                productBoxes.get(h).getText().then(function (text) {
                    arr.push(text);
                    console.log(text)
                });
            })(i);
        }
        return arr
    }

    this.verify_that_sorting_option_works_properly_by_comparing_strigs = function () {


        for (var i = 0; i < this.getArray.length - 1; i++) {
            helper.expect_first_string_to_be_sorted_before_second_string(this.getArray[i + 1], this.getArray[i])
            console.log(i);
            console.log(this.getArray[i]);
            console.log(this.getArray[i + 1]);
        }

    };


}

module.exports = new ComputersPage();