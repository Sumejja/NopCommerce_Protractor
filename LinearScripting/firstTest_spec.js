xdescribe('Login functionality', function () {

    it('1. Verify Login page content', function () {


        //var h1Header = element(by.tagName('h1'));
        var h1Header = $('.page-title');
        //var logo = element(by.tagName('img'));
        var logo = $('[src="http://localhost:29993/Themes/DefaultClean/Content/images/logo.png"]');
        //var searchInput = $('#small-searchterms');
        var searchInput = $('[placeholder="Search store"]');
        var searchButton = $('.search-box-button');


        browser.get('http://localhost:29993/login');
        expect(logo.isPresent()).toBe(true);
        expect(searchButton.isPresent()).toBe(true);
        expect(searchInput.isPresent()).toBe(true);
        expect(h1Header.getText()).toBe('Welcome, Please Sign In!');


    });

    it('2. Verify user can log in with valid credentials', function () {

        // TRIPLE A
        // ARRANGE
        // ACT
        // ASSERT

        // ARRANGE
        //var loginLink = element(by.css('.ico-login'));
        var loginLink          = $('.ico-login');
        var logOutLink         = $('.ico-logout');
        //var emailInputField = element(by.css('email'));
        var emailInputField    = element(by.css('[name="Email"]'));
        var passwordInputField = $('#Password');
        var loginButton        = $('.login-button');
        var emailLabel         = $('.ico-account');

        // ACT
        browser.get('http://localhost:29993/');
        loginLink.click();
        emailInputField.sendKeys('sumejjaslj@maestralsolutions.com');
        passwordInputField.sendKeys('test');
        loginButton.click();

        // ASSERT
        expect(emailLabel.getText()).toBe('sumejjaslj@maestralsolutions.comm');
        expect(logOutLink.isPresent()).toBe(false);
    });

});


