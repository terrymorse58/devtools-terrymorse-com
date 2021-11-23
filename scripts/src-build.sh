#!/usr/bin/env bash
# build production src to dist directory
#
echo "Building production client to dist:"
echo -n "Removing all files from dist..."
rm -rf dist/*
echo "done."
echo "Running gulp..."
gulp --gulpfile gulp-src.js
echo "gulp complete."
echo "Build src to dist directory complete."
exit 0
