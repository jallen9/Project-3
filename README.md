# Cannaber

1) To run website, in terminal type: "node server.js" then press enter and navigate to localhost:3001
2) To restart website, in the case you made changes to code, go to terminal, press ctrl+c to stop the server, then restart via step 1 above.






*Todo:*
Required
1) Create react components for the header and provider listing.  Would be nice to also create one for: product listing and order item.

2) Require google login to access order checkout screen

3) Remove sensitive keys/credentials from code, load them as startup or environment variables

Not Required/other
3) Product prices are based on grams.. to change use a different price from listingmodel.js

4) Get the heroku nameserver urls, assign the cannaberproviders.com domain nameservers to the heroku nameservers..
ex: heroku name server is ns1.heroku.com  go to google domains, manage, change nameservers to ns1.heroku.com  wait about an hour for it to reflect.

5) If we integrate with stripe fully, set the success callback url to cannaberproviders.com/web/finished (or create a new page for it).

6) Once domain is setup with host, we need to update the google oauth source/destination addresses if it's broken, in the google dev console.
