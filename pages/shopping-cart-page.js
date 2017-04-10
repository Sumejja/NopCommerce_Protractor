'use strict';

var EC     = protractor.ExpectedConditions;
var helper = require('../helpers/e2e-helper.js');
var D = require('../data-provider/configuration-data.js');
var menu   = require('../pages/menu.js');

//var shoppingCartLink    = $('.header-upper').$('.header-links-wrapper').$('#topcartlink').element(by.tagName('a'));
var shoppingCartLink         = element(by.xpath("//" + 'span' + "[contains(text(), '" + 'Shopping cart' + "')]"));
var shoppingCartCounter      = $('#topcartlink').all(by.tagName('span')).get(1);
var addToCartButton          = $('[value="Add to cart"][data-productid="25"]');
var xButtonOnBarNotification = $('#bar-notification').$('[title="Close"]');


var ShoppingCartPage = function () {

    this.verify_shopping_cart_counter = function () {
        browser.get('http://localhost:29993/adidas-consortium-campus-80s-running-shoes');
        helper.waitAndClick(addToCartButton);
        helper.waitAndClick(xButtonOnBarNotification);
        helper.verifyText(shoppingCartCounter, '(1)');

        browser.sleep(5000)
        shoppingCartLink.click();
    }
};

module.exports = new ShoppingCartPage();

