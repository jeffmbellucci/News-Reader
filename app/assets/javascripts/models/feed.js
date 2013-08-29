NewReader.Models.Entry = Backbone.Model.extend({

	parse: function(data) {
		var entriesCollection = new NewReader.Collections.Entries(data.entries);
		data.entries = entriesCollection;
		return data;
	}
});