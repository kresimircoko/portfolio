$(function() {

	// Responsive Menu

	// $('.drawer').click(function() {
	// 	$('.menu-mobile-main-menu-container').slideToggle();
	// 	$(this).toggleClass('drawer-active');
	// 	$(this).parent().toggleClass('open');
	// });

	// Site Heading Animations
	setTimeout(function() {
		$('.site-heading').addClass('shown');
		$('.main-nav').addClass('shown');
		$('.section-heading').addClass('shown');
	}, 300);

	$(window).scroll(function () {
			var wScroll = $(this).scrollTop(); // Window Scroll Variable

			if(wScroll > $('.about-section').offset().top - ($(window).height() / 1.2)) {
				$('.subsection').each(function(i) {
					setTimeout(function() {
						$('.subsection').eq(i).addClass('shown');
					}, 200 * (i+1));
				});
			}
		});

	
});