
var express = require('express');
const server = express();

server.get('/', (req, res) => {
	res.send("<H1>Hello World</H1>");
});

// server.listen(config.port, () => {
// 	console.info("Express listening at port " + config.port);
// });

server.listen(3000)
