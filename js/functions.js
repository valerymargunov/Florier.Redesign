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