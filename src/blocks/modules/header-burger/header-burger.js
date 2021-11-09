document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('[data-button]');

    if (button) {
        button.addEventListener('click', function() {
            button.classList.toggle('change');
        });
    }
});

