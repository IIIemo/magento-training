/* global ymaps */
define(['yandex-maps-api'], function() {
    'use strict';

    function initMap(element, organization) {
        var myMap = new ymaps.Map(element.id, {
            center: [55.74, 37.58],
            zoom: 13,
            controls: []
        });

        var searchControl = new ymaps.control.SearchControl({
            options: {
                provider: 'yandex#search'
            }
        });

        myMap.controls.add(searchControl);

        searchControl.search(organization);
    }

    return function (config, element) {
        ymaps.ready(function () {
            initMap(element, config.organization);
        });
    };
})