# Cannaber

1) To run website, in terminal type: "node server.js" then press enter and navigate to localhost:3001
2) To restart website, in the case you made changes to code, go to terminal, press ctrl+c to stop the server, then restart via step 1 above.

Requirements met description:
1 React is used to render the header of each page
2 Nodejs/Express is used
3 Mongo with Mongoose is used
4 In Api-Routes, Get and POST endpoints are used
5 Mongo and Website is deployed in Heroku
6 Google oAuth and SendGrid are two libraries used that we haven't discussed.
7 Auth is performed via Google Oauth
8 Frontend is responsive bootstrap
9 MVC folders > models, views, routes
10 Good quality coding standards met
11 No sensitive api keys are exposed, they are stored in express via keys.js, never exposed in client files.

TODO:
- Setup heroku deployment from github project.  Then assign the cannaberproviders.com domain to heroku name servers.
- Once domain is setup with host, we need to update the google oauth source/destination addresses if it's broken, in the google dev console.