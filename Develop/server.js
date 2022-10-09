// Loads the needed specified modules 
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initializes app and sets a port connection
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware that parses JSON requests
app.use(express.json());
// Middleware that parses from URL
app.use(express.urlencoded({ extended: true }));
// Middleware for serving static files
app.use(express.static('public'));
//Mounts middleware at specified paths
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// start server on port 3001
app.listen(PORT, () => console.log(`Is listening on PORT' ${PORT}`));