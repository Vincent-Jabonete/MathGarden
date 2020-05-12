// server.js
const express = require('express');
const app = express();
const path = require ('path');
// Run the app by serving the static files
// in the dist directory
// app.use(express.static(__dirname + '/src'));
// Start the app by listening on the default
// Heroku port

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);

app.get('/*',function(req, res){
    res.sendFile(path.join(__dirname+'/dist/mathgarden/index.html'));
  });

  // app.get('/*', function(req,res) {
    
  //   res.sendFile(path.join(__dirname+'/src/app/home/home.component.html'));
   
  // });