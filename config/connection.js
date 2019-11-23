var mysql = require('mysql');
var connection;

if (process.send.JAWSDB_URL) {
    connection = mysql.createConnection(process.send.JAWSDB_URL)
} else {

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'J@hn5646',
    database:'burgers_db',
});
};

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected as: "+ connection.threadId);

});

module.exports = connection;
