


//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const port = process.env.PORT || 8080;
const http = require('http'); //new add



//config connect mongodb

require('./config/config');
require('./models/db');
require('./config/passportConfig');


//connect to index router
const rtsIndex = require('./routes/index.router');


var app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/mathgarden'));


app.get('/*', function(req,res) {   
res.sendFile(path.join(__dirname+'/dist/mathgarden/index.html'));
});


//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);


// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});


//new add
process
  .on('SIGTERM', shutdown('SIGTERM'))
  .on('SIGINT', shutdown('SIGINT'))
  .on('uncaughtException', shutdown('uncaughtException'));


// Start the app by listening on the default Heroku port


//new add
setInterval(console.log.bind(console, 'tick'), 1000);


app.listen(port, () => {
    console.log(`Server started at PORT : ${port}`)
});


//new add
  function shutdown(signal) {
    return (err) => {
      console.log(`${ signal }...`);
      if (err) console.error(err.stack || err);
      setTimeout(() => {
        console.log('...waited 5s, exiting.');
        process.exit(err ? 1 : 0);
      }, 5000).unref();
    };
  }