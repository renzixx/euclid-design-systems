document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq__accordion-button').forEach(function(accordionBtn) {
        accordionBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            accordionBtn.classList.toggle('is-active');
            document.querySelector(`[data-target='${path}']`).classList.toggle('is-active');
        });
    });
});