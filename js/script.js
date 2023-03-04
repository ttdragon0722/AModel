$(document).ready(function () {
    const showAnim = gsap.from('.mobile_menu', {
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
    })

    // modal open & close 
    $('#lang_btn').click(function (e) {
        e.preventDefault();
        if ($('#lang_modal').css('display') === 'none') {
            fadeIn('#lang_modal');
            $('#lang_modal').css('display', "block");
            $('body').css('overflow-y', 'hidden');

        } else {
            fadeOut('#lang_modal');
            $('body').css('overflow-y', 'scroll');
        }
    });

    $('#footer_lang_btn').click(function (e) {
        e.preventDefault();
        if ($('#lang_modal').css('display') === 'none') {
            fadeIn('#lang_modal');
            $('#lang_modal').css('display', "block");
            $('body').css('overflow-y', 'hidden');

        } else {
            fadeOut('#lang_modal');
            $('body').css('overflow-y', 'scroll');
        }
    });

    $('#lang_modal').click(function (event) {
        if (event.target === this) {
            fadeOut('#lang_modal');
            $('body').css('overflow-y', 'scroll');
        }
    })

    // mobile menu open & close
    $('.menu_btn').click(function (e) {
        e.preventDefault();
        if ($('.mobile_menu_bg').css('display') === 'none') {
            fadeIn('.mobile_menu_bg');
            slideIn('.mobile_menu_group');
            fadeIn('.mobile_menu_item')
            $('.mobile_menu_bg').css('display', 'block');
            $('body').css('overflow-y', 'hidden');
        } else {
            fadeOut('.mobile_menu_bg');
            $('body').css('overflow-y', 'scroll');
        }
    });


    $('.mobile_menu_bg').click(function (event) {
        if (event.target === this) {
            slideOut('.mobile_menu_group');
            fadeOut('.mobile_menu_bg');
            $('body').css('overflow-y', 'scroll');
        }
    })

    $('.mobile_dropdown').click(function (e) {
        e.preventDefault();
        if ($(this).siblings('.mobile_dropdown_items').css('display') === 'none') {
            $(this).siblings('.mobile_dropdown_items').show();
        } else {
            $(this).siblings('.mobile_dropdown_items').hide();
        }
    })

});

function slideIn(ele) {
    gsap.fromTo(ele,
        {
            x: '-100%'
        },
        {
            x: 0,
            duration: 0.5
        }

    )
}

function slideOut(ele) {
    gsap.to(ele,
        {
            x: '-100%',
        }

    )
}

function fadeIn(ele) {
    gsap.fromTo(ele,
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 0.2
        }
    );
}

function fadeOut(ele) {
    gsap.to(ele,
        {
            opacity: 0,
            duration: 0.2,
            onComplete: function () {
                $(ele).css('display', "none");
            }
        }
    );
}