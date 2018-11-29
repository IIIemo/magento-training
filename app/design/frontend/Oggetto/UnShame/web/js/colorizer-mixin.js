define(function () {
    'use strict';

    return function (target) {
        target.affectedProperties.push('border-color');
        return target;
    }
});
