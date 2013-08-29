window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backboner Jams 99!');
		var feeds = new NewReader.Collections.Feeds();
		feeds.fetch();
		var $documentBody = $('body')

		var feedIndexView = new NewReader.Views.FeedIndexView({
			collection: feeds
		})
		$documentBody.html(feedIndexView.render().$el);
		new NewReader.Routers.FeedsRouter($documentBody, feeds);
		Backbone.history.start();
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
