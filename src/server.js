'use strict';

// App Dependencies
const express = require( 'express' );
const notFoundHandler = require ( './error-handlers/404.js' );
const errorHandler = require ( './error-handlers/500.js' );
const logger = require ( './middleware/logger.js' );
const validator = require ( './middleware/validator.js' );

// App Setup
const app = express();
app.use( express.json() );
app.use( logger );

// Home route
app.get( '/',( req,res )=>{
  res.send( 'Welcome' );
} );

// localhost:3000/person?name=farah
app.get( '/person',validator, ( req,res )=>{
  res.json( {
    name: req.query.name,
  } );
} );

app.use( '*', notFoundHandler );
app.use( errorHandler );

// Listening on PORT function
function start ( PORT ) {
  app.listen ( PORT,()=>{
    console.log( `listen on PORT ${PORT}` );
  } );
}

// Export For App & start
module.exports = {
  app: app ,
  start: start ,
};
