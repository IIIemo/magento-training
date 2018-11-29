var config = {
    map: {
        '*': {
            'colorizer': 'js/colorizer'
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
