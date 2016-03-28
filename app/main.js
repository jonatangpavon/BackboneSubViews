var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var MoviesRouter = require('./routers/movies');


$(document).ready(function() {
console.log('Init app...');
});

// Monitor para ver en acción las rutas
$(document).ready(function() {
	var router = new MoviesRouter({el: $('#movies')});
	Backbone.history.start({
		pushState: true,
		root: '/'
	});
});


/*
browserify ./app/main.js > static/bundle.js

SIN -r
*/