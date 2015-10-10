$(function() {
    FastClick.attach(document.body);

    var windowWidth=$(window).width();

    $('#pages').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu: '#navBar'
    });

    /*nav*/
    var $body=$('body'),
        $navBtn=$('.nav-btn'),
        $navBtnLine=$('.nav-btn-line');

    /*初始化菜单*/
    initNav();

    $(window).resize(function(){
        windowWidth=$(window).width();
        initNav();
    });
    function initPCNav(){
        $navBtn.mouseenter(function(){
            var $this=$(this);

            $navBtnLine.show().css({
                width:$this.outerWidth()
            }).animate({
                left:$this.position().left
            },200);
        });

        $navBtn.mouseleave(function(){
            $navBtnLine.hide();
            return false;
        });
    }
    function initNav(){

        if(windowWidth<=1024){
            /*mobile nav*/
            var $navBtnIcon=$('.nav-btn-icon');

            //reset
            $navBtnIcon.add($body).unbind('click');
            $navBtn.unbind('mouseenter').unbind('mouseleave');
            $navBtnLine.hide();

            $navBtnIcon.click(function(){
                if($navBtn.is(':visible')){
                    $navBtn.hide();
                }else{
                    $navBtn.show().css({
                        display:'block'
                    });
                }
                return false;
            });

            $body.click(function(){
                setTimeout(function(){
                    $navBtn.hide();
                },200);
            });
        }else{
            //reset
            $navBtn.add($navBtnLine).show().css({
                display:'block'
            });
            $navBtn.unbind('mouseenter').unbind('mouseleave');
            $body.unbind('click');

            initPCNav();
        }
    }

});
