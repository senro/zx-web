var models = require('../models');
var http = require('http');
var baiduMap = require('baidumap');
var bdmap = baiduMap.create({'ak': 'XoGIq1S4vnlzaTVuTQZsHSPi'});
var xlsx = require('node-xlsx');
var fs = require('fs');
var path = require('path');
var staticPath = process.cwd() + '/static/';
var util = require('util');
var multiparty = require('multiparty');

exports.index = function (req, res, next) {
    //res.send('respond with a resource');
    //res.render('index', { title: 'Index' });
    res.redirect('/web/');
};
exports.login = function (req, res) {
    res.render('login', {title: '用户登陆'});
};
exports.doSaveUserInfo = function (req, res) {
    if (req.session.user != null) {
        models.User.update({
            name: req.param('name') || null,
            sex: req.param('sex') || null,
            identity: req.param('identity') || null,
            email: req.param('email') || null,
            description: req.param('description') || null
        }, {
            where: {username: req.session.user.username}
        }).then(function (array) {
            console.log(array);
            res.send({status: 1, msg: '保存成功！'});
            res.end();
        });

    } else {
        res.send({status: -99, msg: '请先登录！'});
        res.end();
    }

};
exports.doRegister = function (req, res) {
    if (req.param('username') && req.param('password')) {
        models.User.findOrCreate({
            where: {
                username: req.param('username'),
                password: req.param('password')
            }
        }).spread(function (user, created) {
            if (created) {
                req.session.user = user.dataValues;
                res.cookie('userObj', JSON.stringify({
                    username: user.get().username,
                    createdAt: user.get().createdAt
                }), {maxAge: 900000});
                //console.log('location'+String(req.param('Lng'))+','+String(req.param('Lat')));
                //如果有位置坐标，则保存
                if (req.param('Lng') != '' && req.param('Lat') != '') {
                    http.get("http://api.map.baidu.com/geoconv/v1/?coords=" + req.param('Lng') + ',' + req.param('Lat') + '&ak=XoGIq1S4vnlzaTVuTQZsHSPi&from=1&to=5', function (res) {
                        console.log("Got response: " + res.statusCode);
                        if (res.statusCode == 200) {
                            res.on('data', function (chunk) {
                                console.log('BODY: ' + JSON.parse(chunk));
                                if (JSON.parse(chunk).status == 0) {
                                    var Lng = String(JSON.parse(chunk).result[0].x);
                                    var Lat = String(JSON.parse(chunk).result[0].y);
                                    //坐标转换成功
                                    //创建地理编码实例
                                    var reverseGeocoderOption = {'location': Lat + ',' + Lng, 'pois': 0};
                                    bdmap.reverseGeocoder(reverseGeocoderOption, function (err, json) {

                                        var Json = JSON.parse(json);
                                        console.log(Json);
                                        console.log(Json.status);
                                        console.log(Json.result);
                                        if (Json.status == 0) {
                                            var result = Json.result;
                                            //alert(result.address);
                                            console.log(result.formatted_address);
                                            models.User.update({
                                                Lng: Lng || null,
                                                Lat: Lat || null,
                                                address: result.formatted_address,
                                                country: result.addressComponent.country,
                                                city: result.addressComponent.city,
                                                province: result.addressComponent.province,
                                                district: result.addressComponent.district,
                                                street: result.addressComponent.street,
                                                street_number: result.addressComponent.street_number,
                                                country_code: result.addressComponent.country_code
                                            }, {
                                                where: {username: req.session.user.username}
                                            }).then(function (array) {
                                                console.log('保存地理坐标成功！');

                                            });
                                        }
                                    });

                                }
                            });
                        }

                    }).on('error', function (e) {
                        console.log("Got error: " + e.message);
                    });
                }
                res.send({status: 1, msg: '注册成功！', username: user.get().username, createdAt: user.get().createdAt});
                res.end();
            } else {
                res.send({status: 2, msg: '用户已存在！'});
                res.end();
            }
        });
    } else {
        res.send({status: 0, msg: '请填写用户名和密码！'});
        res.end();
    }

};
exports.getAllUsers = function (req, res) {
    if (req.session.user != null) {
        models.User.findAll().then(function (users) {
            // project will be the first entry of the Projects table with the title 'aProject' || null
            if (users) {
                //console.log(users);
                var resUsers = [], resUser;
                for (var i = 0; i < users.length; i++) {
                    var user = users[i].dataValues;
                    resUser = {};
                    resUser.id = user.id;
                    resUser.name = user.name;
                    resUser.cellphone = user.username;
                    resUser.identity = user.identity;
                    resUser.description = user.description;
                    resUser.lastLoginTime = user.updatedAt;
                    resUser.userPic = 'static/images/userPic.png';
                    resUser.Lng = Number(user.Lng);
                    resUser.Lat = Number(user.Lat);
                    resUsers.push(resUser);
                }
                res.send({
                    status: 1,
                    msg: '获取所有用户成功！',
                    data: resUsers
                });
                res.end();
            } else {
                res.send({status: 0, msg: '目前没有用户！'});
                res.end();
            }

        });

    } else {
        res.send({status: -99, msg: '请先登录！'});
        res.end();
    }

};
exports.getUserInfo = function (req, res) {
    if (req.session.user != null) {
        models.User.findOne({
            where: {
                username: req.session.user.username,
                name: {
                    $ne: null
                },
                sex: {
                    $ne: null
                },
                identity: {
                    $ne: null
                },
                description: {
                    $ne: null
                }
            }
        }).then(function (user) {
            // project will be the first entry of the Projects table with the title 'aProject' || null
            if (user) {
                res.send({
                    status: 1,
                    msg: '获取用户资料成功！',
                    data: {
                        username: user.get().username,
                        name: user.get().name,
                        sex: user.get().sex,
                        identity: user.get().identity,
                        email: user.get().email || '',
                        description: user.get().description,
                        createdAt: user.get().createdAt
                    }
                });
                res.end();
            } else {
                res.send({status: 0, msg: '请完善用户资料！'});
                res.end();
            }

        });

    } else {
        res.send({status: -99, msg: '请先登录！'});
        res.end();
    }

};
exports.search = function (req, res) {
    if (req.session.user != null) {

        models.User.findOne({
            where: {
                identity: req.param('identity') || null,
                name: {
                    $ne: null
                },
                sex: {
                    $ne: null
                },
                description: {
                    $ne: null
                }
            }
        }).then(function (user) {
            // project will be the first entry of the Projects table with the title 'aProject' || null
            if (user) {
                res.send({
                    status: 1,
                    msg: '获取用户资料成功！',
                    data: {
                        username: user.get().username,
                        name: user.get().name,
                        sex: user.get().sex,
                        identity: user.get().identity,
                        email: user.get().email || '',
                        description: user.get().description,
                        createdAt: user.get().createdAt
                    }
                });
                res.end();
            } else {
                res.send({status: 0, msg: '请完善用户资料！'});
                res.end();
            }

        });

    } else {
        res.send({status: -99, msg: '请先登录！'});
        res.end();
    }

};
exports.doLogin = function (req, res) {
    //console.log(req.query.username,req.query.password);
    if (req.param('username') && req.param('password')) {

        models.User.findOne({
            where: {
                username: req.param('username'),
                password: req.param('password')
            }
        }).then(function (user) {
            // project will be the first entry of the Projects table with the title 'aProject' || null
            if (user) {
                req.session.user = user.dataValues;
                res.cookie('userObj', JSON.stringify({
                    username: user.get().username,
                    createdAt: user.get().createdAt
                }), {maxAge: 900000});
                //如果有位置坐标，则保存
                if (req.param('Lng') != '' && req.param('Lat') != '') {
                    models.User.update({
                        Lng: String(req.param('Lng')) || null,
                        Lat: String(req.param('Lat')) || null
                    }, {
                        where: {username: req.session.user.username}
                    }).then(function (array) {
                        console.log('保存地理坐标成功！');
                    });
                }
                res.send({status: 1, msg: '登录成功！', username: user.get().username, createdAt: user.get().createdAt});
                res.end();
            } else {
                res.send({status: 1001, msg: '请注册！'});
                res.end();
            }

        });
    } else {
        res.send({status: 0, msg: '请填写用户名和密码！'});
        res.end();
    }

};

exports.logout = function (req, res) {
    req.session.user = null;
    res.clearCookie('userObj');
    res.redirect('/web/');
};
exports.home = function (req, res) {
    if (req.session.user != null) {
        res.render('home', {title: 'Home'});
    } else {
        res.redirect('/login');
    }

};

/* 上传*/
exports.uploading=function (req, res, next) {
    console.log('uploading');
    //默认配置
    var defaultSortMap = [
        {fromCol: 0, targetCol: 2},
        //{ fromCol:1,targetCol:1 },
        {fromCol: 2, targetCol: 0}
    ];

    var defaultRule={
        sortMap:null,
        addMap:[
            {newCol: 0, tit: '商品编号', value: 'col-2'},
            {newCol: 1, tit: '名称', value: 'col-1'},
            {newCol: 2, tit: '类别', value: ''},
            {newCol: 3, tit: '规格型号', value: ''},
            {newCol: 4, tit: '条码	', value: 'col-0'},
            {newCol: 5, tit: '款式', value: ''},
            {newCol: 6, tit: '颜色', value: ''},
            {newCol: 7, tit: '进价', value: 'col-3'},
            {newCol: 8, tit: '销售价', value: 'col-3*0.85'},
            {newCol: 9, tit: '会员价', value: 'col-3*0.8'},
            {newCol: 10, tit: '库存数', value: '1'}
        ]
    };

    /*
     from
     条形码	书名	 ISBN	价格	 在库	入库时间	书架
     to
     商品编号	名称 	类别 	规格型号	 单位	条码	 货号	款式	 尺码	颜色	 进价	销售价	会员价	库存数
    */
    //console.log('rule:',req.param('rule'),'query:',req.query.rule,'body:',req.body.rule);
    //var rule=req.param('rule')?JSON.parse(req.param('rule')):undefined||defaultRule;
    //var sortMap =  rule.sortMap,
    //    addMap =  rule.addMap;

    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: './static/love/files/'});
    //上传完成后处理
    form.parse(req, function (err, fields, files) {
        var filesTmp = JSON.stringify(files, null, 2);


        console.log(trim(fields.rule[0]));
        var rule=(fields.rule[0]?JSON.parse(trim(fields.rule[0])):undefined)||defaultRule;
        var sortMap =  rule.sortMap,
            addMap =  rule.addMap;

        console.log(JSON.stringify(addMap));

        if (err) {
            console.log('parse error: ' + err);
        } else {
            console.log('parse files: ' + filesTmp);
            var inputFile = files.inputFile[0];
            var uploadedPath = inputFile.path;
            var dstPath = './static/love/files/'+inputFile.originalFilename;//inputFile.originalFilename,默认文件名：origin.xlsx
            //重命名为真实文件名renameSync
            fs.rename(uploadedPath, dstPath, function (err) {
                if (err) {
                    console.log('rename error: ' + err);
                    res.write('rename error: ' + err);
                    res.end('转换失败！');
                } else {
                    console.log('rename ok');
                    transportExcel(dstPath,sortMap,addMap,function(resultPath){
                        //转换成功，跳转到转后的excel
                        console.log('resultPath:',resultPath);
                        res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
                        res.write('转换成功！');

                        res.end('<a href="'+resultPath+'">下载转换后excel(2007版)</a><a href="/love">返回</a>');
                        //res.end(util.inspect({fields: fields, files: filesTmp}));
                        //res.redirect(resultPath);
                    });
                }
            });
        }

    });
};
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g,'');
}
function transportExcel(filename,sortMap,addMap,successCallback){

    console.error(filename);
    // read from a file
    var obj = xlsx.parse(filename);
    /*
     [{"name":"Sheet1","data":[["编号","价格","名字"],[123456,11,"某某图书1"],[234567
     ,22,"某某图书1"]]},{"name":"Sheet2","data":[]},{"name":"Sheet3","data":[]}]
     */
    console.log(JSON.stringify(obj));
    var targetObjs = [];

    for (var objIndex = 0; objIndex < obj.length; objIndex++) {
        var objData = obj[objIndex].data;
        var objName = obj[objIndex].name;
        var targetObj = {};
        targetObj.name = objName;
        targetObj.data = sortData(objData, sortMap, addMap);
        targetObjs.push(targetObj);
    }

    function sortData(targetData, sortMap, addMap) {
        var sortedData = [];
        for (var i = 0; i < targetData.length; i++) {
            var currTargetData = targetData[i];
            sortedData[i] = [];
            for (var j = 0; j < currTargetData.length; j++) {
                var currTargetDataValue = currTargetData[j];

                if(sortMap){
                    //保留未排序列
                    sortedData[i][j] = currTargetDataValue;
                    //排序列
                    for (var k = 0; k < sortMap.length; k++) {
                        var currSortMap = sortMap[k];
                        if (currSortMap && j == currSortMap.targetCol) {
                            sortedData[i][currSortMap.targetCol] = currTargetData[currSortMap.fromCol];
                        }
                    }
                }
                if (addMap) {
                    //增加列
                    for (var addMapKey = 0; addMapKey < addMap.length; addMapKey++) {
                        var currAddMap = addMap[addMapKey];
                        if (i == 0) {
                            sortedData[i][currAddMap.newCol] = currAddMap.tit;
                        } else {
                            sortedData[i][currAddMap.newCol] = eval(parseValue(currAddMap.value));
                        }
                    }
                }

            }
        }
        return sortedData;
    }

    function parseValue(value) {
        //value:'col-1'*0.8 | 'col-1'+'col-2'
        if(/col\-/.test(value)){
            value=value.replace(/col\-(\d{1,})/g, 'currTargetData[$1]');//todo 这个地方可能有数字类型问题
        }
        return value;
    }

    console.log('targetObjs:', JSON.stringify(targetObjs));

    var buffer = xlsx.build(targetObjs);
    fs.writeFileSync('./static/love/files/商品导入模板.xlsx', buffer, 'binary');

    successCallback&&successCallback('/love/files/商品导入模板.xlsx');
}
