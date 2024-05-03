document.addEventListener("DOMContentLoaded", function () {

  // burger

  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.querySelector(".header").classList.toggle("header_active");
  });

  // gallery

  if (document.querySelectorAll('.gallery__main').length > 0) {
    var hero = new Flickity('.gallery__main', {
      cellAlign: 'center',
      contain: true,
      freeScroll: false,
      wrapAround: true,
      prevNextButtons: true,
      pageDots: false
    });
  };


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