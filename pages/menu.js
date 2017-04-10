'use strict';

var EC     = protractor.ExpectedConditions;
var helper = require('../helpers/e2e-helper.js');
var D      = require('../data-provider/configuration-data.js');

// main menu items
var computers        = $$('[href="/computers"]').get(0);
var computers_mob    = $$('[href="/computers"]').get(1);
var electronics      = $$('[href="/electronics"]').get(0);
var apparel          = $$('[href="/apparel"]').get(0);
var digitalDownloads = $$('[href="/digital-downloads"]').get(0);
var books            = $$('[href="/books"]').get(0);
var jewelry          = $$('[href="/jewelry"]').get(0);
var giftCards        = $$('[href="/gift-cards"]').get(0);

// submenu items
var desktops    = $$('[href="/desktops"]').get(0);
var notebooks   = $$('[href="/notebooks"]').get(0);
var software    = $$('[href="/software"]').get(0);
var cameraPhoto = $$('[href="/camera-photo"]').get(0);
var cellphones  = $$('[href="/cell-phones"]').get(0);
var others      = $$('[href="/others"]').get(0);
var shoes       = $$('[href="/shoes"]').get(0);
var clothing    = $$('[href="/clothing"]').get(0);
var asseccories = $$('[href="/asseccories"]').get(0);


var Menu       = function () {

    this.click_Computers = function () {
        if (D.isMobile() || D.isDesktop_SmallSize()) {
            computers = computers_mob;
        }
        helper.waitAndClick(computers);
    };

    this.click_Electronics = function () {
        helper.waitAndClick(electronics);
    };

    this.click_Apparel = function () {
        helper.waitAndClick(apparel);
    };

    this.click_Digital_Downloads = function () {
        helper.waitAndClick(digitalDownloads);
    };

    this.click_Books = function () {
        helper.waitAndClick(books);
    };

    this.click_Jewlery = function () {
        helper.waitAndClick(jewelry);
    };

    this.click_Gift_Cards = function () {
        helper.waitAndClick(giftCards);
    };

    this.click_Desktops = function () {
        helper.hoverAndClick(computers, desktops);
    };

    this.click_Notebooks = function () {
        helper.hoverAndClick(computers, notebooks);
    };

    this.click_Software = function () {
        helper.hoverAndClick(computers, software);
    };

}
module.exports = new Menu();