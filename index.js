'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.register([
  require('./routes/index'),
  require('./routes/books')
], (err) => {

  if (err) {
    throw err;
  }

  // Start the server
  server.start((err) => {
    console.log('Server running at:', server.info.uri);
  });

});

