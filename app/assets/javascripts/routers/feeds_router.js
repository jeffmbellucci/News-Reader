NewReader.Routers.FeedsRouter = Backbone.Router.extend({
	initialize: function($rootEl, feeds) {
		this.$rootEl = $rootEl;
		this.feeds = feeds;
	},

	routes: {
		"": "index",
		"feeds/:id": "show"
	},

	index: function () {
		var thisRouter = this;

		var feedIndexView = new NewReader.Views.FeedIndexView({
			collection: thisRouter.feeds
		});
		thisRouter.$rootEl.html(feedIndexView.render().$el);
	},
	show: function(id) {
		var thisRouter = this;
		var feed = thisRouter.feeds.get(id);


		//broken code
		feed.entries = new NewReader.Collections.Entries();
		feed.entries.url = "/feeds/" + id + "/entries";
		feed.entries.fetch();
		console.log(feed);
		var feedView = new NewReader.Views.FeedView({model: feed});
		thisRouter.$rootEl.html(feedView.render().$el);
	}
});