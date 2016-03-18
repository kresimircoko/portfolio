$(function() {

	$(function() {
		mobileNav();
		burger();
		smoothScroll(600);
	});

	$(window).scroll(function() {
		startAbout();

		startAchievementsHeading();
		startAchievements();

		startWorkHeading();
		startWork();

		startContact();
		startContactSocial();
	});

	// SVG Burger from Codepen
	function burger() {
		var trigger = $('#hamburger'),
	      isClosed = true;

	  trigger.click(function () {
	    burgerTime();
	  });

	  function burgerTime() {
	    if (isClosed == true) {
	      trigger.addClass('is-open');
	      trigger.removeClass('is-closed');
	      isClosed = false;
	    }
			else {
	      trigger.addClass('is-closed');
	      trigger.removeClass('is-open');
	      isClosed = true;
	    }
	  }
	}

	// Mobile Navigation
	function mobileNav() {
	  $('#hamburger').on('click', function() {
	     $('.mobile-nav').toggleClass('is-open');
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

	// Achievements Heading Animation
	function startAchievementsHeading() {
		var wScroll = $(window).scrollTop();

		if($('.achievements-section').offset().top - $(window).height()/1.2 - 160 < wScroll) {
			setTimeout(function() {
				$('.achievements-section .section-heading').addClass('shown');
			}, 300);
		}
	}

	// Achievements Section Animations
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
			}, 700);
		}

		if($('.work-section').offset().top - $(window).height()/1.2 + 250 < wScroll) {
			setTimeout(function() {
				$('#neobit-work').addClass('shown');
			}, 1000);
		}
	}

	// Contact Section Animations
	function startContact() {
		var wScroll = $(window).scrollTop();

		if($('.contact-section').offset().top - $(window).height()/1.2 < wScroll) {
			setTimeout(function() {
				$('.contact-section .section-heading').addClass('shown');
			}, 100);
		}
	}

	// Contact Section Social Icons Animations
	function startContactSocial() {
		var wScroll = $(window).scrollTop();

		if($('.contact-section').offset().top - $(window).height()/1.2 + 40 < wScroll) {
			$('.contact-section a').each(function(i){
				setTimeout(function(){
					$('.contact-section a').eq(i).addClass('shown');
				}, 100 * i);
			});
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
