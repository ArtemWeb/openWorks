document.addEventListener("DOMContentLoaded", function() {

	  // burger

  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.querySelector(".header").classList.toggle("header_active");
    document.querySelector(".mobile-menu").classList.toggle("mobile-menu_active");
  });

  if (document.querySelectorAll('.slider_brands').length > 0) {
		var product = new Flickity('.slider_brands', {
      cellAlign: 'left',
      contain: true,
			freeScroll: false,
			wrapAround: true,
			prevNextButtons: true,
			pageDots: false
		});
  };
  if (document.querySelectorAll('.slider_tags').length > 0) {
		var product = new Flickity('.slider_tags', {
      cellAlign: 'left',
      contain: true,
			freeScroll: false,
			wrapAround: true,
			prevNextButtons: true,
			pageDots: false
		});
  };

  if (document.querySelectorAll('.gallery__main').length > 0) {
		var product = new Flickity('.gallery__main', {
      cellAlign: 'center',
      contain: true,
			freeScroll: false,
			wrapAround: true,
			prevNextButtons: true,
			pageDots: false
		});
  };

  var parents = document.querySelectorAll('.menu-item_parent > a');
  if(parents.length > 0){
    for (var i = parents.length - 1; i >= 0; i--){
      parents[i].addEventListener("click",function (e){
        e.preventDefault();
        this.classList.toggle('active');
      });
    }
  }

  var parents = document.querySelectorAll('.submenu__item-parent > a');
  if(parents.length > 0){
    for (var i = parents.length - 1; i >= 0; i--){
      parents[i].addEventListener("click",function (e){
        e.preventDefault();
        this.classList.toggle('active');
      });
    }
  }

  	// tags

	var getSiblings = function (elem) {
		var siblings = [];
		var sibling = elem.parentNode.firstChild;

		while (sibling) {
			if (sibling.nodeType === 1 && sibling !== elem) {
				siblings.push(sibling);
			}
			sibling = sibling.nextSibling
		}
		return siblings;
	};

	var tabs = document.querySelectorAll('.selector__item');
	if (tabs.length) {

		for (var i = tabs.length - 1; i >= 0; i--) {

			tabs[i].onclick = function () {

				if (!this.classList.contains('selector__item_active')) {

					var siblings = getSiblings(this);

					for (var i = siblings.length - 1; i >= 0; i--) {
						siblings[i].classList.remove('selector__item_active');
					}

					var tab__body = document.querySelector('.' + this.getAttribute('data-tab'));
					var tab__bodies = getSiblings(tab__body);
					for (var i = tab__bodies.length - 1; i >= 0; i--) {
						tab__bodies[i].classList.remove('selector__tab_active');
					}

					tab__body.classList.add('selector__tab_active');
					this.classList.add('selector__item_active');
				}

			}
		}
	}

    // popup
var popups = function () {
  var close_byBG = document.getElementsByClassName('popup__bg'),
    close_byButton = document.getElementsByClassName('popup__close'),
    popup__triggers = document.getElementsByClassName('popup-trigger');

  if (close_byBG.length) {

    for (var I = popup__triggers.length - 1; I >= 0; I--) {
      popup__triggers[I].addEventListener('click', function () {
        document.getElementById(this.getAttribute('data-popup')).classList.add('popup_active');
      })
    }

    for (var I = close_byBG.length - 1; I >= 0; I--) {
      close_byBG[I].addEventListener('click', function () {

        this.parentElement.classList.remove('popup_active');
      })
    }
    for (var I = close_byButton.length - 1; I >= 0; I--) {
      close_byButton[I].addEventListener('click', function () {
        this.parentElement.parentElement.classList.remove('popup_active');
      })
    }
  }
}
popups();

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