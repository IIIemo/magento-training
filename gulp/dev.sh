#!/bin/sh

set -x # print commands trace

# Clear out some caches
rm -rf ../var/{cache,page_cache,view_preprocessed}
gulp clean --theme unshame

# Turn off the config cache - it is caching the host/port causing problems
# if you use browsersync and the default port.
# php ../bin/magento cache:disable config

# Redeploy to pick up new files, compile styles, watch for file changes.
gulp deploy --theme unshame
gulp styles --theme unshame
gulp svg --theme unshame
gulp dev --theme unshame
