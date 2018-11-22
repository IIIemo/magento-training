define([
    'jquery',
    'underscore',
    'mage/template',
    'mage/smart-keyboard-handler',
    'mage/translate',
    'priceUtils',
    'jquery/ui',
    'jquery/jquery.parsequery',
    'mage/validation/validation'
], function ($, _, mageTemplate, keyboardHandler, $t, priceUtils) {
    'use strict';

    var mixin = {
        _getPrices: function(newPrices, displayPrices) {

            var result = this._super(newPrices, displayPrices);

            if(newPrices) {
                result.promo = newPrices.promo;
            }

            console.log(newPrices);

            return result;
        }
    };

    return function(target) {
        $.widget('mage.SwatchRenderer', target, mixin);

        return $.mage.SwatchRenderer;
    }
});
