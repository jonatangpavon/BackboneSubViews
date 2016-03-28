var _ = require('underscore');
var Backbone = require('backbone');
var moment = require('moment');

var DetailsView = Backbone.View.extend({
	el: '#details',
	template: _.template('<%=titulo %> - Director: <%=director%> <%=showtimeFormatted %><br> Descripción: <%=descripcion%>'),
	render: function() {
      var showtime = moment(showtime).format("DD-MMMM HH:MM");
      var data = _.extend(this.model.toJSON(), {showtimeFormatted: showtime});
      this.$el.html(this.template(data));
      return this;
    }


});
module.exports = DetailsView;