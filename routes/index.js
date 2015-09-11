var models  = require('../models');

exports.index = function(req, res,next){
    //res.send('respond with a resource');
    //res.render('index', { title: 'Index' });
    res.redirect('/web/');
};
exports.login = function(req, res){
    res.render('login', { title: '用户登陆'});
};
exports.doSaveUserInfo = function(req, res){
    if(req.session.user!=null){
        models.User.update({
            name: req.param('name')||null,
            sex: req.param('sex')||null,
            identity: req.param('identity')||null,
            email: req.param('email')||null,
            description: req.param('description')||null
        },{
            where: {username: req.session.user.username}
        }).then(function(array) {
                console.log(array);
                res.send({ status: 1,msg:'保存成功！' });
                res.end();
            });

    } else {
        res.send({ status: -99 ,msg:'请先登录！' });
        res.end();
    }

};
exports.doRegister = function(req, res){
    if(req.param('username') && req.param('password')){
        models.User.findOrCreate({where:{
            username: req.param('username'),
            password: req.param('password')
        }}).spread(function(user, created) {
                if(created){
                    req.session.user=user.dataValues;
                    res.cookie('userObj',JSON.stringify({username:user.get().username,createdAt:user.get().createdAt}),{maxAge:900000});
                    //如果有位置坐标，则保存
                    if(req.param('Lng')&&req.param('Lat')){
                        models.User.update({
                            lng: req.param('Lng')||null,
                            lat: req.param('Lat')||null
                        },{
                            where: {username: req.session.user.username}
                        }).then(function(array) {
                            console.log('保存地理坐标成功！');
                        });
                    }
                    res.send({ status: 1,msg:'注册成功！',username:user.get().username,createdAt:user.get().createdAt });
                    res.end();
                }else{
                    res.send({ status: 2,msg:'用户已存在！' });
                    res.end();
                }
            });
    } else {
        res.send({ status: 0,msg:'请填写用户名和密码！' });
        res.end();
    }

};
exports.getAllUsers = function(req, res){
    if(req.session.user!=null){
        models.User.findAll().then(function(users) {
            // project will be the first entry of the Projects table with the title 'aProject' || null
            if(users){
                console.log(users);
                var resUsers=[],resUser;
                for(var i=0;i<users.length;i++){
                    var user=users[i].dataValues;
                    resUser={};
                    resUser.id=user.id;
                    resUser.name=user.name;
                    resUser.cellphone=user.username;
                    resUser.identity=user.identity;
                    resUser.description=user.description;
                    resUser.lastLoginTime=user.updatedAt;
                    resUser.userPic='static/images/userPic.png';
                    resUser.Lng=user.Lng;
                    resUser.Lat=user.Lat;
                    resUsers.push(resUser);
                }
                res.send({
                    status: 1,
                    msg:'获取所有用户成功！',
                    data:resUsers
                });
                res.end();
            }else {
                res.send({ status: 0,msg:'目前没有用户！' });
                res.end();
            }

        });

    } else {
        res.send({ status: -99 ,msg:'请先登录！' });
        res.end();
    }

};
exports.getUserInfo = function(req, res){
    if(req.session.user!=null){
        models.User.findOne({ where: {
            username: req.session.user.username,
            name: {
                $ne:null
            },
            sex: {
                $ne:null
            },
            identity: {
                $ne:null
            },
            description:{
                $ne:null
            }
        }
        }).then(function(user) {
            // project will be the first entry of the Projects table with the title 'aProject' || null
            if(user){
                res.send({
                    status: 1,
                    msg:'获取用户资料成功！',
                    data:{
                        username:user.get().username,
                        name:user.get().name,
                        sex:user.get().sex,
                        identity:user.get().identity,
                        email:user.get().email||'',
                        description:user.get().description,
                        createdAt:user.get().createdAt
                    }
                });
                res.end();
            }else {
                res.send({ status: 0,msg:'请完善用户资料！' });
                res.end();
            }

        });

    } else {
        res.send({ status: -99 ,msg:'请先登录！' });
        res.end();
    }

};
exports.doLogin = function(req, res){
    //console.log(req.query.username,req.query.password);
    if(req.param('username')&&req.param('password')){

        models.User.findOne({ where: {
            username: req.param('username'),
            password: req.param('password')}
        }).then(function(user) {
                // project will be the first entry of the Projects table with the title 'aProject' || null
                if(user){
                    req.session.user=user.dataValues;
                    res.cookie('userObj',JSON.stringify({username:user.get().username,createdAt:user.get().createdAt}),{maxAge:900000});
                    //如果有位置坐标，则保存
                    if(req.param('Lng')&&req.param('Lat')){
                        models.User.update({
                            lng: req.param('Lng')||null,
                            lat: req.param('Lat')||null
                        },{
                            where: {username: req.session.user.username}
                        }).then(function(array) {
                            console.log('保存地理坐标成功！');
                        });
                    }
                    res.send({ status: 1,msg:'登录成功！',username:user.get().username,createdAt:user.get().createdAt });
                    res.end();
                }else {
                    res.send({ status: 1001,msg:'请注册！' });
                    res.end();
                }

            });
    }else{
        res.send({ status: 0,msg:'请填写用户名和密码！' });
        res.end();
    }

};

exports.logout = function(req, res){
    req.session.user=null;
    res.clearCookie('userObj');
    res.redirect('/web/');
};
exports.home = function(req, res){
    if(req.session.user!=null){
        res.render('home', { title: 'Home'});
    }else{
        res.redirect('/login');
    }

};