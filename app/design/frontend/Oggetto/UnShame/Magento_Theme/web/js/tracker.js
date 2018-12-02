define([
    'Magento_Customer/js/customer-data'
], function(
    customerData
) {
    'use strict';

    var cart = customerData.get('customer');
    cart.subscribe(function(value) {
        console.log(value);
    });
});