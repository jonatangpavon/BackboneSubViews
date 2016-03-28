var _ = require('underscore');
var Backbone = require('backbone');
Backbone.XView = require('backbone.xview');
var DetailsView = require('./details');
var ChoseView = require('./chose');
var MoviesList = require('./moviesList');
var Layout = Backbone.View.extend({
	template: _.template('<div id="overview"></div><div id="details"></div>'),

	render: function(){
		this.$el.html(this.template());
		this.currentDetails.setElement(this.$('#details')).render();
		this.overview.setElement(this.$('#overview')).render();
		return this;
	},

	setDetails: function(movie){
		if(this.currentDetails) this.currentDetails.remove();
		this.currentDetails = new DetailsView({model:movie});
		this.render();
	},

	setChose: function(){
		if(this.currentDetails) this.currentDetails.remove();
		this.currentDetails = new ChoseView();
		this.render();
	},

	initialize: function(options){
		this.currentDetails = new ChoseView();
		this.overview = new MoviesList({
				collection: options.router.movies,
				router: options.router
		});		
		this.currentDetails = new ChoseView();
	}
});
var instance;
Layout.getInstance = function(options){
	if(!instance){
		instance = new Layout({
			el:options.el,
			router:options.router,
			collection: options.router.movies
		});
	}
	return instance;
}
module.exports = Layout;