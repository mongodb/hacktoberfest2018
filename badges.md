# MongoDB Stitch Badges
## What is a badge?

[![Powered by Stitch](http://badge.learnstitch.com/?appid=stitch-badges-dkhza)(http://cloud.mongodb.com)

##Incorporating a Stitch Badge

Note the badges incorporated in the [README](https://github.com/mongodb/hacktoberfest2018/blob/master/README.md").

 These indicate that your Stitch app is up and functioning. Use these badges to communicate to potential users of your app the current state of your application.

| Author | Repo | Description | Demo Link or other notes |
| --- | --- | --- | --- |
| [![MrLynn](https://avatars2.githubusercontent.com/u/192552?s=50&v=4)](http://twitter.com/merlynn) |  [hacktoberfest2018](http://github.com/mongodb/hacktoberfest2018)| MongoDB Hackathon Repository with a working Stitch app. This app is actually a service that will return the stitch badge that you see above.|  [Badge](http://badge.learnstitch.com) |

The badge will validate the existence of your Stitch app based on the query parameter `appid`. 

To add a badge to your repository, obtain your Stitch App ID. You will find the Stitch App ID in the MongoDB Atlas Stitch console by clicking `>_ Getting Started` from the left-hand navigation menu of your app.

![Stitch App ID](https://i.imgur.com/y6dWV5M.png)

Once you have the App ID, you can craft your own badge using the following syntax:

```![Powered by Stitch](http://badge.learnstitch.com/?appid=<YOUR APP ID>)(http://cloud.mongodb.com)```

Replace *<YOUR APP ID>* with your actual Stitch App ID.