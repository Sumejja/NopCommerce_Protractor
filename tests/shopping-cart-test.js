var page = require('../pages/shopping-cart-page.js');
var D    = require('../data-provider/configuration-data.js');

describe('Shopping page functionalities', function () {

    fit('1. Verify shopping cart counter', function () {
        page.verify_shopping_cart_counter();

        browser.sleep(5000);
    })
});
