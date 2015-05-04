//
// jQuery Lock Plugin
//
(function ( $ ) {
    $.fn.lock = function( options ) {
	// Keep the reference for later usage
	var elements = this;
	
	// Save the html of the elements		
	var savedHtmlList = elements.map(function(i, el){
		return $(el).html();
	});
		
        // Options
        var settings = $.extend({
            // Default options
            customHandler: null, // Function
            alertMessage: null 	 // String
        }, options );
		
	// Check for DOM changes
	$(elements).on('DOMSubtreeModified', function() {
		var savedHtml = savedHtmlList[elements.index(this)];
		var updatedHtml = $(this).html();
		//Check if there is a change in the element HTML
		if(updatedHtml != savedHtml){
			// If a customHandler is defined, call it and don`t continue
			if(settings.customHandler)
				settings.customHandler(updatedHtml, savedHtml);
			else
				$(this).html(savedHtml);
			// If the alertMessage was set, send the alert
			if(settings.alertMessage)
				alert(settings.alertMessage);				
		}
	});
        // Support chaining
        return elements;
    };
}( jQuery ));
