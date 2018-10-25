'use strict';
module.exports = function() { // eslint-disable-line func-names
    // Global variables
    const plugins = this.opts.plugins,
        config  = this.opts.configs,
        themes  = plugins.getThemes();

    // Loop through themes to compile less depending on your config.json
    themes.forEach(name => {
        config.themes[name].locale.forEach(locale => {
            plugins.runSequence(config.themes[name].lang + ':' + name + ':' + locale);
        });
    });
};
