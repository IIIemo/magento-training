'use strict';
module.exports = function () { // eslint-disable-line func-names
    // Global variables
    const plugins  = this.opts.plugins,
        config   = this.opts.configs,
        themes   = plugins.getThemes(),
        prod     = plugins.util.env.prod || false, // `--prod` parameter
        execSync = require('child_process').execSync;

    const phpAlias = 'php';
    const magentoBin = '../bin/magento';

    themes.forEach(name => {
        const theme = config.themes[name];
        // Loop through locales, because you are required to specify a locale


        theme.locale.forEach(locale => {
            // create symlinks to styles files via Magento CLI
            // execSync to keep process synchronous and wait till CLI do the job

            execSync(
                phpAlias + ' ' + magentoBin
                + ' --no-interaction'
                + ' setup:static-content:deploy ' + locale
                + ' --theme='  + theme.vendor + '/' + theme.name
                + ' --area=' + theme.area);
            execSync(
                phpAlias + ' ' + magentoBin
                + ' --no-interaction'
                + ' setup:static-content:deploy ' + locale
                + ' --theme='  + theme.vendor + '/' + theme.name
                + ' --area=' + theme.area
                + ' --strategy less'
            );
        });
    });
};
