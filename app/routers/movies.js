var Backbone = require('backbone');
var Movies = require("./collections/movies");
var data = require('../movies.json');
var movies = new Movies(data);
var MoviesList = require('./views/moviesList');
//var Layout = require('./views/layout');
var Layout = require('./views/layout');

var _ = require('underscore');

var MoviesRouter = Backbone.Router.extend({
routes:{
	'movies/:id':'selectMovie',
	'':'showMain'
},

selectMovie: function(id){
	this.movies.resetSelected();
	this.movies.selectByID(id);	
	//Importante:
	this.layout.setDetails(this.movies.get(id));
},

showMain: function(){
	this.movies.resetSelected();
	//Importante:
	this.layout.setChose();
},
//Importante:
initialize: function(options){
		this.movies = movies;
		this.layout = Layout.getInstance({
			el: '#movies', router: this

		});
		this.layout.render();		
}

});
module.exports = MoviesRouter;
/*
Se han definido dos rutas la primer /movies/:id con un triggers que retorna selectMovies y la segunda una ruta vacía que muestra main
*/