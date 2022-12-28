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
      if(pos >= ($p4Span.offset().top)*0.9){
        $("#p4Wrap > span").addClass("active");
      }
  });

  //click event
  var $plus =$("#navWrap > img");
  var $mainNav = $("#mainNav");
  var $mainClick = $("#mainNav > ul > li");
  var $subNav = $(".subNav");

  $plus.on("click", function() {
    var $this = $(this);

    $this.toggleClass("change");
    $mainNav.toggleClass("navOpen");
  });


  $mainClick.on("click", openNav);
  
  
  function openNav(event) {
    event.preventDefault();
    
    var $this = $(this);
    var targetSelector = $this.data("target");
    
    $subNav.removeClass("on")
           .filter(targetSelector)
           .addClass("on");

    $mainNav.mouseleave(function() {
      $subNav.removeClass("on");
    });
    return false;
  };
  



});