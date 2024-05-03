if (document.querySelectorAll('.services__slider').length > 0) {
    var hero = new Flickity('.services__slider', {
        cellAlign: 'center',
        contain: true,
        freeScroll: true,
        wrapAround: true,
        pageDots: false,
        groupCells: true
    });
};

if (document.querySelectorAll('.partners__slider').length > 0) {
    var hero = new Flickity('.partners__slider', {
        cellAlign: 'center',
        contain: true,
        freeScroll: true,
        wrapAround: true,
        pageDots: false,
        groupCells: true
    });
};

document.querySelector('.menu-item_parent a').addEventListener('click', function(e) {
    e.preventDefault();
    if (this.classList.contains('clicked')) {
        window.location.href = this.getAttribute('href');
    } else {
        this.classList.add('clicked');
    }

})


var getSiblings = function(elem) {
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

        tabs[i].onclick = function() {

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

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    document.querySelector(".nav_header").classList.toggle("is-active");
    // Do something else, like open/close menu
});


var popups = function() {
    var close_byBG = document.getElementsByClassName('popup__bg'),
        close_byButton = document.getElementsByClassName('popup__close'),
        popup__triggers = document.getElementsByClassName('popup-trigger');

    if (close_byBG.length) {

        for (var I = popup__triggers.length - 1; I >= 0; I--) {
            popup__triggers[I].addEventListener('click', function() {
                document.getElementById(this.getAttribute('data-popup')).classList.add('popup_active');
            })
        }

        for (var I = close_byBG.length - 1; I >= 0; I--) {
            close_byBG[I].addEventListener('click', function() {

                this.parentElement.classList.remove('popup_active');
            })
        }
        for (var I = close_byButton.length - 1; I >= 0; I--) {
            close_byButton[I].addEventListener('click', function() {
                this.parentElement.parentElement.classList.remove('popup_active');
            })
        }
    }
}
popups();

////////

jQuery(document).ready(function() {
    jQuery(".gallery__popup").magnificPopup({

        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false,
        },
        gallery: {
            enabled: true
        }
    });
});