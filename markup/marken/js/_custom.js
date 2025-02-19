document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelectorAll('.hero__slider').length > 0) {
        var hero = new Flickity('.hero__slider', {
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
            pageDots: true,
            prevNextButtons: false,
            autoPlay: 5000
        });
    };

    if (document.querySelectorAll('.partners__slider').length > 0) {
        var hero = new Flickity('.partners__slider', {
            cellAlign: 'center',
            contain: true,
            freeScroll: true,
            wrapAround: true,
            pageDots: false,
            prevNextButtons: true,
        });
    };

    var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("is-active");
        document.querySelector(".nav_header").classList.toggle("is-active");
        document.querySelector(".header_contact").classList.toggle("is-active");
        document.querySelector(".header_search").classList.toggle("is-active");
        document.querySelector(".header__button").classList.toggle("is-active");
    });

    window.onscroll = function showHeader() {
        var header = this.document.querySelector('header');

        if (window.pageYOffset > 115) {
            header.classList.add('header_fixed')
        } else {
            header.classList.remove('header_fixed');
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

    var accordion = document.getElementsByClassName('accordion__heading');
    if (accordion.length) {
        for (var i = accordion.length - 1; i >= 0; i--) {
            accordion[i].addEventListener("click", function () {
                this.classList.toggle('accordion__heading_active');
            });
        }
    }

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

    if (document.querySelectorAll('.gallery-main').length > 0) {
        var hero = new Flickity('.gallery-main', {
            cellAlign: 'center',
            contain: true,
            freeScroll: false,
            wrapAround: true,
            pageDots: false,
            prevNextButtons: false

        });
    };

    if (document.querySelectorAll('.gallery-nav').length > 0) {
        var hero = new Flickity('.gallery-nav', {
            cellAlign: 'center',
            asNavFor: '.gallery-main',
            contain: false,
            freeScroll: false,
            wrapAround: true,
            pageDots: false,
            prevNextButtons: false
        });
    };
});