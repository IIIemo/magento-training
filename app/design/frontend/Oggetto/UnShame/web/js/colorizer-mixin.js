define(['jquery', 'jquery/ui'],
function($) {
    'use strict';

    return function (target) {
        return $.widget('mage.colorizer', $.mage.colorizer, {
            _create() {
                if(this.options.props['border-color'] !== false) {
                    this.options.props['border-color'] = true;
                }

                this._super();
            }
        });
    }
});
