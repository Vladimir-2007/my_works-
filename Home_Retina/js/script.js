const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (e) => {
    e.target.closest('.hamburger').classList.toggle('hamburger-active');
    e.target.closest('.menu').querySelector('.menu_list').classList.toggle('menu_list-active');
});