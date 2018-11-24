'use strict';
module.exports = function () { // eslint-disable-line func-names
    // Global variables
    const gulp    = this.gulp,
          plugins = this.opts.plugins,
          config  = this.opts.configs;

    const pubThemePath = config.projectPath + 'pub/static/frontend/Oggetto/Training/en_US/';

    // Remove all less/css files and related images and fonts
    return gulp.src([
        // pubThemePath + 'css',
        pubThemePath + 'fonts',
        pubThemePath + 'images',
        pubThemePath + '**/*/*.less',
        pubThemePath + '**/*/*.css'

    ], {read: false})
    .pipe(plugins.rimraf({force: true}));
};

