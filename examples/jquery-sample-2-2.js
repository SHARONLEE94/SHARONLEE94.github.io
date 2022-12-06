//----------------------------------------------------------------------------
$(function () {
    var $body = $("body");
    var $panel = $("#panel");
    var $pages = $(".page");
    var thisPageIndex = 0;
    var nextPageIndex = 0;
    var lastPageIndex = $pages.length - 1;
    var isAnimated = false;

    //------------------------------------------------------------------------
    // 1 
    // 2 3 4
    //     5
    //     6 7 8 9
    //           10
    var coordiatePages = [
        { top: 0, left: 0 },                // 1
        { top: "-100%", left: 0 },          // 2
        { top: "-100%", left: "-100%" },    // 3
        { top: "-100%", left: "-200%" },    // 4
        { top: "-200%", left: "-200%" },    // 5
        { top: "-300%", left: "-200%" },    // 6
        { top: "-300%", left: "-300%" },    // 7
        { top: "-300%", left: "-400%" },    // 8
        { top: "-300%", left: "-500%" },    // 9
        { top: "-400%", left: "-500%" },    // 10
    ];
    
    //------------------------------------------------------------------------
    $("#debug").on("click", function () {
        $body.toggleClass("debug");
    });

    //------------------------------------------------------------------------
    var $indicator = $("<ol></ol>").attr("id", "indicator");

    $pages.each(function (index) {
        $("<li></li>").append(`<span>${index + 1}</span>`).appendTo($indicator);
    });

    $indicator.appendTo($body);

    var $indicatorItems = $indicator.children();
    $indicatorItems.filter(":first").addClass("on");

    //------------------------------------------------------------------------
    $indicatorItems.on("click", function () {
        if (isAnimated) return;
        if ($(this).is(".on")) return;

        nextPageIndex = $indicatorItems.index(this);

        console.log(`CLICK: thisPageIndex = ${thisPageIndex}, nextPageIndex = ${nextPageIndex}`);

        movePage();
    });

    //------------------------------------------------------------------------
    window.addEventListener("wheel", function (event) {
        if (isAnimated) return;

        if (event.deltaY > 0) {
            if (thisPageIndex >= lastPageIndex) return;
            nextPageIndex = thisPageIndex + 1;
        }
        else if (event.deltaY < 0) {
            if (thisPageIndex <= 0) return;
            nextPageIndex = thisPageIndex - 1;
        }

        console.log(`WHEEL: thisPageIndex = ${thisPageIndex}, nextPageIndex = ${nextPageIndex}`);

        movePage();

    }, { passive: false });

    //------------------------------------------------------------------------
    $("body").on("keydown", function (event) {
        if (isAnimated) return;

        // console.log("KEYDOWN: event.which = " + event.which);

        // arrow down 40, page down 34, arrow up 38, page up 33
        if (event.which == 40 || event.which == 34) {
            if (thisPageIndex >= lastPageIndex) return;
            nextPageIndex = thisPageIndex + 1;
        }
        else if (event.which == 38 || event.which == 33) {
            if (thisPageIndex <= 0) return;
            nextPageIndex = thisPageIndex - 1;
        }

        console.log(`KEYDOWN: thisPageIndex = ${thisPageIndex}, nextPageIndex = ${nextPageIndex}`);

        movePage();
    });

    //------------------------------------------------------------------------
    function movePage() {
        if (isAnimated) return;
        if (thisPageIndex == nextPageIndex) return;

        var step = nextPageIndex > thisPageIndex ? nextPageIndex - thisPageIndex : thisPageIndex - nextPageIndex;
        // var duration = 400 / step;
        var duration = step > 1 ? 200 : 400;
        var pageIndexes = [];

        if (nextPageIndex > thisPageIndex)
            for (var i = thisPageIndex + 1; i < nextPageIndex; i++) pageIndexes.push(i);
        else
            for (var i = thisPageIndex - 1; i > nextPageIndex; i--) pageIndexes.push(i);

        console.group("movePage");
        console.log(`step = ${step}, duration = ${duration}, pageIndexes = `, pageIndexes);

        isAnimated = true;

        $indicatorItems.removeClass("on").eq(nextPageIndex).addClass("on");

        if (step > 1) {
            console.group("for loop");

            for (var i = 0; i < pageIndexes.length; i++) {
                var pageIndex = pageIndexes[i];
                console.log(`LOOP: pageIndex = ${pageIndex}, coordiatePages[${pageIndex}] = `, coordiatePages[pageIndex]);
                $panel.animate(coordiatePages[pageIndex], duration);
            }

            console.groupEnd();
        }

        console.log(`LAST: pageIndex = ${nextPageIndex}, coordiatePages[${nextPageIndex}] = `, coordiatePages[nextPageIndex]);
        
        $panel.animate(coordiatePages[nextPageIndex], duration, function () {
            thisPageIndex = nextPageIndex;
            isAnimated = false;
            
            console.log(`isAnimated = ${isAnimated}`)
            console.groupEnd();
        });
    }

}); // document.onready
