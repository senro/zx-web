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
App.page('login',function(){
    this.init = function(){
        //$('.btn-login').on('tap', function(){
        //    $.ajax({
        //        url:''
        //    });
        //});
    }
});
App.page('goodsList',function(){
    this.init = function(){
        $('body').on('tap','.btn-delGoodID',function(){
            var $this=$(this);
            J.confirm('警告','删除xxx商品名称？',function(){
                //J.showToast('已经删除');
                $this.parents('.goodsListItem').remove();
            },function(){
                //J.showToast('取消删除');
            });
        });
        $('.btn-addGoodsID').on('tap', function(){
            var $this=$(this);
            $('.goodsListItems').append(
                '<li class="goodsListItem clearfix">'+
                '<div class="item-inner">'+
                '<span class="item-title">xxx商品名称</span>'+
                '&nbsp;&nbsp;&nbsp;&nbsp;'+
                '<span class="item-text">xxx小区</span>'+
                '</div>'+
                '<a class="btn-del btn-delGoodID" href="javascript:;">'+
                '<i class="icon minus"></i>'+
                '</a>'+
                '</li>'
            );
        });
    }
});
App.page('orderList',function(){
    this.init = function(){
        $('.btn-sendGoods').tap(function(){
            J.confirm('确认','确定要发货？',function(){J.showToast('已经发货')},function(){J.showToast('取消发货')});
        });

        J.Refresh( '#up_refresh_article','pullUp', function(){
            var scroll = this;
            setTimeout(function () {
                var html = '';
                for(var i=0;i<10;i++){
                    html += '<li class="orderListItem clearfix" data-selected="selected">'+
                    '<div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style=\"width: 4rem;\"></div>'+
                    '<div class="item-inner">'+
                    '<div class="item-title-row">'+
                    '<div class="item-title">xxx商品名称</div>'+
                    '</div>'+
                    '<div class="item-text">黄小厨-13525255655</div>'+
                    '</div>'+
                    '<div class="item-after">'+
                    '<i class="icon checkbox-unchecked"></i>'+
                    '</div>'+
                    '</li>';
                }
                $('#up_refresh_article ul.list').append(html);
                scroll.refresh();
                J.showToast('加载成功','success');
            }, 2000);
        })
    }
});
$(function(){
    App.run();
});