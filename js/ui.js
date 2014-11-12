(function (window, document, undefined) {

    'use strict';

    /**
    * Selectors
    */

    var modalTrigger = document.querySelector('[data-modal]');
    var modalClose = document.querySelector('.ui-modal__close');


    /**
    * Methods
    */

    function launchModal() {
        modalTrigger.addEventListener('click', function(e) {
            var target = e.target || e.srcElement;
            e = e || window.event;
            var modal = target.nextElementSibling;
            target.nextElementSibling.classList.add('is-visible');
            e.preventDefault();
        }, false);
        modalClose.addEventListener('click', function(e) {
            var target = e.target || e.srcElement;
            e = e || window.event;
            document.querySelector('.ui-modal').classList.remove('is-visible');
            e.preventDefault();
        }, false);
    }


    /**
    * Events/APIs/init
    */

    window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0;};
    launchModal();


})(window, document);