
var page = require('../pages/echo-page.js');
var D    = require('../data-provider/configuration-data.js');

describe('Products page functionalities', function () {

    describe('Create', function () {

        it('1. Verify basic tabs', function () {
            page.navigate_to().verify_basic_tabs();
        });
    });
})