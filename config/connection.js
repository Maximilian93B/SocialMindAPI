// MongoDB connection config 
const mongoose = require('mongoose');

// Connect using mongoose
// Handles errors as per convention 
mongoose.connect('mongodb://127.0.0.1:27017/socialmedia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to DB'))
    .catch(err => console.error('No Connection to DB...', err));

//export connection 
module.exports = mongoose.connection;

