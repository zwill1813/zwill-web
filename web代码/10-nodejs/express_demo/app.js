var express = require('express')

var app = express()
app.get('/', function (req, res) {
    res.send('hello  express！ 欢迎你');
})
app.get('/z', function (req, res) {
    res.send('你好， 今天是2020年8月8日');
})
app.listen(3000, function () {
    console.log('running....');
})