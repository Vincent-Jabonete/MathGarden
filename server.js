//Install express server
const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(cookieParser());


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/mathgarden'));

// app.get('/api', function (req, res) {
//     return res.send('http://localhost:1234');
// });


//parse incoming data before routes
app.use(bodyParser.json())

// api routes
app.use('/api',require('./api/auth'));


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/mathgarden/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080)