var express = require("express")
var app = express()

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/memes', function(req, res){
    res.sendFile(__dirname + '/public/memes.html')
})

app.get('/videos', function(req, res){
    res.sendFile(__dirname + '/public/videos.html')
})

app.listen(process.env.port || 4000, function(){
    console.log("server running")
})