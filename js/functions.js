// Start slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
//End slideshow
// Start accordionordion more information
var moreButton = document.getElementsByClassName("more-button");
var moreInformation = document.getElementsByClassName("more-information");
var information = document.getElementsByClassName("content-information");
moreButton[0].addEventListener("click", function() {  
  	for (var i = 0; i < moreInformation.length; i++) {
  		if (moreInformation[i].style.maxHeight){
			moreInformation[i].style.maxHeight = null;
			information[i].style.height = null;
		} else {
			moreInformation[i].style.maxHeight = moreInformation[i].scrollHeight + "px";
			information[i].style.height = 300 + "px";
		} 
  	}
});
// End accordionordion more information