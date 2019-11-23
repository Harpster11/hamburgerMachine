var connection = require('./connection');

var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM '+tableInput+';', function(err, result){
            if(err){ throw err;}
            cb(result)
        })
    },
    update: function(table, condition, cb){
        connection.query('UPDATE '+table+' SET devoured=true WHERE id='+condition+';', function(err, result){
            if(err){throw err;}
            cb(result);
        })
    } ,

    create: function(table, val, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += ' (burger_name)';
        queryString += ' VALUES (';
        queryString += '"';
        queryString += val.toString();
        queryString += '"'
        queryString += ') ';
    
        console.log(queryString);
    
        connection.query(queryString, val, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    }


module.exports = orm;