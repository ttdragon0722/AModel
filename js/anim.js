TL = gsap.timeline();

// document
// https://greensock.com/docs/v3/GSAP/Timeline
// https://greensock.com/docs/v3/Plugins/ScrollTrigger

$(document).ready(function () {
});


$(window).on('load', function () {
    TL.to(
        '.main_title',
        {
            opacity: 1,
            duration: 1
        }
    ).to(
        '.main_subtitle',
        {
            opacity: 1,
            duration: 1
        },
        '>'
    ).to(
        '.main_wrap_group',
        {
            opacity: 1,
            duration: 1
        },
        '<'
    ).to(
        '.keep_read_btn',
        {
            opacity: 1,
            duration: 1
        },
        '<'
    );


    gsap.to(
        '.announce',
        {
            scrollTrigger:{
                trigger:'.announce',
                start:'top center'
            },
            opacity:1,
            duration:1
        }
    );
    gsap.to(
        '.service_item',
        {
            scrollTrigger:{
                trigger:'.service_item',
                start:'top center'
            },
            opacity:1,
            duration:1,
            stagger:0.2
        }
    );

});