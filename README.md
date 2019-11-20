# Cannaber

1) To run website, in terminal type: "node server.js" then press enter and navigate to localhost:3001
2) To restart website, in the case you made changes to code, go to terminal, press ctrl+c to stop the server, then restart via step 1 above.



*Todo:*
Required
1) Create react components for the header and provider listing.  Would be nice to also create one for: product listing and order item.

2)Load Any keys/creds such as config>keys> google clientSecret and db connection string credentials by setting them as environment variables, startup parameters, or some other method.  You just cant have them easily readable in the git repository code.

Not Required/other
1) Product prices are based on grams.. to change use a different price from listingmodel.js

2) Get the heroku nameserver urls, assign the cannaberproviders.com domain nameservers to the heroku nameservers..
ex: heroku name server is ns1.heroku.com  go to google domains, manage, change nameservers to ns1.heroku.com  wait about an hour for it to reflect.

3) If we integrate with stripe fully, set the success callback url to cannaberproviders.com/web/finished (or create a new page for it).

4) Once domain is setup with host, we need to update the google oauth source/destination addresses if it's broken, in the google dev console.
