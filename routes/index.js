const express = require('express');
// Route files 
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');


// Express Router 
const router = express.Router();


// Routes 
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// Export routes
module.exports = router; 