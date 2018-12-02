define([
    'ko',
    'uiComponent',
    'mage/translate'
], function(
    ko,
    Component,
    $t
) {
    'use strict';

    return Component.extend({
        defaults: {
            imports: {
                email: '${ $.parentName }:email' // oh god why
            }
        },
        email: ko.observable(),
        getLocalizedMessage: function() {
            return $t('An email confirming your order will be sent to');
        }
    });
});