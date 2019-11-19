var orm = require('../config/orm');

var burger = {
    all: function(cb){
        // calling the orm to access the burger database
        orm.all('burgers', function(res){
            cb(res);
        })
    }
}

module.exports = burger