#!/usr/bin/env bash
# upload client to production
echo "client-deploy.sh - uploading dist to production..."
rsync --archive --verbose --delete dist/ \
  terrymorse@terrymorse.com:/home/terrymorse/devtools.terrymorse.com
echo "Upload complete."
