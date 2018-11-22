var config = {
    map: {
      '*': {
          colorizer: 'Oggetto_Promo/js/colorizer',
          promoList: 'Oggetto_Promo/js/promo-list',
          slick: 'Oggetto_Promo/js/slick.min'
      }
    },
    paths: {
        'yandex-maps-api': '//api-maps.yandex.ru/2.1/?lang=ru_RU'
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Oggetto_Promo/js/catalog-add-to-cart-mixin': true
            },
            'Oggetto_Promo/js/colorizer': {
                'Oggetto_Promo/js/colorizer-mixin': true
            }
        }
    }
};
