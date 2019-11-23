var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
const router = express.Router();

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

app.use(methodOverride('method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require("./controllers/routes");
app.use(routes);

var port = 3000; 
app.listen(port);

console.log("Listening on", port);

module.exports = router;