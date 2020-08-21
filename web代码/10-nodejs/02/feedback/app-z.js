var http = require('http')
var server = http.createServer()
server.on('request', function () {

})
server.listen(3000, function () {
    console.log('运行中...');
})