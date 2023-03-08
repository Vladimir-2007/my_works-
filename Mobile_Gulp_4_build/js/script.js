$(document).ready(function() {
    $('.fullpage').fullpage({
        scrollOverflow: true,
        scrollOverflowOptions: {click: false},
        menu: '.menu',
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
        afterRender: function () {
            $('.projects_last').html($('.projects_slides').length);
        },
        afterSlideLoad: function (section, origin, destination) {
            $('.projects_first').html(++destination.index);
        }
    });

$(document).on('click', '.scroll_down', function () {
    fullpage_api.moveSectionDown();
});
$(document).on('click', '.fixed_humburger', openMenu);
$(document).on('click', '.main-menu_close', closeMenu);
$(document).on('click', '.projects_mini a', changeImg);
$(document).on('input', '.calc', changeInput);

    function changeImg(event) {
        event.preventDefault();
        $('.projects_big img').attr('src', $(this).attr('data-src'));
    }

    function changeInput(event) {
        event.preventDefault();
        $(this).find('.calc_range output').val($(this).find('.calc_range input').val());
    }

    function openMenu(event) {
        $('.main_menu').addClass('main-menu_active');
    }

    function closeMenu(event) {
        $('.main_menu').removeClass('main-menu_active');
    }
});

