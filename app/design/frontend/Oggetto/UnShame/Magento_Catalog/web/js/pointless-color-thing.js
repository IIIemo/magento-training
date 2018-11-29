define([
    'ko',
    'uiComponent'
], function(
    ko,
    Component
) {
    'use strict';

    return Component.extend({
        selectedDiv: ko.observable(),
        colorize: function(div) {
            this.selectedDiv(div);
        }
    });
});