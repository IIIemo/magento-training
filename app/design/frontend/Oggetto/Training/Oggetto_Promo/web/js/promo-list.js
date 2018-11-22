define(['jquery', 'mage/template', 'jquery/ui', 'slick'], function($, mageTemplate) {
    'use strict';

    $.widget('mage.promoList', {
        options: {
            promos: [],
            template: '<span class="promotions__item"><%- data %></span>',
            slick: {
                autoplay: true,
                arrows: false,
                fade: true
            }
        },

        _create() {
            this.options.promos.forEach(function(promo) {
                this.element.append(mageTemplate(
                    this.options.template,
                    {data: promo}
                ));
            }.bind(this));
            this.element.slick(this.options.slick);
        }
    });

    return $.mage.promoList;
});