NewReader.Views.FeedView = Backbone.View.extend({
	initialize: function () {
		var thisView = this;

		var renderCallback = thisView.render.bind(thisView);
		thisView.model.on("add", renderCallback);
		thisView.model.on("remove", renderCallback);
	},
	render: function () {
		var thisView = this;

		var renderedContent = JST["feeds/show"]({feed: thisView.model});

		thisView.$el.html(renderedContent);
		return thisView;
	}
});