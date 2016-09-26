//var mongoose  = require('mongoose');
var express   = require('express');
var os = require('os');
var fs = require('fs');


var app = express();



app.get('/', function(req, res){
	res.end("hello form hey!");
}); 

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_dog,
      last_name:req.query.last_dog
   };
   console.log(response);
   res.end(JSON.stringify(response));
})


app.use(express.static( __dirname + '/public'));



/* app.use(function(err, req, res, next){
  if (req.xhr) {
    res.send(500, 'Something went wrong!');
  }
  else {
    next(err);
  }
}); */

console.log('starting the Express (NodeJS) Web server');
var port = process.env.NODE_ENV == 'development' ? 3000 : 80;
app.listen(port);
console.log('Webserver is listening on port '+port);


/*var db;

var config = {
      "USER"    : "",           
      "PASS"    : "",
      "HOST"    : "ec2-xx-xx-xx-xx.ap-southeast-2.compute.amazonaws.com",  
      "PORT"    : "27017", 
      "DATABASE" : "my_example"
    };
	
var dbPath  = "mongodb://"+config.USER + ":"+
    config.PASS + "@"+
    config.HOST + ":"+
    config.PORT + "/"+
    config.DATABASE;
var standardGreeting = 'Hello World!';	

var greetingSchema = mongoose.Schema({
  sentence: String
}); 
var Greeting= mongoose.model('Greeting', greetingSchema);

db = mongoose.connect(dbPath);

mongoose.connection.once('open', function() {
  var greeting;
  Greeting.find( function(err, greetings){
   if( !greetings ){     
      greeting = new Greeting({ sentence: standardGreeting }); 
      greeting.save();
    } 
  }); 
}); 
*/
