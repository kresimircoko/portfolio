$(function() {

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

	// Smooth Scroll
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	       window.location.hash = target;
	    });
	});
	
});