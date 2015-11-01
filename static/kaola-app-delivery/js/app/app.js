window.parent.postMessage("StatusBar.backgroundColorByHexString('#000');",'*');

 //注册后退按钮
document.addEventListener("backbutton", function (e) {
    if(J.hasMenuOpen){
        J.Menu.hide();
    }else if(J.hasPopupOpen){
        J.closePopup();
    }else{
        var sectionId = $('section.active').attr('id');
        if(sectionId == 'index_section'){
            J.confirm('提示','是否退出程序？',function(){
                //navigator.app.exitApp();
            });
        }else{
            window.history.go(-1);
        }
    }
}, false);

var App = (function(){
    var pages = {};
    var run = function(){
        $.each(pages,function(k,v){
            var sectionId = '#'+k+'_section';
            $('body').delegate(sectionId,'pageinit',function(){
                v.init && v.init.call(v);
            });
            $('body').delegate(sectionId,'pageshow',function(e,isBack){
                //页面加载的时候都会执行
                v.show && v.show.call(v);
                //后退时不执行
                if(!isBack && v.load){
                    v.load.call(v);
                }
            });
        });
		J.Transition.add('flip','slideLeftOut','flipOut','slideRightOut','flipIn');
        Jingle.launch({
            showWelcome : false,
            welcomeSlideChange : function(i){
                switch(i){
                    case 0 :
                        J.anim('#welcome_jingle','welcome_jinlge',1000);
                        break;
                    case 1 :
                        $('#r_head,#r_body,#r_hand_left,#r_hand_right,#r_foot_left,#r_foot_right').hide()
                        J.anim($('#r_head').show(),'r_head',500,function(){
                            J.anim($('#r_body').show(),'r_body',1200,function(){
                                J.anim($('#r_hand_left').show(),'r_hand_l',500);
                                J.anim($('#r_hand_right').show(),'r_hand_r',500,function(){
                                    J.anim($('#r_foot_left').show(),'r_foot_l',500);
                                    J.anim($('#r_foot_right').show(),'r_foot_r',500,function(){
                                        J.anim('#welcome_robot','welcome_robot',2000);
                                    });
                                });
                            });
                        });
                        break;
                    case 2 :
                        $('#w_box_1,#w_box_2,#w_box_3,#w_box_4').hide()
                        J.anim($('#w_box_1').show(),'box_l',500,function(){
                            J.anim($('#w_box_2').show(),'box_r',500,function(){
                                J.anim($('#w_box_3').show(),'box_l',500,function(){
                                    J.anim($('#w_box_4').show(),'box_r',500);
                                });
                            });
                        });
                        break;
                }
            },
            showPageLoading : true,
            remotePage : {
                '#about_section' : 'remote/about_section.html'
            }
        });
       
    };
    var page = function(id,factory){
        return ((id && factory)?_addPage:_getPage).call(this,id,factory);
    }
    var _addPage = function(id,factory){
        pages[id] = new factory();
    };
    var _getPage = function(id){
        return pages[id];
    }
    //动态计算chart canvas的高度，宽度，以适配终端界面
    var calcChartOffset = function(){
        return {
            height : $(document).height() - 44 - 30 -60,
            width : $(document).width()
        }

    }
    return {
        run : run,
        page : page,
        calcChartOffset : calcChartOffset
    }
}());

/*
 *保存数据：localStorage.setItem(key,value);
 读取数据：localStorage.getItem(key);
 删除单个数据：localStorage.removeItem(key);
 删除所有数据：localStorage.clear();
 得到某个索引的key：localStorage.key(index);
 * */
var localObj,userObj={goodsIds:[]},baseUrl,apiHost='/hw-sq-run-web/';
if(window.localStorage.getItem('localObj')){
    localObj =JSON.parse(window.localStorage.getItem('localObj'));
}else{
    localObj={};
}
if(cookie('get','userObj')){
    userObj=JSON.parse(cookie('get','userObj'));
}
// 退出
$('body').on('click','#logout', function (event) {
    var $this=$(this);
    if($this.hasClass('disable')){
        return false;
    }
    if (event) {
        event.preventDefault();
    }
    $.ajax({
        url:apiHost+'login/logout.do',
        dataType:'json',
        success:function(data){
            if(data.status==1){
                J.Router.goTo('#login_section');
            }else{
                J.showToast(data.detail,'error');
            }
        },
        beforeSend:function(){
            $this.addClass('disable');
        },
        complete:function(){
            $this.removeClass('disable');
        }
    });

});

App.page('login',function(){
    this.init = function(){
        if(cookie('get','userObj')){
            userObj=JSON.parse(cookie('get','userObj'));
        }
        //检测登录
        $.ajax({
            url:apiHost+'login/checkLoginStatus.do',
            dataType:'json',
            success:function(data){
                if(data.status==1){
                    //已经登录
                    J.Router.goTo('#goodsList_section');
                }else if(data.status=='-99'){
                    J.Router.goTo('#login_section');
                    //根据缓存自动填写手机号
                    $('.input-cellphone').val(userObj.account.mobile);
                }else{
                    J.showToast(data.detail,'error');
                }

            },
            beforeSend:function(){

            },
            complete:function(){

            }
        });

        $('.btn-login').on('tap', function(){
            var $this=$(this);
            if($this.hasClass('disable')){
                return false;
            }
            $.ajax({
                url:apiHost+'login/enter.do',
                data:$('#login_form').serialize(),
                dataType:'json',
                success:function(data){
                    if(data.status==1){
                        J.Router.goTo('#goodsList_section');
                        userObj.account=data.data;
                        userObj.account.key=data.key;
                        userObj.account.mobile=$('.input-cellphone').val();
                        userObj.goodsIds=[];
                        cookie('set','userObj',JSON.stringify(userObj));
                    }else if(data.status=='-99'){
                        J.Router.goTo('#login_section');
                    }else{
                        J.showToast(data.detail,'error');
                    }

                },
                beforeSend:function(){
                    $this.addClass('disable').html('登录中...');
                },
                complete:function(){
                    $this.removeClass('disable').html('登录');
                }
            });
            return false;
        });
    }
});
App.page('goodsList',function(){
    this.init = function(){
        //删除添加的goodsID
        $('body').on('tap','.btn-delGoodID',function(){
            var $this=$(this);
            J.confirm('警告',$this.parents('.goodsListItem').attr('data-goodsName'),function(){
                //J.showToast('已经删除');
                $this.parents('.goodsListItem').remove();
                //更新cookie缓存
                userObj.goodsIds=[];
                $('.goodsListItem').each(function(index){
                    var $item=$(this);
                    userObj.goodsIds.push({goodsId:$item.attr('data-id'),goodsName:$item.attr('data-goodsName'),villageName:$item.attr('data-villageName')});
                });
                cookie('set','userObj',JSON.stringify(userObj));

            },function(){
                //J.showToast('取消删除');
            });
        });
        if(userObj.goodsIds&&userObj.goodsIds.length>0){
            $.each(userObj.goodsIds,function(i,item){
                $('.goodsListItems').append(
                    '<li class="goodsListItem clearfix" data-id="'+item.goodsId+'" data-goodsName="'+item.goodsName+'" data-villageName="'+item.villageName+'">'+
                    '<div class="item-inner">'+
                    '<span class="item-title">'+item.goodsName+'</span>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;'+
                    '<span class="item-text">'+item.villageName+'</span>'+
                    '</div>'+
                    '<a class="btn-del btn-delGoodID" href="javascript:;">'+
                    '<i class="icon minus"></i>'+
                    '</a>'+
                    '</li>'
                );
            });
        }
        //增加商品id
        var goodsList_article_scroll=J.Scroll('#goodsList_article');

        $('.btn-addGoodsID').on('tap', function(){
            var $this=$(this),
                addGoodsId=$('.input-addGoodsID').val();
            if($this.hasClass('disable')){
                return false;
            }
            if(validateGoodsId(addGoodsId)){
                $.ajax({
                    url:apiHost+'groupPurchase/queryProductBasicInfo.do',
                    data:{productId:addGoodsId},
                    dataType:'json',
                    success:function(data){
                        //var data=JSON.parse(data);
                        if(data.status==1){
                            var goodsName=data.data.goodsName;
                            var villageName=data.data.villageName;
                            var goodsId=data.data.goodsId;

                            $('.goodsListItems').append(
                                '<li class="goodsListItem clearfix" data-id="'+goodsId+'" data-goodsName="'+goodsName+'" data-villageName="'+villageName+'"">'+
                                '<div class="item-inner">'+
                                '<span class="item-title">'+goodsName+'</span>'+
                                '&nbsp;&nbsp;&nbsp;&nbsp;'+
                                '<span class="item-text">'+villageName+'</span>'+
                                '</div>'+
                                '<a class="btn-del btn-delGoodID" href="javascript:;">'+
                                '<i class="icon minus"></i>'+
                                '</a>'+
                                '</li>'
                            );
                            $('.input-addGoodsID').val('');
                            userObj.goodsIds.push({goodsId:goodsId,goodsName:goodsName,villageName:villageName});
                            cookie('set','userObj',JSON.stringify(userObj));
                            goodsList_article_scroll.scroller.refresh();

                        }else if(data.status=='-99'){
                            J.Router.goTo('#login_section');
                        }else{
                            J.showToast(data.detail,'error');
                        }

                    },
                    beforeSend:function(){
                        $this.addClass('disable');
                    },
                    complete:function(){
                        $this.removeClass('disable');
                    }
                });
            }else{
                J.showToast('你已添加此商品，不能重复添加！','error');
            }

        });
        $('.btn-gotoOrderList').on('tap', function(){
            var $this=$(this);
            J.Router.goTo('#orderList_section'+(collectParams($('.goodsListItem'))?'?productIds='+collectParams($('.goodsListItem')):''));
        });

        //$('#goodsList_article').on('articleshow',function(){
        //    J.Scroll('#h_scroll_demo',{hScroll:true,hScrollbar : false});
        //})
    }
});
App.page('orderList',function(){
    $('body').on('tap','.orderListItem',function(){
        var $this=$(this);
        if($this.hasClass('active')){
            $this.removeClass('active');
            $this.find('.icon').removeClass('checkbox-checked').addClass('checkbox-unchecked');
        }else{
            $this.addClass('active');
            $this.find('.icon').removeClass('checkbox-unchecked').addClass('checkbox-checked');
        }
        return false;
    });
    this.init = function(){

        var params=$('#orderList_section').attr('data-query');
        var startPage= 0,pageSize=10,totalPage;
        getOrderList(params+'&page='+startPage+'&size='+pageSize);

        var up_refresh_article_scroll;
        J.Refresh( '#up_refresh_article','pullUp', function(){
            var scroll = this;
            up_refresh_article_scroll=scroll;

            startPage++;
            if(totalPage>startPage){
                getOrderList(params+'&page='+startPage+'&size='+pageSize,null,function(){
                    scroll.refresh();
                    J.showToast('加载成功','success');
                });
            }else{
                scroll.refresh();
                J.showToast('没有更多了','success');
            }
        });
        $('.btn-sendGoods').tap(function(){
            var $this=$(this);
            var items=$('.orderListItem.active');

            if($this.hasClass('disable')){
                return false;
            }
            $.ajax({
                url:apiHost+'groupPurchase/modifyOrderH5.do',
                data:{orderIds:collectParams(items),key:userObj.key},
                dataType:'json',
                success:function(data){
                    //var data=JSON.parse(data);
                    if(data.status==1){
                        J.showToast('发货成功！','success');
                        //重新获取订单列表
                        $('.orderListItems').html('');
                        startPage=0;
                        getOrderList(params+'&page='+startPage+'&size='+pageSize,null,function(){
                            up_refresh_article_scroll.refresh();
                            //J.showToast('加载成功','success');
                        });
                    }else if(data.status=='-99'){
                        J.Router.goTo('#login_section');
                    }else{
                        J.showToast(data.detail,'error');
                    }
                },
                beforeSend:function(){
                    $this.addClass('disable');
                },
                complete:function(){
                    $this.removeClass('disable');
                }
            });
            //J.confirm('确认','确定要发货？',function(){J.showToast('已经发货')},function(){J.showToast('取消发货')});
        });
        function getOrderList(params,beforeCallback,completeCallback){
            $.ajax({
                url:apiHost+'groupPurchase/queryProductOrderByIds.do',
                data:params,
                dataType:'json',
                success:function(data){
                    //var data=JSON.parse(data);
                    if(data.status==1){
                        if(data.data.content&&data.data.content.length>0){
                            for(var i=0;i<data.data.content.length;i++){
                                var item=data.data.content[i];
                                var name=item.name;
                                var goodsName=item.goodsName;
                                var goodsId=item.goodsId;
                                var orderId=item.orderId;
                                var mobile=item.mobile;
                                var imgKey=item.orderImg;
                                $('.orderListItems').append(
                                    '<li class="orderListItem clearfix" data-selected="selected" data-id="'+orderId+'">'+
                                    '<div class="item-media"><img src="/hw-sq-run-web/banner/getBannerPicture.do?pictureId='+imgKey+'" style="width: 4rem;"></div>'+
                                    '<div class="item-inner">'+
                                        '<div class="item-title-row">'+
                                            '<div class="item-title">'+goodsName+'</div>'+
                                        '</div>'+
                                        '<div class="item-text">'+name+'<br/>'+mobile+'</div>'+
                                    '</div>'+
                                    '<div class="item-after">'+
                                    '<i class="icon checkbox-unchecked"></i>'+
                                    '</div>'+
                                    '</li>'
                                );
                            }
                            totalPage=data.data.totalPages;
                            startPage=data.data.number;

                        }else{
                            $('.orderListItems').append(
                                '<li class="orderListItem clearfix" data-selected="selected"><p class="textCenter">未查到相关数据</p></li>'
                            );
                        }
                    }else if(data.status=='-99'){
                        J.Router.goTo('#login_section');
                    }else{
                        J.showToast(data.detail,'error');
                    }

                },
                beforeSend:function(){
                    beforeCallback && beforeCallback();
                },
                complete:function(){
                    completeCallback && completeCallback();
                }
            });
        }
    }
});
function validateGoodsId(goodsId){
    var result=true;
    $.each(userObj.goodsIds,function(i,item){
        if(item.goodsId==goodsId){
            result=false;
            return false;
        }
    });
    return result;
}
function collectParams($items){
    var params=[];
    $items.each(function(index){
        var $thisItem=$(this);
        var id=$thisItem.attr('data-id');
        params.push(id);
    });
    return params.join(',');
}
function cookie(str_type,str_name,str_value){
    /*
     * @位置：  常用后端交互方法；
     * @名字：  cookie；
     * @翻译：  cookie操作（ 操作类型，名字，值 ）；
     * @参数：  cookie( type,name,value )
     *         type（字符串）：【必填】操作类型:'get','set','del'
     *         name（字符串）：【必填】cookie名字
     *         value（字符串）：【可选】值;
     * @功能：  cookie操作；
     * @返回：  无；
     * @实例：  /test-html/3.2/dataInteractive/cookie.html；
     * @需要：  无；
     * @备注：  待测试；
     */
    var name=str_name||'',
        value=str_value||'',
        returnValue;
    switch(str_type){
        case 'get':
            returnValue=getCookie(name);
            break;
        case 'set':
            setCookie(name,value);
            break;
        case 'del':
            delCookie(name);
            break;
    }
    function setCookie(name,value){
        //设置cookie,两个参数，一个是cookie的名子，一个是值
        var Days = 30; //此 cookie 将被保存 30 天
        var exp  = new Date();    //new Date("December 31, 9998");
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    function getCookie(name){
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(name + "=");
            if (c_start!=-1)
            {
                c_start=c_start + name.length+1;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1){
                    c_end=document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start,c_end));
            }
        }
        return ""
    }
    function delCookie(name){//删除cookie
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }

    return returnValue||false;
}

$(function(){
    App.run();
});
