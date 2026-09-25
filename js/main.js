(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('position-fixed bg-dark shadow-sm');
        } else {
            $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    // Counter animation
    var counter = function () {
        $('.number').each(function () {
            var $this = $(this),
                countTo = parseInt($this.attr('data-number'), 10);

            $({ countNum: parseInt($this.text(), 10) || 0 }).animate({ countNum: countTo }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
    };

    var counterWayPoint = function () {
        if ($('#section-counter').length > 0) {
            $('#section-counter').waypoint(function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('counter-animated')) {
                    counter();
                    $(this.element).addClass('counter-animated');
                }
            }, { offset: '95%' });
        }
    };
    counterWayPoint();

    // Parallax effect for background images with data-stellar-background-ratio
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollY || $(window).scrollTop();
        $('[data-stellar-background-ratio]').each(function () {
            var $this = $(this);
            var ratio = parseFloat($this.attr('data-stellar-background-ratio')) || 0.5;
            var offset = scrollTop * (1 - ratio);
            $this.css('background-position', 'center ' + offset + 'px');
        });
    });

})(jQuery);

