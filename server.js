
var express = require('express');
const server = express();

server.get('/', (req, res) => {
	res.send("sfgkshdkj");
});

// server.listen(config.port, () => {
// 	console.info("Express listening at port " + config.port);
// });

server.listen(process.env.PORT)
