document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.burger__menu').classList.toggle('burger__menu-active');
        document.querySelector('.burger').classList.toggle('burger-active');
    });
});
