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
		 * Slideshow Press (as on About page)
		 */
		var slideshowPress = new Swiper('.slideshow-press .swiper-container', {
	    mode: 'horizontal',	    
	    grabCursor: true,
	    paginationClickable: true,
	    calculateHeight: true,
	    loopAdditionalSlides: 3,
	    resizeReInit: true,	  
	    loop: true,
	    slidesPerView: 3,
	    slidesPerGroup: 3
	  });
	  
	  // Slideshow Press: Next and Prev Slider 
	  $('.slideshow-press .prev-slide').on('click', function(e) {
	    e.preventDefault();
	    slideshowPress.swipePrev();
	  });
	  
	  $('.slideshow-press .next-slide').on('click', function(e) {
	    e.preventDefault();
	    slideshowPress.swipeNext();
	  });
				
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
		
		
		/**
		 * Modals
		 */		
		 
		// Open Modal Slideshow
		$(document).on('click', '[data-modal]', function(e) {
			e.preventDefault();
			
			var modal			= $(this),
					modalUrl	= modal.data('url');
			
			// Test Ajax (need to replace)
			$.ajax({
			  url: modalUrl,
			  cache: false
			}).done(function(html) {
		    $('body').append(html);
		    
		    // Delay
		    setTimeout(function() {
		    	$('body').addClass('modal-open');
		    }, 10);
		  });		  
		});
		
		// Close Modal Slideshow			
		$(document).on('keyup', 'body.modal-open', function(e) {
			// detect escape key press
			if(e.keyCode == 27) {
				$('body').removeClass('modal-open');
				
				// Delay
		    setTimeout(function() {
		    	$('.modal, .modal-backdrop').remove();
		    }, 300);	
			}
		});
		
		$(document).on('click', '.modal .close', function(e) {
			e.preventDefault();
			
			$('body').removeClass('modal-open');
			
			// Delay
	    setTimeout(function() {
	    	$('.modal, .modal-backdrop').remove();
	    }, 300);	
		});
		
		$(document).on('click', '.modal', function(e) {
			$('body').removeClass('modal-open');
			
			// Delay
	    setTimeout(function() {
	    	$('.modal, .modal-backdrop').remove();
	    }, 300);			
		}).on('click', '.modal-dialog', function(e) {
	    e.stopPropagation();
		});
	};

	// Document Ready
	$(function($) {
		bpmw.init();
	});

})(jQuery);