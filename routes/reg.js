var express = require('express');
var router = express.Router();

//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : '',
//    database:'easydecoration'
//});
//
//connection.connect();
//
///* GET users listing. */
//router.get('/', function(req, res, next) {
//    //res.send('respond with a resource');
//    var cellphone=req.query.cellphone,
//        password=req.query.password;
//
//    connection.query("INSERT INTO user VALUES ('', "+cellphone+", '', "+password+",'','','','')", function(err, rows, fields) {
//        if (err) throw err;
//        //res.send('The name is: ', rows[0].name);
//        res.jsonp({ code: '1',msg:'注册成功！' });
//    });
//
//    //connection.end();
//});

module.exports = router;