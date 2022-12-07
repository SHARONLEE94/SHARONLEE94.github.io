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
    var $scroll=$(".scroll");
    // console.log("$scroll");
    // console.log($scroll);
    var indexNum=0;
    var $last=$(".scroll").length;
    
    window.addEventListener("wheel", function(event) {
        
        if($scroll.is(":animated")) return;

        if(event.deltaY > 0){
            // console.log("양수");
            if(indexNum == $last-1) return;
            
            indexNum++;
            if(indexNum == 1){
                $scroll.eq(indexNum-1).animate({top:"-100%"});
                $scroll.eq(indexNum).animate({top:"0"});
            }
            if(indexNum == 2){
                $scroll.eq(indexNum-1).animate({left:"-33.33%"});
                $scroll.eq(indexNum).animate({left:"0"});
            }
            if(indexNum == 3){
                $scroll.eq(indexNum-1).animate({left:"-33.33%"});
                $scroll.eq(indexNum).animate({left:"0"});
            }
            if(indexNum == 4){
                $scroll.eq(indexNum-1).animate({top:"-100%"});
                $scroll.eq(indexNum).animate({top:"0%"});
            }
            if(indexNum == 5){
                // $scroll.eq(indexNum-1).animate({top:"-100%"});
                $scroll.eq(indexNum).animate({top:"0%"});
            }
            if(indexNum == 6){
                $scroll.eq(indexNum-1).animate({left:"-100%"});
                $scroll.eq(indexNum).animate({left:"0%"});
            }
            if(indexNum == 7){
                $scroll.eq(indexNum-1).animate({left:"-33.33%"});
                $scroll.eq(indexNum).animate({left:"0%"});
            }
            if(indexNum == 8){
                $scroll.eq(indexNum-1).animate({left:"-33.33%"});
                $scroll.eq(indexNum).animate({left:"0%"});
            }
            if(indexNum == 9){
                $scroll.eq(indexNum-1).animate({top:"-100%"});
                $scroll.eq(indexNum).animate({top:"0%"});
            }
        }else{
            // console.log("음수")
            if(indexNum == 0) return;
            
            if(indexNum == 1){
                $scroll.eq(indexNum-1).animate({top:"0"});
                // $scroll.eq(indexNum).animate({top:"100%"});
            }
            if(indexNum == 2){
                $scroll.eq(indexNum-1).animate({left:"0"});
                $scroll.eq(indexNum).animate({left:"33.33%"});
            }
            if(indexNum == 3){
                $scroll.eq(indexNum-1).animate({left:"0"});
                $scroll.eq(indexNum).animate({left:"33.33%"});
            }
            if(indexNum == 4){
                $scroll.eq(indexNum-1).animate({top:"0"});
                $scroll.eq(indexNum).animate({top:"100%"});
            }
            if(indexNum == 5){
                $scroll.eq(indexNum-1).animate({top:"0"});
                $scroll.eq(indexNum).animate({top:"100%"});
            }
            if(indexNum == 6){
                $scroll.eq(indexNum-1).animate({left:"0"});
                $scroll.eq(indexNum).animate({left:"33.33%"});
            }
            if(indexNum == 7){
                $scroll.eq(indexNum-1).animate({left:"0"});
                $scroll.eq(indexNum).animate({left:"33.33%"});
            }
            if(indexNum == 8){
                $scroll.eq(indexNum-1).animate({left:"0"});
                $scroll.eq(indexNum).animate({left:"33.33%"});
            }
            if(indexNum == 9){
                $scroll.eq(indexNum-1).animate({top:"0"});
                $scroll.eq(indexNum).animate({top:"100%"});
            }
            indexNum--;
        }
    }, {passive:false});
    
    // -----------------------------------------------------------------------------------------------------------------------------------------------------



    

    
    
    
    
    
    
    
    



















});


