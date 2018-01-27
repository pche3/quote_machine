$(document).ready(function() {
  $("#getQuote").on("click", function() {   
    $("#quote").fadeOut("slow"); 
    $("#quoteAuthor").fadeOut("slow"); 
    $("#buttonShake").effect("shake");
	  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&key=cat&format=jsonp&jsonp=?", function(json) {
		  $('#quote').html(json.quoteText);
     if(json.quoteAuthor != "")
		  $('#quoteAuthor').html(json.quoteAuthor);
     else
      $('#quoteAuthor').html("Anonymous");
    });
    $("#quote").fadeIn("slow"); 
    $("#quoteAuthor").fadeIn("slow"); 
  });               
});