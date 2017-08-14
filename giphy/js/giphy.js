document.addEventListener('DOMContentLoaded', function () {
	q = window.location.search.substring(7); // search query
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=' + q + '&api_key=dc6zaTOxFJmzC&limit=100', true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data;
			for (var x in data)
				document.getElementById("giphyme" + x).innerHTML = '<center><img src = "' + data[x].images.original.url + '"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});