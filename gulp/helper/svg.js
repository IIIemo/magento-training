'use strict';
module.exports = function (gulp, plugins, config, name) { // eslint-disable-line func-names
    const theme     = config.themes[name],
          dest      = [],
          svgConfig = require('../helper/config-loader')('svg-sprite.yml', plugins, config);

    plugins.path = require('path');

    theme.locale.forEach(locale => {
        dest.push(config.projectPath + theme.dest + '/' + locale);
    });

    // TODO: Генерация в multiDesk, а путь к исходникам один.
    const iconsSrc = config.projectPath + theme.src + '/' + 'web/images';

    return gulp.src(iconsSrc + '/**/icons/**/*.svg').pipe(
        plugins.if(
            !plugins.util.env.ci,
            plugins.plumber({
                errorHandler: plugins.notify.onError('Error: <%= error.message %>')
            })
        )
    ).pipe(plugins.svgSprite({
        shape: {
            id: {
                generator: file => plugins.path.basename(file, '.svg')
            }
        },
        mode: svgConfig
    }))
    .pipe(plugins.multiDest(dest))
    .pipe(plugins.logger({
        display: 'name',
        beforeEach: 'Theme: ' + name + ' ',
        afterEach: ' Compiled!'
    })).pipe(plugins.browserSync.stream());
};
