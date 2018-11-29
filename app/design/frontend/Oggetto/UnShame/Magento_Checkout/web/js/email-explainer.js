define([
    'ko',
    'uiComponent'
], function(
    ko,
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            imports: {
                email: '${ $.parentName }:email' // oh god why
            }
        },
        localizedMessage: 'An email confirming your order will be sent to',
        email: ko.observable()
    });
});