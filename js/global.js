var nativeApp = (function () {
    'use strict';

    /**
    * Private Variables
    */

    var pageHeader = document.getElementById('js-page-header'),
        pageHeaderHeight = pageHeader.offsetHeight,
        pageNav = document.getElementById('js-page-nav'),
        mq = window.matchMedia("(min-width: 1024px)");


    /**
    * Private Methods
    */

    function initSmoothScoll() {
        var options = {
            speed: 500,
            easing: 'easeInOutCubic',
            updateURL: true,
            offset: 24
        };

        smoothScroll.init(options);
    }

    function stickyNav() {
        var pageNavTop = pageNav.offsetTop;

        pageNav.classList.remove('is-fixed');

        if ( (window.pageYOffset > pageHeader.offsetHeight) && (mq.matches) ) {
            pageNav.classList.add('is-fixed');
        } else {
            pageNav.classList.remove('is-fixed');
        }
    }

    function widthChange(mq) {
        if (mq.matches) {
            window.addEventListener('scroll', stickyNav, false);
            window.addEventListener('resize', stickyNav, false);
        } else {
            window.removeEventListener('scroll', stickyNav, false);
        }
    }


    /**
    * Public Methods
    */

    function init() {
        initSmoothScoll();
        widthChange(mq);
        mq.addListener(widthChange);
    }

    return {
        init: init
    };
})();

nativeApp.init();