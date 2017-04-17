'use strict';

var using = require('jasmine-data-provider');
var page  = require('../pages/jewelry-page.js');
var D     = require('../data-provider/configuration-data.js');

fdescribe(D.selectedBrowser + ' / ' + D.selectedVersion + ' --> Jewelry page', function () {

    beforeEach (function () {
        page.navigate_to()
    });

    if (!D.isMobile()) {
        using(D.rentFuncinalityValidation_Desktop, function (data, description) {
            it(' ~ Verify validation messages for Renting functionality --> ' + description, function () {
                page.enter_start_date(data.startDate)
                    .enter_end_date(data.endDate)
                    .enter_quantity(data.quantity)
                    .verify_total_price(data.totalPrice)
                    .click_Rent()
                    .verify_notification_on_the_top_of_the_page(data.notification)
            });
        });
    }


  if (D.isMobile()) {
      using(D.rentFuncinalityValidation_Mob, function (data, description) {
          it(D.selectedVersion + ' ~ Verify validation messages for Renting functionality --> ' + description, function () {
              page.select_day_in_current_month_on_Start_date_picker(data.startDateNumber)
                  .select_day_in_current_month_on_End_date_picker(data.endDateNumber)
                  .enter_quantity(data.quantity)
                  .click_Rent()
                  .verify_notification_on_the_top_of_the_page(data.notification)
                  .verify_total_price(data.totalPrice)

          });
      });
  }

    if (D.selectedBrowser !== 'FIREFOX') {
        it('Verify functionality of date picker', function () {

            page.select_day_in_current_month_on_Start_date_picker('25')
                .select_day_in_current_month_on_End_date_picker('27')
                .click_Rent()
                .verify_notification_on_the_top_of_the_page(D.successNotification_shoppingCart)
                .verify_total_price('$60.00')

        });
    }
});
