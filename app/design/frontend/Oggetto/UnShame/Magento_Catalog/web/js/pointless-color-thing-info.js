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
                selectedDiv: '${ $.parentName }:selectedDiv' // oh god why
            }
        },
        selectedDiv: ko.observable()
    });
});