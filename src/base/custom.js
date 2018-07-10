var $ = require('jquery');

$('button').each(function(index, el) {
	var title = $(el).prop('title');

	console.log(title);
});