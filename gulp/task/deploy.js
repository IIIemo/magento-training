'use strict';
module.exports = function () { // eslint-disable-line func-names
    // Global variables
    const plugins  = this.opts.plugins,
          config   = this.opts.configs,
          themes   = plugins.getThemes(),
          prod     = plugins.util.env.prod || false,
          execSync = require('child_process').execSync;

    themes.forEach(name => {
        const theme = config.themes[name];
        // Loop through locales, because you are required to specify a locale
        theme.locale.forEach(locale => {
            // if it's default theme, create symlinks to styles files via Magento CLI
            // porting "@magento-import" to node.js might be time consuming
            // and it's not so useful for front-end developers
            // execSync to keep process synchronous and wait till CLI do the job

            execSync(
                'php ../bin/magento dev:source-theme:deploy'
                + ' --type=' + theme.lang
                + ' --locale=' + locale
                + ' --area=' + theme.area
                + ' --theme=' + theme.vendor + '/' + theme.name
                + ' ' + theme.files.join(' ')
            );
        });
    });
};
