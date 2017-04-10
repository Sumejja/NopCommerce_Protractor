var EC = protractor.ExpectedConditions;

describe('Home page', function () {
    it('Verify currency dropdown', function () {
        var currencyDropdown = $('#customerCurrency');
        var euro             = element(by.cssContainingText('option', 'Euro'));
        var price            = $('.price');

        browser.get('http://localhost:29993/');
        currencyDropdown.click();
        euro.click();

        expect(price.getText()).toContain('€..:');
        browser.sleep(5000);
    })

    it('Verify currency dropdown', function () {

        var computersMenuOption   = element(by.linkText('Computers'));
        var desktopsSubmenuOption = element(by.linkText('Desktops'));

        browser.get('http://localhost:29993/');
        browser.actions().mouseMove(computersMenuOption).perform();
        //browser.wait(EC.presenceOf(desktopsSubmenuOption));
        browser.actions().mouseMove(desktopsSubmenuOption).click().perform();
        browser.sleep(5000);

        expect(browser.getCurrentUrl()).toBe('http://localhost:29993/desktops');
    })
});