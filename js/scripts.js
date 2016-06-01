$(function() {

	$(function() {
		mobileNav();
		smoothScroll(600);
	});

	// $(window).scroll(function() {
	// 	startAbout();
	// });


	// // Contact Section Social Icons Animations
	// function startContactSocial() {
	// 	var wScroll = $(window).scrollTop();
	//
	// 	if($('.contact-section').offset().top - $(window).height()/1.2 + 40 < wScroll) {
	// 		$('.contact-section a').each(function(i){
	// 			setTimeout(function(){
	// 				$('.contact-section a').eq(i).addClass('shown');
	// 			}, 100 * i);
	// 		});
	// 	}
	// }

	// Smooth Scroll
	function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {

			var target = $( $(this).attr('href') );

			if( target.length ) {
					event.preventDefault();
					$('html, body').animate({
							scrollTop: target.offset().top
					}, duration);
			}
		});
	}

});
