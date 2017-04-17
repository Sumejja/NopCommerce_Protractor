var page          = require('../pages/admin-products-page.js');
var createProduct = require('../pages/admin-createProduct-page.js');
var loginPage     = require('../pages/login-page.js');
var D             = require('../data-provider/configuration-data.js');

describe( D.selectedVersion +  ' / ADMIN --> Products', function () {

    beforeAll (function() {
        loginPage.log_in_as_admin();
        page.navigate_to_Add_New_Product_page()
    });

    it('1. Verify "Basic" tabs on "Add new product" page', function () {

        page.turn_on_Basic_mode()
            .verify_tabs_on_Basic_mode(D.admin_tabs_basicMode)
    });

    it('2. Verify that product with picture can be saved successfully', function () {
        createProduct.enter_random_product_name()
            .click_Save_and_Continue_Edit()
            .select_Pictures_tab()
            .upload_file();

    })
});
