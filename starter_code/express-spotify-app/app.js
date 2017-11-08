var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = '5e7065568b314da893719f0e59769509',
    clientSecret = 'e977c57d6c584607a9e2abf403e4440b';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});
