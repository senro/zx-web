$(function() {
    FastClick.attach(document.body);

    var windowWidth=$(window).width();

    var runPage;
    runPage = new FullPage({
        id: 'pages',
        slideTime: 500,
        effect: {
            transform: {
                translate: 'Y',
                scale: [1, 1],
                rotate: [0, 0]
            },
            opacity: [0, 1]
        },
        mode: 'wheel,touch,nav:navBar',
        easing: 'ease',
        callback: function(index, thisPage){


        }

    });

    /*nav*/
    var $body=$('body'),
        $navBtn=$('.nav-btn'),
        $navBtnLine=$('.nav-btn-line');

    $navBtn.click(function(){
        runPage.go($(this).index());
        return false;
    });

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
    });

    /*移动端菜单*/
    initMobileNav();

    $(window).resize(function(){
        windowWidth=$(window).width();
        initMobileNav();
    });

    function initMobileNav(){

        if(windowWidth<=1024){
            /*mobile nav*/
            var $navBtnIcon=$('.nav-btn-icon');

            $navBtnIcon.add($body).unbind('click');

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
            $navBtn.show();
            $body.unbind('click');
        }
    }
});
