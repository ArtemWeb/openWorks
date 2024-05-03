document.addEventListener("DOMContentLoaded", function () {

	if (document.querySelectorAll('.hero__slider').length > 0) {
		var hero = new Flickity('.hero__slider', {
			cellAlign: 'center',
			contain: true,
			freeScroll: false,
			wrapAround: true,
			prevNextButtons: false,
			pageDots: true
		});
	};

	document.addEventListener('DOMContentLoaded', function () {
		function check_footer() {
			document.getElementById('footer_submit').setAttribute('disabled', 'disabled');
			var a = Math.ceil(Math.random() * 10);
			var b = Math.ceil(Math.random() * 10);
			var c = a + b;
			document.querySelectorAll('.letter_a')[0].innerHTML = a;
			document.querySelectorAll('.letter_b')[0].innerHTML = b;
			document.querySelectorAll('.checker__checker')[0].addEventListener('input', function () {
				if (parseInt(this.value) === c) {
					document.getElementById('footer_submit').removeAttribute('disabled');
				} else {
					document.getElementById('footer_submit').setAttribute('disabled', 'disabled');
				}
			});
		}
		check_footer();
	});


	// window.onscroll = function showHeader() {
	// 	var header = this.document.querySelector('.header');

	// 	if (window.pageYOffset > 51) {
	// 			header.classList.add('header_fixed')
	// 	} else {
	// 			header.classList.remove('header_fixed');
	// 	}
	// }

	jQuery('a[href^="#"]').on("click", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top - 90;
		jQuery('body,html').animate({scrollTop: top}, 800);
	 });


	jQuery(window).scroll(function () {
		var the_top = jQuery(document).scrollTop();
		if (the_top > 51) {
			jQuery('.header').addClass('header_fixed');
		} else {
			jQuery('.header').removeClass('header_fixed');
		}
	});


	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("is-active");
		document.querySelector(".header__background").classList.toggle("is-active");
		document.querySelector(".nav_header").classList.toggle("is-active");
		document.querySelector(".header__top").classList.toggle("is-active");
	});

	AOS.init();

});