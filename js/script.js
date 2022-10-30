jQuery(document).ready(function($) {
    if ($('#toTop').length) {
        $('body').on('click', '#toTop', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }
    if ($('#blog-carousel').length) {
        $('#blog-carousel').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            items: 1
        });
    }
    if ($('.head-top-banner').length) {
        $('.head-top-banner').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            items: 1,
            mouseDrag: false,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
        })
    }
    if ($(window).width() >= 992) {
        $('.menuhome a').html('<i class="fa fa-home"></i>');
        $('.navbar .dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
        }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
        });
        $('.navbar .dropdown > a').click(function() {
            location.href = this.href;
        });
    }
});
jQuery(document).ready(function() {
    jQuery('#rev_slider_4').show().revolution({
        dottedOverlay: 'none',
        delay: 7000,
        startwidth: 770,
        startheight: 300,
        hideThumbs: 200,
        thumbWidth: 200,
        thumbHeight: 50,
        thumbAmount: 2,
        navigationType: 'thumb',
        navigationArrows: 'solo',
        navigationStyle: 'round',
        touchenabled: 'on',
        onHoverStop: 'on',
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        spinner: 'spinner0',
        keyboardNavigation: 'off',
        navigationHAlign: 'center',
        navigationVAlign: 'bottom',
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: 'left',
        soloArrowLeftValign: 'center',
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: 'right',
        soloArrowRightValign: 'center',
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 0,
        fullWidth: 'on',
        fullScreen: 'off',
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: 'off',
        autoHeight: 'off',
        forceFullWidth: 'on',
        fullScreenAlignForce: 'off',
        minFullScreenHeight: 0,
        hideNavDelayOnMobile: 1500,
        hideThumbsOnMobile: 'off',
        hideBulletsOnMobile: 'off',
        hideArrowsOnMobile: 'off',
        hideThumbsUnderResolution: 0,
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
        fullScreenOffsetContainer: ''
    });
});