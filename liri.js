// fs is a core Node package for reading and writing files
var fs = require('fs')
//Variables for user input command
var command = process.argv[2]
var input = process.argv[3]
console.log("this is argv3 ", input)
//Set variables for required files and modules
var keys = require("./keys.js");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var client = new Twitter(keys.twitterKeys);


var spotify = new Spotify(keys.spotifyKeys);


if (command === "my-tweets") {
	var params = {screen_name: 'brettNW100'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if (!error) {
			for (var i = 0; i < tweets.length; i++) {
				console.log("This tweet was created on " + tweets[i].created_at);
				console.log("This tweet says " + tweets[i].text);
			}	 
		}
	});
};

if (command === "spotify-this-song") {
	spotify.search({ type: 'track', query: input }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data.tracks.items[0].artists[0].name);
console.log(data.tracks.items[0].name); 
console.log(data.tracks.items[0].album.name);
console.log(data.tracks.items[0].preview_url);

});
}
