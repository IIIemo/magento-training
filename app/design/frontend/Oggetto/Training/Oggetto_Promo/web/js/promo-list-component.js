define([
    'ko',
    'uiComponent'
], function(
    ko,
    Component
) {
    'use strict';

    return Component.extend({
        selectedPromo: ko.observable(),
        showDetails: function(promo) {
            this.selectedPromo(promo);
        }
    });
});
