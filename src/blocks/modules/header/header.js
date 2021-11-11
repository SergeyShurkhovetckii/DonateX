(function fixedMenuScroll() {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo-header');

    if (header && logo) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                header.classList.add('header--fixed');
                logo.classList.add('logo-orange');
            } else {
                header.classList.remove('header--fixed');
                logo.classList.remove('logo-orange');
            }
        })
    }
})();