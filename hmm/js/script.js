$(function() {

//scroll Event
var $p2Title = $("#p2_title");
var $p4Span = $("#p4");

  $(window).on("scroll",function(){
      var pos = $("html").scrollTop();
      
      if(pos >= ($p2Title.offset().top)*-0.7){
          var index = 0;

          window.setInterval(function(){
              if(index == 5) return;
              $("#circle>div").eq(index).addClass("move");
              index++;
          },600);
      }
      
      //active
      if(pos >= ($p4Span.offset().top)*0.7){
        $("#p4Wrap > span").addClass("active");
      }
  });

  //click event
  var $plus =$("#navWrap > img")
  $plus.on("click", function() {
    var $this = $(this);

    $this.toggleClass("change");
  });



});