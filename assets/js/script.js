$(document).ready(function(){
    /* _______________________ start home page _______________________ */
    // Control side menu
    $('.list-btn').click(function(){
        $('.side-nav').addClass("expand_side_nav");
    });
    $(".backdrop,.nav_close_btn text-white").click(function(){
        $('.side-nav').removeClass("expand_side_nav");
    });
    $(".sub_navBtn").click(function(e){
        e.preventDefault();
        $(this).parents("li").addClass("show_subMenu");
    });
    $(".sub_navCloseBtn").click(function(e){
        $(this).parents("li").removeClass("show_subMenu");
    });

    // Swiper: Slider
    new Swiper('.swiper-news', {
        loop: false,
        centeredSlides: false,
        slidesPerView: 9,
        paginationClickable: true,
        spaceBetween: 10,
        speed: 1000,
        grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        },
        breakpoints: {
            1920: {
                slidesPerView: 9,
                spaceBetween: 10
            },
            1600: {
                slidesPerView: 8,
                spaceBetween: 10
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    });

    // Swiper: Slider
    new Swiper('.swiper-seller', {
        loop: false,
        centeredSlides: false,
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 7,
        breakpoints: {
            1920: {
                slidesPerView: 6,
                spaceBetween: 7
            },
            1600: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    });

    // Swiper: Slider
    new Swiper('.swiper-store', {
        loop: false,
        centeredSlides: false,
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    // Swiper: Slider
    new Swiper('.swiper-brands', {
        loop: false,
        centeredSlides: false,
        slidesPerView: 8,
        paginationClickable: true,
        spaceBetween: 16,
        speed: 1000,
        grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        },
        breakpoints: {
            1200: {
                slidesPerView: 8,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 7,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        }
    });
    /* _______________________ end home page _______________________ */

    /* _______________________ start cart fil page _______________________ */
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    /* _______________________ end cart fil page _______________________ */
});


$(window).on('load', function() {
    // ----- scroll trigger animation
    AOS.init({
        easing: 'ease-out',
        duration: 800,
        // once: true
    });
})