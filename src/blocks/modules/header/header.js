(function fixedMenuScroll() {
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                header.classList.add('header--fixed');
            } else {
                header.classList.remove('header--fixed');
            }
        })
    }
})();