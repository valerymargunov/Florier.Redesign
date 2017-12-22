$(document).ready(function(){
  $('.places').hover(function(){
		$('.place').addClass('active-place');
    }, function(){
    	$('.place').removeClass('active-place');
  });
  $('.heart').hover(function(){
		$('.heart').addClass('active-heart');
    }, function(){
    	$('.heart').removeClass('active-heart');
  });
  $('.more-button').hover(function(){
		$('.more-line').addClass('more-line-active');
    }, function(){
    	$('.more-line').removeClass('more-line-active');
  });
});