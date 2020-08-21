// var http = require('http');
// var fs = require('fs')
// var server = http.createServer()
// server.on('request', function (req, res) {
//     res.end('html  is good')
// })
// server.listen(4000, function () {
//     console.log('server is  running....');
// })



var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function (req, res) {
    // Request 请求对象
    //        请求对象可以用来获取客户端的一些请求信息，例如请求路径
    //    Response 响应对象
    //        响应对象可以用来给客户端发送响应消息
    var url = req.url;
    if (url === '/') {
        fs.readFile('./resource/demo.html', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败，请稍后重试')
            } else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/bady') {
        fs.readFile('./resource/ab2.jpg', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败，请稍后重试')
            } else {
                res.setHeader('Content-Type', 'image/jpg')
                res.end(data)
            }
        })
    }

})

server.listen(4000, function () {
    console.log('Server is running');
})