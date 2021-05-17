'use strict';

// Access server.js
const server = require( '../src/server.js' );

const supertest = require ( 'supertest' );
const req = supertest ( server.app );

describe ( 'server',()=>{

  // if the name is in the query string
  it( 'should get 200 status', async()=>{
    const res = await req.get( '/person?name=fred' );
    expect( res.status ).toBe( 200 );
    expect( res.text ).toBe( '{"name":"fred"}' );
  } );

  // for bad method
  it( 'should get 404 status', async()=>{
    const res = await req.post( '/person' );
    expect( res.status ).toBe( 404 );
  } );
} );
