var got_quote = false;
var quote="";
var author="";

/* Function will get a quote from Forismatic APi */
function getAQuote() {
    	$("#quote").fadeOut("slow"); 
   	$("#quoteAuthor").fadeOut("slow"); 
    	$("#buttonShake").effect("shake");
	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&key=cat&format=jsonp&jsonp=?", function(json) {
		$('#quote').html(json.quoteText);
      		quote = json.quoteText;
     		if(json.quoteAuthor != "") {
			$('#quoteAuthor').html(json.quoteAuthor);
       			author = json.quoteAuthor;
      		}
      		else {
        		$('#quoteAuthor').html("Anonymous");
        		author = "Anonymous";
      		}
    	});
    	$("#quote").fadeIn("slow"); 
    	$("#quoteAuthor").fadeIn("slow"); 
    	got_quote = true;  
}

/* Function check for twitter and getQuote button */
$(document).ready(function() {
  	$("#twitter").on("click", function() {
		if(got_quote == true) {
			var share = '"' + quote + '"' + author;
			/* If characters over 140 look for another quote and prevent popup */
			if(share.length <= 140) {
				$("#twitter").attr('target', "_blank");
				$("#twitter").attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(share));
			}
			else {
				$("#twitter").attr('href', "#");
				$("#twitter").attr('target', "");
				getAQuote();
			}
    		}
  	});
  	$("#getQuote").on("click", function() {  
      		getAQuote();
    	});
});

