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
 // 2. 화면 움직임(스크롤)
    var $window=$(window);
    var $html=$("html");
    var $scroll=$(".scroll");
    console.log("$scroll");
    console.log($scroll.height());
    var indexNum=0;
    var $last=$(".scroll").length;

    window.addEventListener("wheel", function(event) {
        event.preventDefault();

        if($html.is(":animated")) return;

        var cntScrollTop=$window.scrollTop();
        var pageHeight=$window.height();
        var cntScrollLeft=$window.scrollLeft();
        var pageWidth=$window.width();
        var moveTo = 0;

        if(event.deltaY > 0){

            if(indexNum == $last) return;

            // indexNum++;

            if(indexNum == 0){
                console.log("1페이지");
                moveTopP();
            }
            else if(indexNum == 1){
                console.log("2페이지");
                moveLeftP();
            }
            else if(indexNum == 2) {
                console.log("3페이지");
                moveLeftP();
            }
            else if(indexNum == 3) {
                console.log("4페이지");
                moveTopP();
            }
            else if(indexNum == 4) {
                console.log("5페이지");
                moveTopP();
            }
            else if(indexNum == 5) {
                console.log("6페이지");
                moveLeftP();
            }
            else if(indexNum == 6) {
                console.log("7페이지");
                moveLeftP();
            }
            else if(indexNum == 7) {
                console.log("8페이지");
                moveLeftP();
            }
            else if(indexNum == 8) {
                console.log("9페이지");
                moveLeftP();
            }
            else if(indexNum == 9) {
                console.log("10페이지");
                moveTopP();
            }

            indexNum++;

        }else{
            if(indexNum == 0) return;

            if(indexNum == 1){
                console.log("-1페이지");
                moveTopN();
            }
            else if(indexNum == 2){
                console.log("-2페이지");
                moveLeftN();
            }
            else if(indexNum == 3) {
                console.log("-3페이지");
                moveLeftN();
            }
            else if(indexNum == 4) {
                console.log("-4페이지");
                moveTopN();
            }
            else if(indexNum == 5) {
                console.log("-5페이지");
                moveTopN();
            }
            else if(indexNum == 6) {
                console.log("-6페이지");
                moveLeftN();
            }
            else if(indexNum == 7) {
                console.log("-7페이지");
                moveLeftN();
            }
            else if(indexNum == 8) {
                console.log("-8페이지");
                moveLeftN();
            }
            else if(indexNum == 9) {
                console.log("-9페이지");
                moveTopN();
            }
            indexNum--;
        }

        // 스크롤 이동에 사용된 함수
        function moveTopP(){
            moveTo = cntScrollTop + pageHeight;
            $html.animate({scrollTop:moveTo});
        };
    
        function moveLeftP(){
            moveTo = cntScrollLeft + pageWidth;
            $html.animate({scrollLeft:moveTo});
        };
    
        function moveTopN() {
            moveTo = cntScrollTop - pageHeight;
            $html.animate({scrollTop:moveTo});
        };
    
        function moveLeftN() {
            moveTo = cntScrollLeft - pageWidth;
            $html.animate({scrollLeft:moveTo});
        }
        
    },{ passive:false});

    // 클릭이벤트
    // 인덱스 번호를 바꿔주면?괜찮지 않을까?

    $(".logo").on("click", function() {
        location.reload();
    });
    
    $(".navlist >li").eq(1).on("click", function() {
        console.log("click");
        indexNum=1;
        $("#w_align").css({"width": "0"})
    })
});
