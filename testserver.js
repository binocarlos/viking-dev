var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res){
	console.log(req.method)
	console.log(req.url)
	console.dir(req.headers)

	req.pipe(process.stdout)

	res.end('ok')
})

server.listen(8791)