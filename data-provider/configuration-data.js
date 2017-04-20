var randomNo = Math.floor(1000000000 * Math.random() + 1).toString();

exports.randomProductName    = 'product name' + randomNo;
exports.selectedVersion    = '';
exports.selectedBrowser    = '';
exports.screenResolution = {
    mobileSize: {
        width: 300,
        height: 730,
    },
    desktopSize: {
        width: 1100,
        height: 750,
    },
    tabletSize: {
        width: 1010,
        height: 660,
    }
};
exports.versions           = {
    mobile: 'Mobile',
    tablet: 'Tablet',
    desktop: 'Desktop'
};

exports.admin_tabs_basicMode = [
    'Product info',
    'Pictures',
    'Product attributes',
    'Specification attributes'
];

exports.sortingOptions = {
    position: 'Position',
    name_A_to_Z: 'Name: A to Z',
    name_Z_to_A: 'Name: Z to A',
    price_low_to_high: 'Price: Low to High',
    price_high_to_low: 'Price: High to Low',
    createdOn: 'Created on'
};

exports.valuesSortedByName_Z_to_A = [
    'Windows 8 Pro',
    'Sound Forge Pro 11 (recurring)',
    'Samsung Series 9 NP900X4C Premium Ultrabook',
];

exports.valuesSortedByName_A_to_Z = [
    'Adobe Photoshop CS4',
    'Apple MacBook Pro 13-inch',
    'Asus N551JK-XO076H Laptop',
    'Build your own computer'
];

exports.valuesSortedByPrice_Low_to_high = [
    '$54.99',
    '$65.00',
    '$75.00'
];

exports.valuesSortedByPrice_High_to_Low = [
    '$1,800.00',
    '$1,590.00',
    '$1,500.00'
];

exports.isTablet = function() {
    return exports.selectedVersion === exports.versions.tablet;
};
exports.isDesktop = function() {
    return exports.selectedVersion === exports.versions.desktop;
};
exports.isMobile = function() {
    return exports.selectedVersion === exports.versions.mobile;
};


exports.successNotification_shoppingCart = 'The product has been added to your shopping cart';

exports.rentFuncinalityValidation_Desktop = {

    'Requires future START date': {
        startDate: '04/01/2017',
        endDate: '04/01/2017',
        quantity: 5,
        totalPrice: '$30.00',
        notification: 'Rental start date should be the future date'
    },
    'Requires END date after START date': {
        startDate: '04/28/2017',
        endDate: '04/27/2017',
        quantity: 5,
        totalPrice: '$30.00',
        notification: 'Rental start date should be less than end date'
    },
    'START date is missing': {
        startDate: '',
        endDate: '04/27/2017',
        quantity: 5,
        totalPrice: '$30.00',
        notification: 'Enter rental start date'
    },
    'END date is missing': {
        startDate: '04/28/2017',
        endDate: '',
        quantity: 5,
        totalPrice: '$30.00',
        notification: 'Enter rental end date'
    },
    'START date is not a valid date format': {
        startDate: '27.04.2017',
        endDate: '27.04.2017',
        quantity: 5,
        totalPrice: '$30.00',
        notification: 'Enter rental start date'
    },
    'END date is not a valid date format': {
        startDate: '27.04.2017',
        endDate: '27.04.2017',
        quantity: 5,
        totalPrice: '$30.00',
        notification: 'Enter rental start date'
    },
    'Quantity is missing': {
        startDate: '04/19/2017',
        endDate: '04/22/2017',
        quantity: '',
        totalPrice: '$30.00',
        notification: 'Quantity should be positive'
    },
    'Quantity is negative number': {
        startDate: '04/19/2017',
        endDate: '04/22/2017',
        quantity: '-5',
        totalPrice: '$30.00',
        notification: 'Quantity should be positive'
    },
    'Quantity is decimal number': {
        startDate: '04/19/2017',
        endDate: '04/22/2017',
        quantity: '1.5',
        totalPrice: '$30.00',
        notification: 'Quantity should be positive'
    },
    'Valid entries': {
        startDate: '04/19/2017',
        endDate: '04/22/2017',
        quantity: 5,
        totalPrice: '$30.00',  // --> App has a bug here- doesn't update total price if we enter date manually- without date picker
        notification: 'The product has been added to your shopping cart'
    },
},

    exports.rentFuncinalityValidation_Mob = {

        'Requires future START date': {
            startDateNumber: '1',
            endDateNumber: '1',
            quantity: 5,
            totalPrice: '$30.00',
            notification: 'Rental start date should be the future date'
        },
        'Requires END date after START date': {
            startDateNumber: '28',
            endDateNumber: '27',
            quantity: 5,
            totalPrice: '$30.00',
            notification: 'Rental start date should be less than end date'
        },
        'START date is missing': {
            startDateNumber: '',
            endDateNumber: '27',
            quantity: 5,
            totalPrice: '$30.00',
            notification: 'Enter rental start date'
        },
        'END date is missing': {
            startDateNumber: '28',
            endDateNumber: '',
            quantity: 5,
            totalPrice: '$30.00',
            notification: 'Enter rental end date'
        },
        'Quantity is missing': {
            startDateNumber: '19',
            endDateNumber: '22',
            quantity: '',
            totalPrice: '$90.00',
            notification: 'Quantity should be positive'
        },
        'Quantity is negative number': {
            startDateNumber: '19',
            endDateNumber: '22',
            quantity: '-5',
            totalPrice: '$90.00',
            notification: 'Quantity should be positive'
        },
        'Quantity is decimal number': {
            startDateNumber: '19',
            endDateNumber: '22',
            quantity: '1.5',
            totalPrice: '$90.00',
            notification: 'Quantity should be positive'
        },
        'Valid entries': {
            startDateNumber: '19',
            endDateNumber: '22',
            quantity: 5,
            totalPrice: '$90.00',
            notification: 'The product has been added to your shopping cart'
        },
    };

exports.validValues = [
    'FirstNameTest',
    'LastNameTest',
    randomNo + '@gmail.com',
    'CompanyTest',
    'test123!',
    'test123!',
    '5',
    'January',
    '1990'
];

exports.invalidValues1 = [
    'FirstNameTest',
    'LastNameTest',
    'EmailTestgmail.com',
    'CompanyTest',
    'test',
    'test1',
    '5',
    'January',
    '1990'
];

exports.invalidValues2 = [
    'FirstNameTest',
    'LastNameTest',
    'sumejjaslj@maestralsolutions.com',
    'CompanyTest',
    'test123',
    'test123',
    '5',
    'January',
    '1990'
];

exports.validationMessages_client_side = [
    'Wrong email',
    'The password should have at least 6 characters.',
    'The password and confirmation password do not match.'
];

exports.validationMessages_blankForm = [
    'First name is required',
    'Last name is required',
    'Email is required',
    'Password is required',
    'Password is required'
];
module.exports = exports;