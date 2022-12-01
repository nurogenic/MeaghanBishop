;(function( $, window, document, undefined){

	$(this.document).ready(function(){

		$('#flexslider').flexslider({
			direction: "horizontal",
			slideshow: false,
			animation: "fade",
			pauseOnHover: true,
			directionNav: false,
			smoothHeight: true,
			controlsContainer: ".flex-control-thumbs",
			manualControls: ".flex-control-thumbs img"
		});

		$('.email-slider').flexslider({
			selector: ".email-slides > li",
			direction: "horizontal",
			animation: "slide",
			slideshow: false,
			pauseOnHover: true,
			initDelay: 1000,
			directionNav: false
		});

		$('.apparel-slider').flexslider({
			selector: ".apparel-slides > li",
			direction: "horizontal",
			animation: "slide",
			slideshow: false,
			pauseOnHover: true,
			directionNav: false
		});

		$('.bikes-slider').flexslider({
			selector: ".bikes-slides > li",
			direction: "horizontal",
			animation: "slide",
			slideshow: false,
			pauseOnHover: true,
			directionNav: false
		});

		$('.print-slider').flexslider({
			selector: ".print-slides > li",
			direction: "horizontal",
			animation: "slide",
			slideshow: false,
			pauseOnHover: true,
			directionNav: false
		});

		$("a#single_image").fancybox();

		$(".slide-img").fancybox();
	});
	
	// Fix Flexslider fade height issue on load.
	setTimeout(function(){
		$('#flexslider').animate({
			height: "529px"
		},750);
	},500);

}( jQuery, this, this.document ));