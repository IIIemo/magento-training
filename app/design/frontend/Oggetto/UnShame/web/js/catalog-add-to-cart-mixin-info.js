define([
    'jquery',
    'mage/url',
    'Magento_Ui/js/modal/modal'
], function (
    $,
    url
) {
    'use strict';

    var mixin = {
        enableAddToCartButton: function () {
            this._super.apply(this, arguments);
            $('<strong>You have added something to the cart! Congrats!</strong>').modal().modal('openModal');
        }
    };

    return function (target) {
        return $.widget('mage.catalogAddToCart', target, mixin);
    }
});