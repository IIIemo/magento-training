define(function() {
    'use strict';
    let affectedProperties = [
        'color'
    ];
    let colorizer = function(color, element) {
        for(let property of affectedProperties) {
            element.style.setProperty(property, color);
        }
    };
    colorizer.affectedProperties = affectedProperties;

    return colorizer;
});