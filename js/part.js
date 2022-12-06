$(function(){
    //------------------------------------------------------------------------
    // overlay
    var $thumbNails=$(".contents > a");
    var $photo=$("#photo");
    var $overlay=$("#overlay");
    var $close=$("#close");
    var photoIndex = 0;


    $thumbNails.on("click", function(event) {
        event.preventDefault();

        photoIndex = $thumbNails.index(this);

        var src = this.href;
        $photo.attr("src", src);

        $overlay.css({display:"block"});

        $close.on("click", function() {
            $overlay.css({display:"none"});
        });
    });

    //------------------------------------------------------------------------
    //close
    var $closed = $("nav > p > a");

    $closed.on("click", function(event) {
        event.preventDefault();
        window.close();
    });



     
});
