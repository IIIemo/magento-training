define([
    'jquery',
    'mage/url',
    'mage/translate',
    'Magento_Ui/js/modal/modal'
], function (
    $,
    url,
    $t
) {
    'use strict';

    var mixin = {
        enableAddToCartButton: function () {
            this._super.apply(this, arguments);
            $('<strong>' + $t('You have added something to the cart! Congrats!') + '</strong>').modal().modal('openModal');
        }
    };

    return function (target) {
        return $.widget('mage.catalogAddToCart', target, mixin);
    }
});