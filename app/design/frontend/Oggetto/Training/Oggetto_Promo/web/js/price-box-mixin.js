define([
    'jquery',
    'Magento_Catalog/js/price-utils',
    'underscore',
    'mage/template',
    'jquery/ui'
], function($, utils, _, mageTemplate) {
    'use strict';

    console.log('mixed in')
    var mixin = {
        options: {
            priceTemplate: '<span class="price">' +
                    '<%- data.formatted %> ' +
                    '<% if(data.promo) { %> Limited <% } %>' +
                '</span>'
        },

        updatePrice: function(newPrices) {
            if(newPrices) {
                this.cache.promo = newPrices.prices.promo;
                delete newPrices.prices.promo;
            }

            this._super(newPrices);
        },

        reloadPrice: function() {
            console.log(this.cache)

            _.each(this.cache.displayPrices, function (price) {
                price.promo = this.cache.promo;
            }, this);

            this._super();
        },
    };

    return function(target) {
        $.widget('mage.priceBox', target, mixin);
        return $.mage.priceBox;
    }
});
