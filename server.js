var express = require('express');
var path = require('path');
var app = express();

app.use('/vue', express.static('vue'));
app.use('/app', express.static('app'));
app.use('/assets', express.static('assets'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/vue/index.html'));
});

console.log('Running on port 3025...');
app.listen(3025);