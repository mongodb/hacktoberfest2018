# MongoDB Stitch Badges
## What is a badge?

 Badges are used to communicate to potential users of your application as they review your project.

Here's an example.

[![Powered by Stitch](http://badge.learnstitch.com/?appid=stitch-badges-dkhza)](http://cloud.mongodb.com)

## Incorporating a Stitch Badge

Note the badges incorporated in the [README](https://github.com/mongodb/hacktoberfest2018/blob/master/README.md").

 These indicate that your Stitch app is up and functioning. Use these badges to communicate to potential users of your app the current state of your application.

The badge will validate the existence of your Stitch app based on the query parameter `appid`. 

To add a badge to your repository, obtain your Stitch App ID. You will find the Stitch App ID in the MongoDB Atlas Stitch console by clicking `>_ Getting Started` from the left-hand navigation menu of your app.

![Stitch App ID](https://i.imgur.com/y6dWV5M.png)

## Craft Your Own MongoDB Stitch Badge

Once you have the App ID, you can craft your own badge using the following syntax:

```[![Powered by Stitch](http://badge.learnstitch.com/?appid=<YOUR APP ID>)(http://cloud.mongodb.com)]```

## Additional Examples

### Working Stitch App Example
[![Powered by Stitch](http://badge.learnstitch.com/index.php?appid=stitch-badges-dkhza)](http://cloud.mongodb.com)

### Non-working Stitch App Example
[![Powered by Stitch](http://badge.learnstitch.com/index.php?appid=non-existing-app)](http://cloud.mongodb.com)

Replace *<YOUR APP ID>* with your actual Stitch App ID.
