
	/**  
		scroll to element function
	**/
		function scrollToElement(selector, time, verticalOffset) {
			time = typeof(time) != 'undefined' ? time : 500;
			verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
			element = $(selector);
			offset = element.offset();
			offsetTop = offset.top + verticalOffset;
			$('html, body').animate({
				scrollTop: offsetTop
			}, time);			
		}
		
	/**  
		document ready
	**/		
		$(document).ready(function() {
		
			/* scroll to #navigation */
				
				$('#about-link').click(function (e) {
					e.preventDefault();
					scrollToElement('#about-me', 400, -40);
				});

				$('#skills-link').click(function (e) {
					e.preventDefault();
					scrollToElement('#skills', 400, -60);
				});
				
				$('#experience-link').click(function (e) {
					e.preventDefault();
					scrollToElement('#experience', 400, 70);
				});
				
				$('#mywork-link').click(function (e) {
					e.preventDefault();
					scrollToElement('#my-work', 400, -60);
				});
				
				$('#contact-link').click(function (e) {
					e.preventDefault();
					scrollToElement('#contacts', 400, -60);
				});
				
			
		});
	