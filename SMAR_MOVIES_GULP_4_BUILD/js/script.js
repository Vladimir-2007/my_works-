$(document).ready(function () {

    $('.works_btns button, .works_btns a').on('focus', function (e) {
        $(this).parents('.works_element').addClass('works_element_active')
    });

    $('.works_btns button, .works_btns a').on('blur', function (e) {
    $(this).parents('.works_element').removeClass('works_element_active')
    });

    function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
        const progressElement = $(node);
        progressElement.each(function (value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPercent+'%'
            }, animationLength);
            $(item).find(tooltip).show(animationLength);
        });
    }



    let animate = true;


    $(window).scroll(function () {

        if($('.skills').offset().top <= $(window).scrollTop() + 150) {
            if(animate) {
                moveProgressBar('.progress_element', '.progress_line', '.progress_tooltip');
            }
            animate = false;
        }

    });

    $('.carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText: [],
        items: 5,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            980:{
                items:5
            }
        }
    })


});