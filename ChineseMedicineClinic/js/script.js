$(function() {

    // 1.네비
    var $mainNav=$("#nav");
    var navOffsetTop=$mainNav.offset().top;
    var $con=$("#all-con");
    var $introNav=$("#intronav");
    var mainnavHeight = $mainNav.height() + $introNav.height();

    $(window).on("scroll",function() {
        var navScrollTop=$(window).scrollTop();

        if(navOffsetTop < navScrollTop){
            $mainNav.addClass("fixed");
            $introNav.addClass("fix");
            $con.css("marginTop", mainnavHeight);
        } else{
            $mainNav.removeClass("fixed");
            $introNav.removeClass("fix");
            $con.removeAttr("style");
        }
    });

    
    // 2. sub 네비----------------------------------------------------
    var $mainMenu = $("#mainmenu > li");
    var $subwrapContents = $(".subwrap-contents");

    // $mainMenu.on("click", navMouseEvent);

    $mainMenu.mouseenter(navMouseEvent);

    function navMouseEvent() {

        var $this = $(this);
        
        $this.addClass("on")
             .siblings(".on").removeClass("on");
        
        var targetSelector = $this.data("target");

        $subwrapContents.removeClass("on")
                        .filter(targetSelector)
                        .addClass("on");

        $("nav").mouseleave(function() {
            $subwrapContents.removeClass("on");
        });  
    };

    
    // 슬라이드------------------------------------------------------------
    // 1. 슬라이드 움직임
    var $slideWrap = $("#slide-wrap");
    var $slide = $("#slide");
    var delay = 2000;
    var duration = 400;
    var timerId = 0;
    var photoIndex = 0;
    var isAnimated = false;

    timerId = window.setInterval(slideImage, delay);
    
    // ㄴ. 슬라이드 영역 mouseenter하면 슬라이드 정지, mouseleave하면 슬라이드 작동-----------
    $slide.hover(
        function() {
            window.clearInterval(timerId);
        },
        function() {
            timerId = window.setInterval(slideImage, delay);
        }
    );
    
    // ㄷ-ⓐ-------------------------------------------------------------------------------
    var $slideBullet = $("<div></div>")
                        .attr("id","slide-bullet")
                        .appendTo($slideWrap);
                        
    $slide.children().each(function() {
        $("<button></button>").appendTo($slideBullet);
    });

    var $slideBulletList = $slideBullet.find("button");
    $slideBulletList.eq(photoIndex).addClass("on");

    // slideImage 함수--------------------------------------------------------------------
    function slideImage() {
        
        if(isAnimated) return;

        // ㄷ-ⓑ. bullet기능 추가
        photoIndex++;

        if(photoIndex == $slideBulletList.length) photoIndex = 0;
        $slideBulletList.removeClass("on")
                    .eq(photoIndex).addClass("on");
                    
        // ㄱ. 슬라이드 작동(기본)
        $slide.animate({left:"-100%"}, duration, function() {
            $slide.append($slide.children(":first"))
                  .removeAttr("style");
        });
    };

    // ㄹ. bullet 버튼으로 이동
    $slideBulletList.on("click",function() {

        if(isAnimated) return;

        var clickIndex = $slideBulletList.index(this);

        var move = clickIndex - photoIndex;

        photoIndex = clickIndex;
        $slideBulletList.removeClass("on")
                    .eq(photoIndex).addClass("on");

        if(move > 0) {
            $slide.animate({left:move*(-100) + "%"}, duration, function() {
                $slide.removeAttr("style")
                      .children(":lt(" + move + ")").appendTo(this);
            });
        }else{
            $slide
                .children(":gt("+(move-1)+")").prependTo($slide)
                .end()
                .css({left:move+ 100 + "%"}).animate({left:0}, duration);
        }
    }); 


    // -------------------------------------------------------------------------------------
    // 초진/재진 버튼기능
    var $buttons=$(".two > input[type=button]");

    $buttons.on("click", function() {

        $(this).addClass("check")
            .siblings(".check").removeClass("check");

    });

    // 빨간색원 반짝이는거-------------------------------------------------------------------
    var $circle = $("#circle >li");
    var $points = $(".point");

    $circle.on("click", function() {
        
        var $this = $(this);

        $this.addClass("twinkle")
               .siblings(".twinkle").removeClass("twinkle");
        
        var $pointsSelector = $this.data("pointer")
        ;
        $points.removeClass("twinkle")
                .filter($pointsSelector)
                .addClass("twinkle");
        
    });


    // 스크롤 시 이미지 나타내기---------------------------------------------------------------
    var $scrollEvent = $(".scrollEvent");
    var $window = $(window);
    var Index = 0;
    
    
    $window.on("scroll", function() {
        var scrollTop = $window.scrollTop() + $window.height();

        $scrollEvent.each(function(){
            var $this = $(this);
            var offsetTop = $this.offset().top + $this.height();

            if(scrollTop >= offsetTop) {
                if($scrollEvent.hasClass("0")){
                    $this.addClass("showcom");
                }
                if($scrollEvent.hasClass("1")){
                    $this.addClass("showcir");
                }
                if($scrollEvent.hasClass("2")){
                    $this.addClass("showThera");
                }
                if($scrollEvent.hasClass("3")){
                    $this.addClass("showNon1");
                }
                if($scrollEvent.hasClass("4")){
                    $this.addClass("showNon2");
                }
                if($scrollEvent.hasClass("5")){
                    $this.addClass("showArti");
                }
                if($scrollEvent.hasClass("6")){
                    $this.addClass("showVihi");
                }
                if($scrollEvent.hasClass("7")){
                    $this.addClass("showInfo");
                }

            }else if(scrollTop < offsetTop){

                if($scrollEvent.hasClass("0")){
                    $this.removeClass("showcom");
                }
                if($scrollEvent.hasClass("1")){
                    $this.removeClass("showcir");
                }
                if($scrollEvent.hasClass("2")){
                    $this.removeClass("showThera");
                }
                if($scrollEvent.hasClass("3")){
                    $this.removeClass("showNon1");
                }
                if($scrollEvent.hasClass("4")){
                    $this.removeClass("showNon2");
                }
                if($scrollEvent.hasClass("5")){
                    $this.removeClass("showArti");
                }
                if($scrollEvent.hasClass("6")){
                    $this.removeClass("showVihi");
                }
                if($scrollEvent.hasClass("7")){
                    $this.removeClass("showInfo");
                }

            }
        });
    });;


    // 모달창
    // 페이지 들어가면 첫 페이지에 모달창 띄우기

    // --------------------------------------------------------------------------------------
    // page1---------------------------------------------------------------------------------
    var $asideName =$("#aside > ul > li");
    var $asidesub = $(".asidesub");

    $asideName.hover(function() {
        $(this).find($asidesub).slideDown();
    }, function() {
        $(this).find($asidesub).slideUp();
    });

    // page2-----------------------------------------------------------------------------------





















});    
