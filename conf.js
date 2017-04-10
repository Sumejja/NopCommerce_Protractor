// An example configuration file.
exports.config = {

    // Capabilities to be passed to the webdriver instance.
    /*capabilities: {
     'browserName': 'chrome',
     'proxy': {
     'proxyType': 'manual',
     'httpProxy': 'http://localhost:8888'
     }
     /!* "runtimeArgs": [
     "--disable-session-crashed-bubble",
     "--disable-infobars"
     ],
     'chromeOptions': {
     'args': ['no-sandbox']
     }*!/
     },*/
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {mobileEmulation: {deviceName: 'Google Nexus 5'}},
            specs: ['./tests/*',],
            params: 'mobile version'
        },
        {
            browserName: 'chrome',
            specs: ['./tests/*',],
            params: 'defaultWindowSize',
        },
        {
            browserName: 'chrome',
            specs: ['./tests/*',],
            params: 'smallDesktopSize',
        },
    ],
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        var D                      = require('./data-provider/configuration-data.js');

        // returning the promise makes protractor wait for the reporter config before executing tests
        return global.browser.getProcessedConfig().then(function (config) {
            var chromeOptions = config.capabilities.chromeOptions;
            var parameter = config.capabilities.params;

            function setConfigurationForMobile() {
                if (parameter === 'mobile version') {
                    browser.driver.manage().window().setSize(D.selectedWindowSize.mobileSize.width, D.selectedWindowSize.mobileSize.height);
                    D.selectedVersion = D.versions.mobile;
                }
            }

            function setConfigurationForDesktop() {
                if (parameter === 'bigDesktopSize') {
                    browser.driver.manage().window().setSize(D.selectedWindowSize.bigDesktopSize.width, D.selectedWindowSize.bigDesktopSize.height);
                    D.selectedVersion = D.versions.desktop_big;
                }
            }

            function setConfigurationForDesktop_SmallResolution() {
                if (parameter === 'smallDesktopSize') {
                    browser.driver.manage().window().setSize(D.selectedWindowSize.smallDesktopSize.width, D.selectedWindowSize.smallDesktopSize.height);
                    D.selectedVersion = D.versions.desktop_small;
                }
            }

            setConfigurationForDesktop();
            setConfigurationForMobile();
            setConfigurationForDesktop_SmallResolution()
        });

    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath: './report-with-screenshots',
        screenshotOnExpect: 'failure+success',
        screenshotOnSpec: 'none',
        withLogs: 'true',
        writeReportFreq: 'asap',
        imageToAscii: 'none',
        clearFoldersBeforeTest: true
    }],
};
