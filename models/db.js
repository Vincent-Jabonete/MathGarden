
const config = require('../config/database');
const mongoose = require('mongoose');

// Connect To Database (OLD CODE)
mongoose.connect(config.database, { 

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,  
});
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

require('./user.model');