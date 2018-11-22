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
            this._super();
            var linkUrl = url.build('promo/available');
            $('<a href="' + linkUrl + '">Look at our promos!</a>').modal().modal('openModal');
        }
    };

    return function (target) {
        return $.widget('mage.catalogAddToCart', target, mixin);
    }
});
