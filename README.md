# CannaberProviders

Cannaber Providers mobile delivery and user-friendly web-based application to make life easier for those who are looking for a more convenient way to get there medical and recreational cannabis products. 

In 2020 there will be a need in Illinois for a delivery service for medical and recreational cannabis products. We can provide that service through a mobile and user-friendly web-based application right to your door. You can find a Provider, view Provider Profiles, and Get it Delivered!

With increasing number of stores to come in the near future. Convenience can be provided at the click of a button. The industry looks to see growth revenue to be in the billions with continuous revenue advancements. 

Allan Pearson  George Mendoza  Joseph Allen  Mike Ommen 

We all worked on front and backend product development. We used Aesencryption, Api, Ajax Breadcrumbs, Bootstrap, CSS Styles, Csv, Express, Google Maps, Google Oauth, Heroku, Html, jQuery, Json, MongoDB, Node.js, React, Sendgrid.




IMPORTANT:
1) To use Google oauth locally, go to config folder, passport-setup.js and change http://cannaberproviders.com/auth/google/redirect to http://localhost:3001/auth/google/redirect 
2) To decrypt keys.js file, go to http://www.aesencryption.net enter the existing encrypted text in keys.js, enter our private password, and select 256 bit, click Decrypt.  Then copy/paste the decrypted text into keys.js and save.  
IMPORTANT: Do not commit the decrypted text!  Our repo is public, so it allows others to see our api keys, and will actually disable sendgrid functionality.

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

