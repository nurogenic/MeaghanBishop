;(function( $, window, document, undefined){

	function Page(){}

	Page.prototype = {
		_onReady: function(){
			this.setFancyBox();
			this.formAjax();
			this.scrollToInit();
		},
		setFancyBox: function(){
			$(".slide-img").fancybox();
		},
		formAjax: function(){
			var form = document.querySelector('.contactform').querySelector('form');

			$(form).on('submit', function(evt){
				evt.preventDefault();
				var $form = $(this);

				$.ajax({
					method: 'POST',
					url: window.location.href+'/processContact.php',
					data: $form.serializeArray()
				}).then(function(response){
					var data = JSON.parse(response);
					if(data.success){
						$form.find("input[type='text'], input[type='email'], textarea").val("");
					}

					$form.find('.outputMessage').text(data.message);
					
				});
			});
		},
		scrollToInit: function(){
			var self = this;

			$('.head').on('click', '.logo, .icons, .nav li', function(){
				var $el = $(this);
				if($el.hasClass('contact')){
					self.scrollTo('.footer');
				} else {
					self.scrollTo('.main');
				}
			});
		},
		scrollTo: function(cssSelector){
			$('html, body').stop().animate({
		        scrollTop: $(cssSelector).offset().top
		    }, 1000);
		}
	};

	var page = new Page();

	$(this.document).ready(function(){
		page._onReady();
	});



}( jQuery, this, this.document ));