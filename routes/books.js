'use strict';

const Book = require('../models/book');

exports.register = function(server, options, next) {

	server.route({
			method: 'GET',
			path: '/api/books',
			handler: function (request, reply) {
          Book.find(function(error, books) {
              if (error) {
                  console.error(error);
              }

              reply(books);
          });
			}
	});

	server.route({
			method: 'GET',
			path: '/api/books/{id}',
			handler: function (request, reply) {
          Book.findById({ _id: request.params.id }, function(error, book) {
              if (error) {
                  console.error(error);
              }

              reply(book);
          });
			}
	});

	server.route({
			method: 'POST',
			path: '/api/books',
			handler: function (request, reply) {
          var book = new Book(request.payload);

          book.save(function(request, error, book) {

              if (error) {
                  console.error(error);
              }

              reply({
              		statusCode: 201,
            			message: 'Create Book',
							});
          });

      }
	});

	server.route({
			method: 'PUT',
			path: '/api/books/{id}',
			handler: function (request, reply) {
          Book.findOne({ _id: request.params.id, body: request.params.body }, function(error, book) {

              if (error) {
                  console.error(error);
              }

              book.title = request.payload.title;
              book.price = request.payload.price;
              book.save(function(err, book) {

                  reply({
                      statusCode: 200,
                      message: 'Update Book Successfuly',
                  });

              });
          });
			}
	});

	server.route({
			method: 'DELETE',
			path: '/api/books/{id}',
			handler: function (request, reply) {
          Book.findByIdAndRemove({ _id: request.params.id, body: request.params.body }, function(error, book) {
              if (error) {
                  console.error(error);
              }

              reply({
                  statusCode: 200,
                  message: 'Delete Book Successfuly',
              });

          });
			}
	});

	return next();
};

exports.register.attributes = {
  name: 'routes-books'
};

