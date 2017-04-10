var EC = protractor.ExpectedConditions;

describe('Registration page functionalites', function () {
    function enter_values_to_all_input_fields(valuesArray) {
        for (var i = 0; i < valuesArray.length; i++) {
            browser.wait(EC.visibilityOf(allInputFields[i]), 15000)
            allInputFields[i].sendKeys(valuesArray[i])
        }
    }

    function verify_values_on_all_input_fields(fieldsArray, valuesArray) {
        for (var i = 0; i < valuesArray.length; i++) {
            expect(fieldsArray[i].getAttribute('value')).toBe(valuesArray[i])
        }
    }

    function verify_all_input_fields_are_blank(fieldsArray) {
        for (var i = 0; i < fieldsArray.length; i++) {
            expect(fieldsArray[i].getText()).toBe('');
        }
    }

    function verify_required_fields(fieldsArray) {
        for (var i = 0; i < fieldsArray.length; i++) {
            expect(fieldsArray[i].getText()).toContain('*');
        }
    }

    function verify_validation_mesages(valuesArray) {
        for (var i = 0; i < valuesArray.length; i++) {
            expect(validationMessages.get(i).getText()).toContain(valuesArray[i]);
        }
    }

    var registerLink               = $('.ico-register');
    var registerButton             = $('#register-button');
    var firstNameInput             = $('#FirstName');
    var lastNameInput              = $('#LastName');
    var companyInput              = $('#Company');
    var emailInput                 = $('#Email');
    var passwordInput              = $('#Password');
    var confirmPasswordInput       = $('#ConfirmPassword');
    var allFields                  = $$('.inputs');
    var validationMessages         = $$('.field-validation-error');
    var existingEmailValidationMsg = $('.validation-summary-errors');

    var allInputFields    = [
        /* 0 */ firstNameInput,
        /* 1 */ lastNameInput,
        /* 2 */ emailInput,
        /* 3 */ companyInput,
        /* 4 */ passwordInput,
        /* 5 */ confirmPasswordInput
    ];
    var allRequiredFields = [
        allFields.get(1),
        allFields.get(2),
        allFields.get(4),
        allFields.get(7),
        allFields.get(8),
    ];
    var allInputValues    = [
        /* 0 */ 'Sumejja',
        /* 1 */ 'Sljivic',
        /* 2 */ 'test@gmail.com',
        /* 3 */ 'Mistral',
        /* 4 */ 'test123',
        /* 5 */ 'test123',
    ];
    var wrongFormatValues = [
        /* 0 */ 'Sumejja',
        /* 1 */ 'Sljivic',
        /* 2 */ 'testgmail.com',
        /* 3 */ 'Mistral',
        /* 4 */ 'test',
        /* 5 */ 'test1',
    ];
    var valuesWithExistingEmail = [
        /* 0 */ 'Sumejja',
        /* 1 */ 'Sljivic',
        /* 2 */ 'sumejjaslj@maestralsolutions.com',
        /* 3 */ 'Mistral',
        /* 4 */ 'test123',
        /* 5 */ 'test123',
    ];

    var requiredFieldsValidationMsgs = [
        'First name is required.',
        'Last name is required.',
        'Email is required.',
        'Password is required.',
        'Password is required.'
    ];
    var clientSideValidationMsgs     = [
        'Wrong email',
        'The password should have at least 6 characters.',
        'The password and confirmation password do not match.',
    ];


    it('1. Verify all fields are blank by default', function () {

        browser.get('http://localhost:29993');
        registerLink.click();

        expect(firstNameInput.getText()).toBe('');
        expect(lastNameInput.getText()).toBe('');
        expect(emailInput.getText()).toBe('');
        expect(companyInput.getText()).toBe('');
        expect(passwordInput.getText()).toBe('');
        expect(confirmPasswordInput.getText()).toBe('');
    })

    it('2. Verify all fields are blank by default - BETTER WAY', function () {

        browser.get('http://localhost:29993');
        registerLink.click();

        verify_all_input_fields_are_blank(allInputFields);
    });

    it('3. Enter values to all input fields', function () {

        browser.get('http://localhost:29993');
        registerLink.click();

        firstNameInput.sendKeys('Sumejja');
        lastNameInput.sendKeys('Sljivic');
        emailInput.sendKeys('test@gmail.com');
        companyInput.sendKeys('Mistral');
        passwordInput.sendKeys('test123');
        confirmPasswordInput.sendKeys('test123');
    })

    it('4. Enter values to all input fields- BETTER WAY', function () {

        browser.get('http://localhost:29993');
        registerLink.click();
        enter_values_to_all_input_fields(allInputValues);

        verify_values_on_all_input_fields(allInputFields, allInputValues);
    });

    it('5. Verify required fields have *', function () {

        browser.get('http://localhost:29993');
        registerLink.click();
        verify_required_fields(allRequiredFields);
        browser.sleep(5000)
    });

    it('6. Verify validation messages for required fields', function () {

        browser.get('http://localhost:29993');
        registerLink.click();
        registerButton.click();

        verify_validation_mesages(requiredFieldsValidationMsgs);
    });

    it('7. Verify validation messages for required fields', function () {

        browser.get('http://localhost:29993');
        registerLink.click();
        enter_values_to_all_input_fields(wrongFormatValues);
        registerButton.click();

        verify_validation_mesages(clientSideValidationMsgs)

    })

    fit('8. Verify server side validation messages', function () {

        browser.get('http://localhost:29993');
        registerLink.click();

        browser.debugger();
        enter_values_to_all_input_fields(valuesWithExistingEmail);
        registerButton.click();

        browser.wait(EC.presenceOf(existingEmailValidationMsg), 15000);
        expect(existingEmailValidationMsg.getText()).toBe('The specified email already exists');

    })
});