//----------------------------------------------------------------------------
$(function () {
    var $body = $("body");
    var $pages = $(".page");
    var thisPageIndex = 0;
    var nextPageIndex = 0;
    var lastPageIndex = $pages.length - 1;
    var isAnimated = false;
    
    var bottomPageIndexes = [1, 4, 5, 9];
    var leftPageIndexes = [2, 3, 6, 7, 8];

    //------------------------------------------------------------------------
    $("#debug").on("click", function () {
        if ($body.is(".debug")) $body.removeClass("debug");
        else $body.addClass("debug");
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
        turnPage();
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
        // console.log("WHEEL: bottomPageIndexes.indexOf(pageIndex) = " + bottomPageIndexes.indexOf(pageIndex));
        // console.log("WHEEL: leftPageIndexes.indexOf(pageIndex) = " + leftPageIndexes.indexOf(pageIndex));

        turnPage();

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

        console.log(`WHEEL: thisPageIndex = ${thisPageIndex}, nextPageIndex = ${nextPageIndex}`);

        turnPage();
    });

    //------------------------------------------------------------------------
    // 1 
    // 2 3 4
    //     5
    //     6 7 8 9
    //           10
    function turnPage() {
        if (thisPageIndex == nextPageIndex) return;

        /*
        var thisPageStyles = { left: "-100%" };
        var nextPageStyles = { left: 0 };

        // turn the next page
        if (nextPageIndex > thisPageIndex) {
            if (bottomPageIndexes.indexOf(nextPageIndex) >= 0) {
                $pages.eq(nextPageIndex).css({ top: "100%", left: 0 });

                thisPageStyles = { top: "-100%" };
                nextPageStyles = { top: 0 };
            }
            else {
                $pages.eq(nextPageIndex).css({ top: 0, left: "100%" });

                thisPageStyles = { left: "-100%" };
                nextPageStyles = { left: 0 };
            }
        }
        // turn the previous page
        else {
            if (bottomPageIndexes.indexOf(thisPageIndex) >= 0) {
                $pages.eq(nextPageIndex).css({ top: "-100%", left: 0 });

                thisPageStyles = { top: "100%" };
                nextPageStyles = { top: 0 };
            }
            else {
                $pages.eq(nextPageIndex).css({ top: 0, left: "-100%" });

                thisPageStyles = { left: "100%" };
                nextPageStyles = { left: 0 };
            }
        }
        */

        // direction of movement
        var direction = nextPageIndex > thisPageIndex ? 1 : -1;

        // move horizontally or vertically
        var axis = bottomPageIndexes.indexOf(direction == 1 ? nextPageIndex : thisPageIndex) >= 0 ? "top" : "left";

        // style properties
        var nextPagePreStyles = { top: 0, left: 0 };
        var thisPageStyles = {};
        var nextPageStyles = {};

        // set style properties
        nextPagePreStyles[axis] = direction * 100 + "%";
        thisPageStyles[axis] = -direction * 100 + "%";
        nextPageStyles[axis] = 0;

        // pre-set style properties to the next page
        $pages.eq(nextPageIndex).css(nextPagePreStyles);

        isAnimated = true;

        $indicatorItems.removeClass("on").eq(nextPageIndex).addClass("on");

        $pages.eq(thisPageIndex).animate(thisPageStyles);
        $pages.eq(nextPageIndex).animate(nextPageStyles, function () {
            thisPageIndex = nextPageIndex;
            isAnimated = false;
        });
    }

}); // document.onready
