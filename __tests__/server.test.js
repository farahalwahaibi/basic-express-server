'use strict';

// Access server.js
const server = require( '../src/server.js' );

const supertest = require ( 'supertest' );
const req = supertest ( server.app );

describe ( 'server',()=>{

  // for bad route
  it( 'should get 404 status', async()=>{
    const res = await req.get( '/123' );
    expect( res.status ).toBe( 404 );
  } );

  // if no name in the query string
  it( 'should get an error', async()=>{
    const res = await req.get( '/person?name=' );
    expect( res.status ).toBe( 500 );
  } );
} );
