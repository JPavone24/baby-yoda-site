var express = require("express")
var app = express()

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(_dirname + '/index.html')
})

app.listen(process.env.port || 4000, function(){
    console.log("server running")
})