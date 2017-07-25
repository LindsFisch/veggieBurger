var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function(res){

        })
    },
    insertOne: function (cb) {
        orm.insertOne(function(){

        })
    },
    updateOne: function(cb){
        orm.updateOne(function(){

        })
    }
}

module.exports = burger;