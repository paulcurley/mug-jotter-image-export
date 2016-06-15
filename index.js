const request = require('request');
const fs = require('fs')

const accesssToken = // grab from args
const url = 'https://graph.facebook.com/v2.6/1588251479/photos?fields=images&limit=99999999999999999&access_token='

const download = (uri, filename, callback) => {
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

request(`${url}${accesssToken}`, (error, response, body) => {
	if (error) {
		console.log(error);
		return;
	}
	const data = JSON.parse(body).data || [];

	const images = data.map(d => {
		return d.images[0].source;
	});

});


