import "../styles/style.scss";
import { initSwiper } from './components/swiper';
import { initMobileNav } from './components/mobileNav';

document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.classList.add('is-loaded');
	initSwiper();
	initMobileNav();

	const cards = document.querySelectorAll('.cards-item');

	if (cards.length > 0) {
		cards.forEach(card => {
			card.addEventListener('mouseenter', function () {
				this.classList.add("active");
			});

			card.addEventListener('mouseleave', function () {
				this.classList.remove("active");
			});
		});
	} else {
		console.error('No elements found with the class .cards-item');
	}



	var projectsNav = document.querySelector('.projects-nav');
	var projectItems = document.querySelectorAll('.cards-item');
	
	if (projectsNav === null) {
		return;
	}

	projectsNav.addEventListener('click', function (e) {
		var target = e.target;
		var filterValue = target.getAttribute('data-filter');

		if (!filterValue) {
			return;
		}

		projectItems.forEach(function (item) {
			var categories = item.getAttribute('data-category').split(' ');
			if (filterValue === 'all' || categories.includes(filterValue)) {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});

		var buttons = projectsNav.querySelectorAll('.projects-item_btn');
		buttons.forEach(function (btn) {
			btn.classList.remove('is-active');
		});
		target.classList.add('is-active');
	});

});

