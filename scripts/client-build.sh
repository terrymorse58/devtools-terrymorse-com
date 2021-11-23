#!/usr/bin/env bash
# build production client to dist directory
#
echo "Building production client to dist:"
echo -n "Removing all files from dist..."
rm -rf dist/*
echo "done."
echo "Running gulp..."
gulp --gulpfile gulp-client.js
echo "gulp complete."
echo "Build client to dist directory complete."
exit 0
