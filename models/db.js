
const config = require('../config/database');
const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Vincent:Jabonete@mathgarden-yqteo.mongodb.net/test?retryWrites=true&w=majority',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex:true,
//     },
    
//     (err) => {
//     if (!err) { console.log('MongoDB connection succeeded.'); }
//     else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
// });


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