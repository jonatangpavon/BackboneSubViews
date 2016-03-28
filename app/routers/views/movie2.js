var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');


var MovieView = Backbone.View.extend({
tagName:'article',
className: 'movie',
// Navegación de la página
template:'<h1><a href="/movies/<%= id %>"><%= titulo %></a><hr></h1>',

events:{
	'click': '_selectMovie'
},

_selectMovie: function(ev){
	//ev.preventDefault(); Hay que quitarle sino no navega hasta el movies/1
	console.log('evento '+this,model.id);
	if(!this.model.get('selected')){
	this.model.collection.resetSelected();
	this.model.collection.selectByID(this.model.id);
	// NAVEGACION del objeto:
	this.router.navigate("/movies/"+this.model.id);
	}	
	console.log($(ev.currentTarget).html())
	console.log(this.model.get('titulo'));
},

render: function(){
	var tmpl = _.template(this.template);
	this.$el.html(tmpl(this.model.toJSON()));
	this.$el.toggleClass('selected', this.model.get('selected'));
	return this;
},
// Para la ruta
initialize: function(options){		
	this.router =options.router;
}

});
module.exports = MovieView;



/*


browserify -r ./app/main.js:app > ./static/bundle.js


app = require('app');
moviesList = new app.MoviesList({collection: app.movies});
document.body.appendChild(moviesList.render().el);

Clickeamos sobre la pelicula

*/