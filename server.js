var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('exress-handlebars');

var app = express ();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urleconded({
    extended: false
}));

app.use(methodOverride('method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var port = 3000; 
app.listen(port);

console.log("Listening on", port);
