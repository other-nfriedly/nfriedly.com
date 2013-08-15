var renderMaizygram = _.template('<a href="<%= link %>" title="<%= caption.text %>"><img src="<%= images.low_resolution.url %>" alt="Maizygram!"></a>'); 

function handleMaizygrams(response) {
	if(response && response.meta.code == 200) {
		var mg = _.find(response.data, function(pic) {
			return _.contains(pic.tags, 'maizygram');
		});
		//console.log(mg);
		if (!mg) return;
		var i = $('<img/>');
		i.on('load', function() {
			$('div.maizygram').html(renderMaizygram(mg));
		});
		i.attr('src', mg.images.low_resolution.url);
	}
}

$(document).ready(function() {
	$.getScript('https://api.instagram.com/v1/users/self/media/recent/?access_token=5308686.473ac98.7c15354b874849a3951c79fbbb9c18b9&callback=handleMaizygrams');
});