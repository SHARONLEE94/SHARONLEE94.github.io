$(function() {

    // 1.네비
    var $nav=$("nav");
    var $window=$(window);
    var navOffsetTop=$nav.offset().top;
    var navHeight = $nav.height()-6;
    var $main=$("main");

    $window.on("scroll",function() {
        var navScrollTop=$window.scrollTop();

        if(navOffsetTop < navScrollTop){
            $nav.addClass("fixed");
            $main.css("marginTop", navHeight);
        } else{
            $nav.removeClass("fixed");
            $main.removeAttr("style");
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

    // 3. media Nav-------------------------------------------------------------------------
    var $subWrap =$("#subwrap > ul");

    $mainMenu.mouseenter(function(){
        var $this = $(this);

        $subWrap.addClass("block")
             .siblings(".block").removeClass("block");

    });


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
