#!/bin/sh
source .env
echo Logging into Stitch
stitch-cli login --username=$STITCH_USERNAME --api-key=$STITCH_API_KEY
echo Exporting Project to temp directory
rm -rf tmp
stitch-cli export --app-id=$STITCH_APPID --as-template --output=./tmp
echo Copying to project directory
cp -r  ./tmp/. ./stitch-app
rm -rf tmp
echo Logging out
stitch-cli logout
echo Export complete
