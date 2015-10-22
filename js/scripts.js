$(function() {

	$(function() {
		mobileNav();
		smoothScroll(600);
		interestsBGStuff();
		//workBGStuff();
	});

	$(window).scroll(function() {
		startAbout();

		startAchievementsHeading();
		startAchievements();

		startInterestsHeading();
		// startInterests();

		startWorkHeading();
		startWork();

		startContact();
	});

	// Mobile Navigation
	function mobileNav() {
	  $('.hamburger').on('click', function() {
	    $('.hamburger, .mobile-nav').toggleClass('is-open');
	  });
	}

	// Site Heading Animations
	setTimeout(function() {
		$('.site-heading').addClass('shown');
		$('.main-nav').addClass('shown');
		$('.about-section .section-heading').addClass('shown');
	}, 300);

	// About Section Animations
	function startAbout() {
		var wScroll = $(window).scrollTop();

		if($('.about-section').offset().top - $(window).height()/1.2 < wScroll) {
			$('.about-section .half-section').each(function(i){
				setTimeout(function(){
					$('.about-section .half-section').eq(i).addClass('shown');
				}, 100 * i);
			});
		}
	}

	// Achivements Heading Animation
	function startAchievementsHeading() {
		var wScroll = $(window).scrollTop();

		if($('.achievements-section').offset().top - $(window).height()/1.2 - 160 < wScroll) {
			setTimeout(function() {
				$('.achievements-section .section-heading').addClass('shown');
			}, 300);
		}
	}

	// Achivements Section Animations
	function startAchievements() {
		var wScroll = $(window).scrollTop();

		if($('.achievements-section').offset().top - $(window).height()/1.2 + 350 < wScroll) {
			$('.achievements-section .third-section').each(function(i){
				setTimeout(function(){
					$('.achievements-section .third-section').eq(i).addClass('shown');
				}, 100 * i);
			});
		}
	}

	// Interests Heading Animation
	function startInterestsHeading() {
		var wScroll = $(window).scrollTop();

		if($('.interests-section').offset().top - $(window).height()/1.2 - 160 < wScroll) {
			setTimeout(function() {
				$('.interests-section .section-heading').addClass('shown');
			}, 300);
		}
	}

	// Interests Section Animations


	// Interests BG Changes on hover
	function interestsBGStuff() {
		$('.interests-section .subsection').hover(function(){
			$('#floating-subsection h1').css('background-color', $(this).data('color'));
		}, function(){
			// off > revert the color
			$('#floating-subsection h1').css('background-color', $('#floating-subsection h1').data('orig-color'));
		});
	}


	// Work Heading Animation
	function startWorkHeading() {
		var wScroll = $(window).scrollTop();

		if($('.work-section').offset().top - $(window).height()/1.2 - 160 < wScroll) {
			setTimeout(function() {
				$('.work-section .section-heading').addClass('shown');
			}, 300);
		}
	}

	// Work Section Animations
	function startWork() {
		var wScroll = $(window).scrollTop();

		if($('.work-section').offset().top - $(window).height()/1.2 + 50 < wScroll) {
			setTimeout(function() {
				$('#sandra-work').addClass('shown');
			}, 400);
		}

		if($('.work-section').offset().top - $(window).height()/1.2 + 150 < wScroll) {
			setTimeout(function() {
				$('#scsi-work').addClass('shown');
			}, 800);
		}

		if($('.work-section').offset().top - $(window).height()/1.2 + 350 < wScroll) {
			setTimeout(function() {
				$('#neobit-work').addClass('shown');
			}, 1200);
		}
	}

	// Work BG Stuff


	// Contact Section Animations
	function startContact() {
		var wScroll = $(window).scrollTop();
		if($(window).width() < 400) {
			var substractScrollHeight = 100;
		}
		else  {
			var substractScrollHeight = 100;
		}

		if($('.contact-section').offset().top - $(window).height()/1.2 - substractScrollHeight < wScroll) {
			setTimeout(function() {
				$('.contact-section .section-heading').addClass('shown');
			}, 100);
		}
	}


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
