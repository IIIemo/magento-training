define([
    'ko',
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function(
    ko,
    Component,
    customerData
) {
    'use strict';

    return Component.extend({
        reload: function() {
            customerData.reload(['cart'], false);
        }
    });
});