$(function() {
    
    // 1. 타이핑
    function typing () {

        var typingBool = false;
        var typingIdx = 0;
        var liIndex = 0;
        var $liLength = $(".typing-text > li").length;
        var $typingTxt =$(".typing-text > li").eq(liIndex).text();
        
        // 한 글자씩 쪼개기
        $typingTxt = $typingTxt.split("");
    
        if(typingBool == false){

            typingBool == true;
    
            var tyInt = setInterval(typing, 200);
        }
    
        function typing() {
            if(typingIdx < $typingTxt.length) {
               $(".typing").append($typingTxt[typingIdx]);
               typingIdx++;

            } else {
                if(liIndex >= $liLength-1){
                    liIndex=0;
                } else{
                    liIndex++;
                }
    
                typingIdx=0;
                typingBool=false;
                $typingTxt = $(".typing-text > li").eq(liIndex).text();
    
                clearInterval(tyInt);
                
                setTimeout(function() {
                    $(".typing").html("");
                    tyInt = setInterval(typing, 200);
                }, 1000);
                
            }
        }

    };

    typing();

 // -----------------------------------------------------------------------------------------------------------------------------------------------------
 // 2. 휠
    
    var $body = $("body");
    var $scroll = $(".scroll");
    var thisPageIndex = 0;
    var nextPageIndex = 0;
    var isAnimated = false;
    var lastPageIndex = $scroll.length-1;
    var bottomPageIndexes = [1,4,5,9];
    var $navList = $(".navlist>li>a");
    var $header = $("header");
    
    // nav 클릭 이벤트
    $navList.on("click", function(event) {
        event.preventDefault();
        
        if(isAnimated) return;
        
        if($navList.index(this) == 0){
            nextPageIndex = 0;
        } else if($navList.index(this) == 1){
            nextPageIndex = 1;
        } else if($navList.index(this) == 2){
            nextPageIndex = 5;
        } else if($navList.index(this) == 3){
            nextPageIndex = 9;
        }
        console.log("nextpageIndex");
        console.log(nextPageIndex);
        // nextPageIndex = $navList.index(this);
        
        turnPage();
    });
    
    
    // -----------------------------------------------------------------
    // wheel 이벤트 
    window.addEventListener("wheel", function(event) {
        var duration1 = "500ms";
        var duration2 = "1000ms";
        var duration3 = "4000ms";
        var duration4 = "4500ms";

        if(isAnimated) return;
        
        if(event.deltaY > 0) {
            
            if(thisPageIndex >= lastPageIndex) return;
            
            nextPageIndex = thisPageIndex +1; //++

            // navBar
            if(nextPageIndex == 0 || nextPageIndex == 9){
                $header.css("display", "none");
            }else{
                $header.css("display", "block");
            }

            // animation
            if(nextPageIndex == 1){
                $("#helloLetter")
                    .animate({
                        opacity : 1,
                        right:0,
                        transitionDuration: duration1
                    });
            }
            else if(nextPageIndex == 2){
                $("#strength")
                    .animate({
                        opacity :1,
                        left: 0,
                        transitionDuration: duration2
                    });
                $("#weaknesses")
                    .animate({
                        opacity : 1,
                        right:0,
                        transitionDuration: duration2
                    });
            }
            else if(nextPageIndex == 3){
                $("#opportunities")
                    .animate({
                        opacity :1,
                        top: 0,
                        transitionDuration: duration2
                    });
                $("#threats")
                    .animate({
                        opacity : 1,
                        bottom:0,
                        transitionDuration: duration2
                    });
            }else if(nextPageIndex == 4){
                // bettery fill
                $(".fill > .betterywave1")
                    .animate({
                        left:"-48%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave3")
                    .animate({
                        left:"-47%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave4")
                    .animate({
                        left:"-49%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave6")
                    .animate({
                        left:"-48%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave7")
                    .animate({
                        left:"-59%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave9")
                    .animate({
                        left:"-60%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave10")
                    .animate({
                        left:"-51%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave12")
                    .animate({
                        left:"-52%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave13")
                    .animate({
                        left:"-44%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave15")
                    .animate({
                        left:"-45%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave16")
                    .animate({
                        left:"-46%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave18")
                    .animate({
                        left:"-44%",
                        transitionDuration: duration4
                    });
            }
  
            
        } else if(event.deltaY < 0) {
            
            if(thisPageIndex <= 0) return;
            
            nextPageIndex = thisPageIndex -1; //--
            
            // navBar
            if(nextPageIndex == 0 || nextPageIndex == 9){
                $header.css("display", "none");
            }else{
                $header.css("display", "block");
            }

            // animation
            if(nextPageIndex == 1){
                $("#helloLetter")
                    .animate({
                        opacity : 1,
                        right:0,
                        transitionDuration: duration1
                    });
            }
            else if(nextPageIndex == 2){
                $("#strength")
                    .animate({
                        opacity :1,
                        left: 0,
                        transitionDuration: duration2
                    });
                $("#weaknesses")
                    .animate({
                        opacity : 1,
                        right:0,
                        transitionDuration: duration2
                    });
            }
            else if(nextPageIndex == 3){
                $("#opportunities")
                    .animate({
                        opacity :1,
                        top: 0,
                        transitionDuration: duration2
                    });
                $("#threats")
                    .animate({
                        opacity : 1,
                        bottom:0,
                        transitionDuration: duration2
                    });
            }else if(nextPageIndex == 4){
                // bettery fill
                $(".fill > .betterywave1")
                    .animate({
                        left:"-48%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave3")
                    .animate({
                        left:"-47%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave4")
                    .animate({
                        left:"-49%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave6")
                    .animate({
                        left:"-48%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave7")
                    .animate({
                        left:"-59%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave9")
                    .animate({
                        left:"-60%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave10")
                    .animate({
                        left:"-51%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave12")
                    .animate({
                        left:"-52%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave13")
                    .animate({
                        left:"-44%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave15")
                    .animate({
                        left:"-45%",
                        transitionDuration: duration4
                    });
                $(".fill > .betterywave16")
                    .animate({
                        left:"-46%",
                        transitionDuration: duration3
                    });
                $(".fill > .betterywave18")
                    .animate({
                        left:"-44%",
                        transitionDuration: duration4
                    });
            }


        }
        
        turnPage();
        
    }, {passive:false});

    
    // -----------------------------------------------------------------
    // keydown 이벤트
    $body.on("keydown", function(event) {
        if(isAnimated) return;

        if(event.which == 40 || event.which == 34) {
            if(thisPageIndex >= lastPageIndex) return;
            
            nextPageIndex = thisPageIndex+1;
        }else if(event.which == 38 || event.which ==33) {
            if(thisPageIndex <= 0) return;
            
            nextPageIndex = thisPageIndex-1;
        }
        
        // animation
        if(nextPageIndex == 1){
            $("#helloLetter")
                .animate({
                    opacity : 1,
                    right: 0,
                    transitionDuration: duration1
                });
        }
        else if(nextPageIndex == 2){
            $("#strength")
                .animate({
                    opacity :1,
                    left: 0,
                    transitionDuration: duration2
                });
            $("#weaknesses")
                .animate({
                    opacity : 1,
                    right:0,
                    transitionDuration: duration2
                });
        }
        else if(nextPageIndex == 3){
            $("#opportunities")
                .animate({
                    opacity :1,
                    top: 0,
                    transitionDuration: duration2
                });
            $("#threats")
                .animate({
                    opacity : 1,
                    bottom:0,
                    transitionDuration: duration2
                });
        }else if(nextPageIndex == 4){
            // bettery fill
            $(".fill > .betterywave1")
                .animate({
                    left:"-48%",
                    transitionDuration: duration3
                });
            $(".fill > .betterywave3")
                .animate({
                    left:"-47%",
                    transitionDuration: duration4
                });
            $(".fill > .betterywave4")
                .animate({
                    left:"-49%",
                    transitionDuration: duration3
                });
            $(".fill > .betterywave6")
                .animate({
                    left:"-48%",
                    transitionDuration: duration4
                });
            $(".fill > .betterywave7")
                .animate({
                    left:"-59%",
                    transitionDuration: duration3
                });
            $(".fill > .betterywave9")
                .animate({
                    left:"-60%",
                    transitionDuration: duration4
                });
            $(".fill > .betterywave10")
                .animate({
                    left:"-51%",
                    transitionDuration: duration3
                });
            $(".fill > .betterywave12")
                .animate({
                    left:"-52%",
                    transitionDuration: duration4
                });
            $(".fill > .betterywave13")
                .animate({
                    left:"-44%",
                    transitionDuration: duration3
                });
            $(".fill > .betterywave15")
                .animate({
                    left:"-45%",
                    transitionDuration: duration4
                });
            $(".fill > .betterywave16")
                .animate({
                    left:"-46%",
                    transitionDuration: duration3
                });
            $(".fill > .betterywave18")
                .animate({
                    left:"-44%",
                    transitionDuration: duration4
                });

        }
        
        turnPage();
    });
    
    
    // -----------------------------------------------------------------
    // turnPage 함수
    function turnPage () {
        if(thisPageIndex == nextPageIndex) return;
    
        // 움직임 방향
        var direction = 0;
        if(nextPageIndex > thisPageIndex) {
            direction = 1;
            // console.log("direction = 1");
        }else{
            direction = -1;
            // console.log("direction = -1");
        };
        // var direction=nextPageIndex>thisPageIndex?1:-1;
    
        // 수평 또는 수직 이동
        // var directionPage = 0;
        // if(direction = 1){
        //     directionPage = nextPageIndex;
        // } else{
        //     directionPage = thisPageIndex;
        // }
        // var axis = 0;
        // if(bottomPageIndexes.indexOf(directionPage >= 0)){
        //     axis="top";
        // } else{
        //     axis="left";
        // }
        var axis = bottomPageIndexes.indexOf(direction == 1 ?nextPageIndex :thisPageIndex)>=0 ?"top":"left";
    
    
        // 스타일 속성
        var nextPagePreStyles = {top:0, left:0};
        var thisPageStyles = {};
        var nextPageStyles = {};
        nextPagePreStyles[axis] = direction*100 + "%";
        thisPageStyles[axis] = -direction*100 + "%";
        nextPageStyles[axis] = 0;
        
        // 다음 페이지를 위해 미리 준비할 스타일 속성
        $scroll.eq(nextPageIndex).css(nextPagePreStyles);
        
        isAnimated = true;

        $scroll.eq(thisPageIndex).animate(thisPageStyles);

        $scroll.eq(nextPageIndex).animate(nextPageStyles, function() {

            thisPageIndex = nextPageIndex;

            isAnimated = false;
        });
    };

    // -----------------------------------------------------------------
    // 새창열기
    var $page7Open = $("#page7 > p > a");
    var $page9Open = $("#page9 > p > a");
    var $page11Open = $("#page11 > p > a");
    
    $page7Open.on("click", openPage);
    $page9Open.on("click", openPage);
    $page11Open.on("click", openPage);
    
    function openPage (event) {
        event.preventDefault();
        window.open(this.href);
    }
    

    // -----------------------------------------------------------------
    // 
    
});
