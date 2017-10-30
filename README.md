# HapiApiRest
Simple Example Api Rest with Hapi JS and mongodb

## Run app

```
	$ node index.js
```

## Getting with Curl 

```
    $ curl -H 'content-type: application/json' -v -X GET http://localhost:3000/api/books 
    $ curl -H 'content-type: application/json' -v -X GET http://localhost:3000/api/books/:id
    $ curl -H 'content-type: application/json' -v -X POST -d '{"title":"Foo bar","price":"19.99"}' http://localhost:3000/api/books 
    $ curl -H 'content-type: application/json' -v -X PUT -d '{"title":"Foo bar","price":"19.99"}' http://localhost:3000/api/books/:id
    $ curl -H 'content-type: application/json' -v -X DELETE http://localhost:3000/api/books/:id
```
