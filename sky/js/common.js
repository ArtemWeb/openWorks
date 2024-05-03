document.addEventListener("DOMContentLoaded", function() {

	  // burger

  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.querySelector(".header").classList.toggle("header_active");
    document.querySelector(".mobile-menu").classList.toggle("mobile-menu_active");
  });

  if (document.querySelectorAll('.hero__slider').length > 0) {
		var product = new Flickity('.hero__slider', {
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      imagesLoaded: true,
      prevNextButtons: true,
      pageDots: false
		});
  };
  
  if (document.querySelectorAll('.facts__slider').length > 0) {
		var product = new Flickity('.facts__slider', {
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      imagesLoaded: true,
      prevNextButtons: true,
      pageDots: false
		});
  };
  
  if (document.querySelectorAll('.popular__slider').length > 0) {
		var product = new Flickity('.popular__slider', {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      imagesLoaded: true,
      prevNextButtons: true,
      pageDots: false
		});
  };
  

  if (document.querySelectorAll('.gallery__main').length > 0) {
		var hero = new Flickity('.gallery__main', {
			cellAlign: 'center',
			contain: true,
			freeScroll: false,
			wrapAround: true,
			pageDots: false,
			prevNextButtons: true
		});
	};

	if (document.querySelectorAll('.gallery__thumbs').length > 0) {
		var hero = new Flickity('.gallery__thumbs', {
			cellAlign: 'center',
			asNavFor: '.gallery__main',
			contain: false,
			freeScroll: false,
			wrapAround: true,
			pageDots: false,
      prevNextButtons: false,
		});
	};

	var accordion = document.getElementsByClassName('accordion__item');
	if (accordion.length) {
		for (var i = accordion.length - 1; i >= 0; i--) {
			accordion[i].addEventListener("click", function () {
				this.classList.toggle('accordion__item_active');
			});
		}
	}
});

// lazy
document.addEventListener('DOMContentLoaded', function () {
  var lazyImages = [].slice.call(document.querySelectorAll('img.load-image'));
  var lazyBackgrounds = [].slice.call(document.querySelectorAll('.lazy-background'));
  var lazyBackgroundsData = [].slice.call(document.querySelectorAll('[data-bg]'));

  if ('IntersectionObserver' in window) {
    var lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          //lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
    var lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });
    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
    var lazyBackgroundDataObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var lazyBackgroundData = entry.target;
          lazyBackgroundData.style.backgroundImage = 'url(' + lazyBackgroundData.dataset.bg + ')';
          lazyBackgroundDataObserver.unobserve(lazyBackgroundData);
        }
      });
    });
    lazyBackgroundsData.forEach(function (lazyBackgroundData) {
      lazyBackgroundDataObserver.observe(lazyBackgroundData);
    });
  } else {
    // Fallback
    lazyImages.forEach(function (lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      //lazyImage.srcset = lazyImage.dataset.srcset;
    });
    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackground.classList.add('visible');
    });
    lazyBackgroundsData.forEach(function (lazyBackgroundData) {
      lazyBackgroundData.style.backgroundImage = 'url(' + lazyBackgroundData.dataset.bg + ')';
    });
  }
})