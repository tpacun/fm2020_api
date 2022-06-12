# Football Manager API
This is a fully functional API which returns a full compliment of 64 fields and statistics derived from the database of the video game Football Manager 2020.

**Example Call:** https://fm2020api.herokuapp.com/api/id/0

## How It's Made:

**Tech used:** HTML, JavaScript, Node, Express, MongoDB (Atlas), Heroku

This was built using a standard back-end combination of Node, Express, and MongoDB (hosted via Atlas). The actual service is hosted by Heroku. This isn't a full-fledged CRUD style API, rather it's designed to be able to access information about players from the FM2020 database. There's also a script written which cleaned the data before uploading it to MongoDB.

## Optimizations

I'd obviously like to generate more functionality for the API itself - including more queries to provide information based upon clubs, countries, stats, positions, and other fields out there. Creating an actual front-end webpage to display this information potentially via a framework such as React would also be a great next step. Lastly, developing it in more standardized or best practice format for scaleability (such as writing out a router and controller).

## Lessons Learned:

Brushing up on a quick bit of data cleaning. Learned how to connect to MongoDB and think about connecting a database to a web framework in order to supply information. Additionally use of environment variables and a more best pratice setup involving Git, Heroku, and Node.