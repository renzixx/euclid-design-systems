document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.how__step').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const step = event.currentTarget.dataset.step;

            document.querySelectorAll('.how__block-text').forEach(function(tabsContent) {
                tabsContent.classList.remove('how__block-text-active');
            });
            document.querySelectorAll('.how__column-image').forEach(function(tabsImage) {
                tabsImage.classList.remove('how__column-image-active');
            });
            document.querySelector(`[data-text='${step}']`).classList.add('how__block-text-active');
            document.querySelector(`[data-image='${step}']`).classList.add('how__column-image-active');
        });
    });
});