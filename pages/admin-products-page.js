'use strict';

var EC     = protractor.ExpectedConditions;
var helper = require('../helpers/e2e-helper.js');
var D = require('../data-provider/configuration-data.js');
var menu   = require('../pages/menu.js');

var addNew_button                 = $('.fa-plus-square');
var addNew_buttons                 = $$('.fa-plus-square');
var tabsContainer_onAddNewProduct = $('.nav-tabs');
var SEO_tab                       = $('[data-tab-name="tab-seo"]');
var catalog_menuItem              = $('.fa-book');
var products_submenuItem          = $('[href="/Admin/Product/List"]');
var advancedBasicSwitch           = $('.onoffswitch-label');
var mainContainer                 = $('.skin-blue');
var menuToggleButton_mob = $('.sidebar-toggle');


var AdminProductsPage = function () {

    this.turn_on_Basic_mode = function () {
        helper.hasClass(mainContainer, 'advanced-settings-mode').then(function (isClassPresent) {
            if(isClassPresent === true) {
                helper.waitAndClick(advancedBasicSwitch);
            }
        });
        return this;
    };

    this.click_Basic_Advanced_switch = function () {
        helper.waitAndClick(advancedBasicSwitch);
        return this;
    }


    this.verify_tabs_on_Basic_mode = function (valuesArray) {
        helper.waitVisibility(tabsContainer_onAddNewProduct);

        for (var i = 0; i < valuesArray.length; i++) {
            expect(tabsContainer_onAddNewProduct.getText()).toContain(valuesArray[i]);
        }
        expect(SEO_tab.isDisplayed()).toBe(false);
        return this;
    };

    this.navigate_to_Add_New_Product_page = function () {
        if (D.isMobile() || D.isDesktop_SmallSize()) {
            helper.waitAndClick(menuToggleButton_mob);
        }
        helper.waitAndClick(catalog_menuItem);
        helper.waitAndClick(products_submenuItem);
        helper.waitAndClick(addNew_button);
        return this;
    }
};


module.exports = new AdminProductsPage();

