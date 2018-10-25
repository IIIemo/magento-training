'use strict';

module.exports = function (gulp, plugins, config, name, locale, file) { // eslint-disable-line func-names
    // Return function that is executed inside of .pipe()
    return () => {
        const theme      = config.themes[name],
            src        = theme.default ? config.projectPath + theme.dest + '/' + locale : config.projectPath + theme.src,
            dest       = config.projectPath + theme.dest + '/' + locale,
            maps       = plugins.util.env.maps || false,
            production = plugins.util.env.prod || false,
            lessFiles  = file || [],
            postcss    = [],
            parentPath = require('./parent-theme-dir')(name, config, plugins);

        if (theme.postcss) {
            theme.postcss.forEach(el => {
                postcss.push(eval(el));
            });
        }

        // less compiler is dumb as f*ck
        // can't figure out what files to process when path is like 'theme/**/*.less'
        if (!lessFiles.length) {
            const files = plugins.globby.sync([
                src + '/css/*.less', // Compile only 1st level
                src + '/mage/**/*.less',
                '!' + src + '/**/_*.less',
                '!' + src + '/node_modules/**/*.less'
            ]);

            files.forEach(file => lessFiles.push(file));
        }
        return gulp.src(lessFiles, {'base' : config.projectPath + theme.dest + '/' + locale})
            .pipe(plugins.plumber({errorHandler: plugins.notify.onError('Error: <%= error.message %>')}))
            .pipe(plugins.if(maps, plugins.sourcemaps.init()))
            .pipe(plugins.less({paths: parentPath.concat('.')}))
            // .pipe(plugins.if(production, plugins.postcss([plugins.cssnano()])))
            // .pipe(plugins.if(postcss.length, plugins.postcss(postcss || [])))
            .pipe(plugins.postcss([
                plugins.autoprefixer({
                    cascade: false
                }),
                require('postcss-flexbugs-fixes')
            ]))
            .pipe(plugins.if(production, plugins.cssMin()))
            .pipe(plugins.if(maps, plugins.sourcemaps.write()))
            .pipe(gulp.dest(dest))
            .pipe(plugins.logger({
                display: 'name',
                beforeEach: 'Theme: ' + name + ' Locale: ' + locale + ' ',
                afterEach: ' Compiled!'
            }))
            .pipe(plugins.browserSync.stream());
    };
};
