const swiper = new Swiper('.swiper', {
    spaceBetween: 40,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 2500,
    },
});