(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    smartSpeed: 15000,
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
		});

	};
	carousel();

})(jQuery);

// =================


document.addEventListener("DOMContentLoaded", function() {
	const video = document.getElementById("latest-video");
	const playButton = document.getElementById("play-button");
	const playIcon = '<i class="fa-solid fa-play"></i>';
	const pauseIcon = '<i class="fa-solid fa-pause"></i>';

	playButton.addEventListener("click", function() {
	  if (video.paused) {
		video.play();
		video.muted = false; // Ensure the video is unmuted
		playButton.innerHTML = pauseIcon; // Change button icon to Pause
	  } else {
		video.pause();
		playButton.innerHTML = playIcon; // Change button icon to Play
	  }
	});
  });
