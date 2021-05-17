'use strict';

// Read Environment 
require( 'dotenv' ).config();

// App Setup
const PORT = process.env.PORT || 4000 ;

// Access server.js file
const server = require ( './src/server.js' ) ;

server.start( PORT ) ;

// or we can Access server.js by one line  
// require('./src/server.js').start(process.env.PORT);