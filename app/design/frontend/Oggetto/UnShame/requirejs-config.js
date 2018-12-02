var config = {
    map: {
        '*': {
            'colorizer': 'js/colorizer',
            'tracker': 'Magento_Theme/js/tracker'
        }
    },
    config: {
        mixins: {
            'js/colorizer': {
                'js/colorizer-mixin': true
            },
            'Magento_Catalog/js/catalog-add-to-cart': {
                'js/catalog-add-to-cart-mixin-info': true
            }
        }
    }
};
