$(function() {

//scroll Event
  $(window).on("scroll",function(){
      var pos = $("html").scrollTop();
      
      if(pos>=($("#p2_title").offset().top)*-0.8){
          var index = 0;

          window.setInterval(function(){
              if(index == 5) return;
              $("#circle>div").eq(index).addClass("move");
              index++;
          },700);
      }
  });

  //click event
  var $plus =$("#navWrap > img")
  $plus.on("click", function() {
    var $this = $(this);

    $this.toggleClass("change");
  });
});