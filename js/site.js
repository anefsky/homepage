$(function() {
	var app = new App();
	app.start();
});

var App = function() {
	console.log("in App constructor");

	this.start = function() {

		console.log("in start");

		var appModel = new AppModel();
		var appView = new AppView({
			model : appModel
		});
	}
}

var AppModel = Backbone.Model.extend( {
/*	populateScreen : function(theData) {
		console.log('In populateScreen');

		$.ajax( {
			url: 'data/person_data.json',
			success: function(result) {
				console.log("ajax success, result: ", result)
				var theData = result;

				var name = theData.fullname;
				var role = theData.role;

			},
			error : function(xhr, status, error) {
				console.log('ajax call failed: ' + error);
			}

		});

	},
*/	getName : function() {
		return "Fred Flintstone"
	},
	getRole : function() {
		return "Rock collector"
	}
});

var AppView = Backbone.View.extend( {
	el$: $('#branding'),
//	template: _.template($('#test-template').html()),
	initialize: function() {
		console.log('in AppView initialize');

		this.render();
	},
	render : function() {
		console.log('in AppView render()');
//		$(this.el$).append(this.template({
//		this.template({
//			who: this.model.getName(),
//			what: this.model.getRole()
//		}

		$(this.el$).append('#test-template').html( {
//			who: this.model.getName(),
//			what: this.model.getRole()
		})

	}

});




