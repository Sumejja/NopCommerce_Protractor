var randomNo = Math.floor(1000000000 * Math.random() + 1).toString();

exports.randomProductName    = 'product name' + randomNo;
exports.selectedVersion      = '';
exports.selectedWindowSize      = {
    mobileSize: {
        width: 300,
        height: 730,
    },
    bigDesktopSize:{
        width: 1100,
        height: 750,
    },
    smallDesktopSize:{
        width: 700,
        height: 730,
    },
};
exports.versions             = {
    mobile: 'Mobile',
    desktop_small: 'Desktop_small',
    desktop_big: 'Desktop_big'
};
exports.admin_tabs_basicMode = [
    'Product info',
    'Pictures',
    'Product attributes',
    'Specification attributes',
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


exports.isDesktop_BigSize = function() {
    return exports.selectedVersion === exports.versions.desktop_big;
};
exports.isDesktop_SmallSize = function() {
    return exports.selectedVersion === exports.versions.desktop_small;
};
exports.isMobile = function() {
    return exports.selectedVersion === exports.versions.mobile;
};
module.exports = exports;