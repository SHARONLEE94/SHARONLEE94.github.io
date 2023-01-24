$(function() {

// 1. fixedNav---------------------------------------------------------------------------------
var $navArea=$("#nav_area");
var navOffsetTop=$navArea.offset().top;
    var $conWrap=$("#contentsWrap");
    var navAreaHeight = $navArea.height();
    
    $(window).on("scroll",function() {
        var navScrollTop=$(window).scrollTop();
        
        if(navOffsetTop < navScrollTop){
            $navArea.addClass("fix");
            $conWrap.css("marginTop", navAreaHeight);
        } else{
            $navArea.removeClass("fix");
            $conWrap.removeAttr("style");
        }
    });
    
// 2. subNav---------------------------------------------------------------------------------

var $mainNavCons = $("#main_nav > li");
var $subWrapCons = $(".subwrap_contents");

$mainNavCons.mouseenter(navMouseEvent);

function navMouseEvent() {
    
    var $this = $(this);
    
    $this.addClass("on")
         .siblings(".on").removeClass("on");
    
    var targetSelector = $this.data("target");
    
    $subWrapCons.removeClass("on")
                .filter(targetSelector)
                .addClass("on");
    
    $("nav").mouseleave(function() {
        $subWrapCons.removeClass("on");
        $mainNavCons.removeClass("on");
    });  
};

// 2. slide---------------------------------------------------------------------------------
var $slideWrap = $("#slide_wrap");
var $slide = $("#slide");
var delay = 4000;
var duration = 1000;
var timerId = 0;
var isAnimated = false;
var photoIndex = 0;


// imgslide
timerId = window.setInterval(imgSlide , delay);


// hoverStop
$slide.hover(
    function() {
        window.clearInterval(timerId);
    },
    function() {
        timerId = window.setInterval(imgSlide, delay);
    }
);


// bulet
var $slideBullet = $("<div></div>")
                    .attr("id","slide_bullet")
                    .appendTo($slide);

$slideWrap.children().each(function() {
    $("<button></button>").appendTo($slideBullet);
});


// bulletMove
var $slideBulletList = $slideBullet.find("button");
$slideBulletList.eq(photoIndex).addClass("on");

$slideBulletList.on("click",function() {

    if(isAnimated) return;

    var clickIndex = $slideBulletList.index(this);

    var move = clickIndex - photoIndex;

    photoIndex = clickIndex;
    $slideBulletList.removeClass("on")
                    .eq(photoIndex).addClass("on");

    if(move > 0) {
        $slideWrap.animate({left:move*(-100) + "%"}, duration, function() {
            $slideWrap.removeAttr("style")
                        .children(":lt(" + move + ")")
                        .appendTo(this);
        });
    }else{
        $slideWrap
            .children(":gt("+(move-1)+")").prependTo($slideWrap)
            .end()
            .css({left:move+ 100 + "%"}).animate({left:0}, duration);
    }
});


// imgSlide 함수
function imgSlide () {

    if(isAnimated) return;

    // ㄱ.bullet Move
        photoIndex++;

        if(photoIndex == $slideBulletList.length) photoIndex = 0;

        $slideBulletList.removeClass("on")
                        .eq(photoIndex).addClass("on");

    // ㄴ. slide
        $slideWrap.animate({"left" : "-100%"}, duration, function(){

            $slideWrap.append($slideWrap.children(":first"))
                      .removeAttr("style");

        });
};

//menu-starter
var $navWrapEl = $("#nav_wrap");
var $menuStarterEl = $("#nav_wrap .menu-starter");
    $menuStarterEl.on("click", function() {
    if($navWrapEl.hasClass("menuing")) {
        $navWrapEl.removeClass("menuing");
    }else{
        $navWrapEl.addClass("menuing");
    }
  });


// 3.pointer
var $pointerButton = $(".pointer_button > div");
var $points = $(".point");

$pointerButton.on("click", function() {

    var $this = $(this);

    $this.addClass("twinkle")
           .siblings(".twinkle").removeClass("twinkle");
    
    var $pointsSelector = $this.data("pointer");

    $points.removeClass("twinkle")
            .filter($pointsSelector)
            .addClass("twinkle");
    
});

// 4. scrollEvent
var $scrollEvent = $(".scrollEvent");
var $window = $(window);
    
    $window.on("scroll", function() {
        var scrollTop = $window.scrollTop() + $window.height();

        $scrollEvent.each(function(){
            var $this = $(this);
            var offsetTop = $this.offset().top + $this.height()*0.5;

            if(scrollTop >= offsetTop) {
                if($scrollEvent.hasClass("one")){
                    $this.addClass("showOne");
                }
                if($scrollEvent.hasClass("two")){
                    $this.addClass("showTwo");
                }
                if($scrollEvent.hasClass("three")){
                    $this.addClass("showThree");
                }
            }else if(scrollTop < offsetTop){
                if($scrollEvent.hasClass("one")){
                    $this.removeClass("showOne");
                }
                if($scrollEvent.hasClass("two")){
                    $this.removeClass("showTwo");
                }
                if($scrollEvent.hasClass("three")){
                    $this.removeClass("showThree");
                }
            }
        });
    });;


// 5. search
var $search=$("#search > a");
var $searchPage = $("#search_page");
var $exit = $("#search_page > span");

$search.on("click", function() {
    $searchPage.css("display", "block");
});

$exit.on("click", function() {
    $searchPage.removeAttr("style");
});

// 6. submit event
var $reserveForm = $("#re_con1");
var $reserveName = $("#reserve_name");
var $reservePhone = $("#reserve_phone");
var $reserveBtn = $("#reserve_btn");
var $pw4 = $("#pw4");
var $title = $("#title");
var $textCon= $("#textarea-contents");

$reserveName.focusout(focusValue);
$reserveName.focusin(focusReset);
$reservePhone.focusout(focusValue);
$reservePhone.focusin(focusReset);

$pw4.focusout(focusValue2);
$pw4.focusin(focusReset);
$title.focusout(focusValue);
$title.focusin(focusReset);
$textCon.focusout(focusValue);
$textCon.focusin(focusReset);


    // 기능1.
    function focusValue() {
        var $this = $(this);
        var $length = $this.val().length;
        
        if($length== 0){
            $this.css({
                "border":"2px solid #eb1358"
            });
        }else{
            $this.removeAttr("style");
        }
    }
    
    function focusValue2() {
        var $this = $(this);
        var $length = $this.val().length;
        
        if($length == 0){
            $this.css({
                "border":"2px solid #eb1358",
            });
        }else if($length < 4){
            $this.css({
                "border":"2px solid gold"
            });
            alert("4글자 이상 입력하세요.");
        }else{
            $this.removeAttr("style");
        }
    }
    
    // 기능2.
    function focusReset() {
    var $this = $(this);

    $this.removeAttr("style");  
}

// 7.초진/재진
    var $buttons=$("#re_con2 > input[type=button]");

    $buttons.on("click", function() {

        $(this).addClass("check")
            .siblings(".check").removeClass("check");

    });



















});