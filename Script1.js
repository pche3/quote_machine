$(document).ready(function() {
  $("#getQuote").on("click", function() {                                  
	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&key=cat&format=jsonp&jsonp=?", function(json) {
		 console.log(json.quoteText);
		 console.log(json.quoteAuthor);
		 $('#quote').html(json.quoteText);
		 $('#quoteAuthor').html(json.quoteAuthor);
    });
	$("body").css("background-color", "red");
  });               
});
// JavaScript source code
