#!/bin/sh
source .env
echo Logging into Stitch
stitch-cli login --username=$STITCH_USERNAME --api-key=$STITCH_API_KEY
echo Importing from project directory
stitch-cli import --app-id=$STITCH_APPID --strategy=replace --path=./stitch-app
echo Logging out
stitch-cli logout
echo Deploy complete
