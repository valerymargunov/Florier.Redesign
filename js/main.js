$(document).ready(function(){
  $('.places').hover(function(){
		$('.place').addClass('active-place');
    }, function(){
    	$('.place').removeClass('active-place');
  });
  $('.more-button').hover(function(){
		$('.more-line').addClass('more-line-active');
    }, function(){
    	$('.more-line').removeClass('more-line-active');
  });
  $('.slideshow-content').flexslider({
    animation: "slide",
    controlNav: false,
    prevText: "<em></em>",
    nextText: "<em></em>"
  });
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 280,
    itemMargin: 4
  });
});