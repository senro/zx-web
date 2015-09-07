var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession=require('cookie-session');
var session=require('express-session');
var methodOverride=require('method-override');
var FileStore = require('session-file-store')(session),
    store=new FileStore();

module.exports = function (app){
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(methodOverride());
    app.use(cookieParser());

    //app.use(cookieSession({secret : 'fens.me'}));
    app.use(session({
        secret : 'senro.cn',
        store: store,
        cookie: { maxAge: 900000 }//900000
    }));
    app.use(function(req, res, next){
        res.locals.user = req.session.user;
        next();
    });
    return app;
};