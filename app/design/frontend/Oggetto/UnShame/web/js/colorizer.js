define(['jquery', 'jquery/ui'],
function($) {
    'use strict';

    $.widget('mage.colorizer', {
        options: {
            color: 'black',
            props: {
                color: true
            }
        },

        _create() {
            let props = this.options.props;

            for(let prop of Object.keys(props)) {
                if(props[prop]) {
                    this.element.css(prop, this.options.color);
                }
            }
        }
    });

    return $.mage.colorizer;
}
);