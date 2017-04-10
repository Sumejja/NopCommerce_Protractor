var page = require('../pages/computers-page.js');
var D    = require('../data-provider/configuration-data.js');

describe(D.selectedVersion + ' --> Computers page functionalities', function () {

    describe('Sorting', function () {

        it('1. Verify that sorting by "Name A to Z" works properly', function () {
            page.navigate_to()
                .sort_by(D.sortingOptions.name_A_to_Z)
                .verify_that_sorting_option_works_properly(D.valuesSortedByName_A_to_Z);
        });
        it('2. Verify that sorting by "Name Z to A" works properly', function () {
            page.navigate_to()
                .sort_by(D.sortingOptions.name_Z_to_A)
                .verify_that_sorting_option_works_properly(D.valuesSortedByName_Z_to_A);
        });
        it('3. Verify that sorting by "Position" works properly', function () {
            page.navigate_to()
                .sort_by(D.sortingOptions.position)
                .verify_that_sorting_option_works_properly(D.valuesSortedByName_A_to_Z); // values sorted by 'position' === values sorted by 'name_A_to_Z'
        });
        it('4. Verify that sorting by "Price: Low to High" works properly', function () {
            page.navigate_to()
                .sort_by(D.sortingOptions.price_low_to_high)
                .verify_that_sorting_option_works_properly(D.valuesSortedByPrice_Low_to_high);
        });
        it('5. Verify that sorting by "Price: High to Low" works properly', function () {
            page.navigate_to()
                .sort_by(D.sortingOptions.price_high_to_low)
                .verify_that_sorting_option_works_properly(D.valuesSortedByPrice_High_to_Low);
        });

    });
})