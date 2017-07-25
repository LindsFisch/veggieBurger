//mySQL connection from connection.js
var connection = require("../config/connection.js");

var methods = {
    selectAll: function(tableName, callBack){
        var queryString = "SELET * FROM " + tableName + ";";
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            callBack(res);
        })
    },
    insertOne: function() {

    }, 
    updateOne: function() {

    }
}

//export ORM object
module.exports = methods;
