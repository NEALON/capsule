/*
 * Author: Eugene Tsurcan 
 * Front End Developer 
 * [http://twitter.com/eugenetsurcan]
 * 
 */

$.noConflict();

var bpmw = bpmw || {};

(function($) {
	
	// OnLoad 
	bpmw.onload = function() {
		
		/**
		 * Slideshow Flipper
		 */
		var slideshowFlipper = new Swiper('.slideshow-flipper .swiper-container', {
	    mode: 'horizontal',	    
	    grabCursor: true,
	    paginationClickable: true,
	    calculateHeight: true,
	    centeredSlides: true,
	    loopedSlides: 3,
	    loopAdditionalSlides: 3,
	    resizeReInit: true,	    
	    autoplay: 7000,	   
	    loop: true,
	    slidesPerView: 'auto'
	  });
	  
	  // Slideshow Flipper: Next and Prev Slider 
	  $('.slideshow-flipper .prev-slide').on('click', function(e) {
	    e.preventDefault();
	    slideshowFlipper.swipePrev();
	    slideshowFlipper.startAutoplay();
	  });
	  
	  $('.slideshow-flipper .next-slide').on('click', function(e) {
	    e.preventDefault();
	    slideshowFlipper.swipeNext();
	    slideshowFlipper.startAutoplay();
	  });
	  
	};
	
	// Init JS
	bpmw.init = function() {
		// Show Dropdown menu (for touch devices)
		$(document).on('click', '.menu .has-dropdown a', function(e) {
			e.preventDefault();
			
			var parent  = $(this).parents('.has-dropdown'),
					opened	= parent.hasClass('opened');
			
			if(opened){ 
				parent.toggleClass('opened');
			}
			else {
				$('.menu .has-dropdown').removeClass('opened');
				parent.addClass('opened');
			}
		});
		
		// Toggle Menu
		$(document).on('click', '.menu .toggle-menu, .active-menu .wrapper-content', function(e) {
			e.preventDefault();
			
			$('body').toggleClass('active-menu');
		});
		
		// Toggle Dropdown Menu 
		$(document).on('click', function() {
			$('.open > [data-toggle="dropdown"]').parent().removeClass('open');
		});
		
		$(document).on('click', '[data-toggle="dropdown"]', function(e) {
			e.preventDefault();
			e.stopPropagation();
			
			var parent		= $(this).parent();
					isOpened	= parent.hasClass('open');
			
			$('.open > [data-toggle="dropdown"]').parent().removeClass('open');
			
			if(isOpened) {
				parent.removeClass('open');
			}
			else {
				parent.addClass('open');
			}
		});
		
		// Focus Serch Form in Menu
		$('.input-group input').on('focus focusout', function() {
			var parent = $(this).parents('.input-group');
			
			parent.toggleClass('focus');
		});
		
		// To Support Placeholder
		if(!Modernizr.input.placeholder) { $('html').addClass('no-placeholder'); }
	};

	// Document Ready
	$(function($) {
		bpmw.init();
	});

})(jQuery);