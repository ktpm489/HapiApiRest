'use strict';

exports.register = function(server, options, next) {

	server.route({
			method: 'GET',
			path: '/',
			handler: function (request, reply) {
					reply('Hello, Hapi!');
			}
	});

	return next();
};

exports.register.attributes = {
  name: 'routes-index'
};

