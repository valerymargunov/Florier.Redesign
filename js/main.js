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
  $('#main-slider').slick({
    slide: 'li',
    dots: false,
    prevArrow: $('.m-left-arrow'),
    nextArrow: $('.m-right-arrow')
  });
  $('#popular-items').slick({
    slide: 'li',
    lazyLoad: 'ondemand',
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.left-arrow'),
    nextArrow: $('.right-arrow')
  });
  $('#instagram').slick({
    slide: 'li',
    lazyLoad: 'ondemand',
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: $('#prev'),
    nextArrow: $('#next')
  });
});