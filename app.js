var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.get("/", function(req, res) {
   res.render("search");
});
app.get("/final", function(req, res) {
   var query = req.query.movie;
   var url = "http://www.omdbapi.com/?i=" + query + "&apikey=thewdb"
   request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            console.log(data);
            // res.send(results["Search"][0]["Title"]);
            res.render("final", {data: data});
        }
    });
});

app.get("/game", function(req, res) {
   res.render("game"); 
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            // res.send(results["Search"][0]["Title"]);
            res.render("results", {data: data});
        }
    });
});



var port = 3000;

app.listen(port, function () {
    console.log("server is running on port " + port);
});