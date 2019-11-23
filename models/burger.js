var orm = require('../config/orm');

var burger = {
    all: function(cb){
        // calling the orm to access the burger database and return all items in the burger table
        orm.all('burgers', function(res){
            cb(res);
        });    
    },
    update: function(id,cb){
        orm.update('burgers',id, function(res) {
        cb(res);
        });
        },
    create: function(name, cb){
        orm.create('burgers', name, cb);

    }

}

module.exports = burger