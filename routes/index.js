const express = require('express');
// Route files 
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');


//Expres Router 
const router = express.Router();


// Exported Routes 
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);


module.exports = router; 