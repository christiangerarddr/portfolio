window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
	$("#myBtn").css('opacity', '1');
	$("#myBtn").css('transition', '1s');
  } else {
	$("#myBtn").css('opacity', '0');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}