// 포트폴리오 스크립트

// 1. 타이핑
$(function() {
    // 1. 타이핑 효과를 줄 문구를 작성하기
    // 2. 타이핑 효과를 위해 한 글자씩 접근하기 위해 index = 0;으로 변수를 선언
    // 3. 텍스트 컨텐츠에 인덱스 값을 하나씩 넣어주는 함수를 작성하기
    // 4. 인덱스 값이 컨텐츠의 길이보다 길어졌을 때, 텍스트 컨텐츠를 초기화 해주고
    //      인덱스 값도 초기화 하여 처음부터 다시 작성할 구 있도록 작성
    // 5. 마지막으로 setInterval(함수, ms)를 통해 타이핑 함수를 주기적으로 동작하도록 하기

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

});

// -------------------------------------------------------------------
//2. 마우스 휠 이벤트(좌우이동)
$(function() {

    // 짝수_홀수 페이지 구역 나눠서 해보기!

    var $window = $(window);
    var $html = $("html");

    window.addEventListener("wheel", function(event) {
        event.preventDefault();
        if($html.is(":animated")) return;

        var deltaY = event.deltaY;

        var cntScrollLeft = $window.scrollLeft();
        var pageWidth = $window.width();

        var moveTo = 0;
        if(deltaY > 0){
            moveTo = cntScrollLeft + pageWidth;
        } else if(deltaY < 0) {
            moveTo = cntScrollLeft - pageWidth;
        }

        $html.animate({scrollLeft:moveTo});

    }, {passive:false});

    
});
