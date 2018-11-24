#!/bin/sh

set -x # print commands trace

# Clear out some caches
rm -rf ../var/{cache,page_cache,view_preprocessed}
rm -rf ../pub/static/frontend/Oggetto
rm -rf ../pub/static/deployed_version.txt

# Redeploy to pick up new files, compile styles
gulp deploy-prod --theme training
gulp styles --theme training --prod
gulp svg --theme training
