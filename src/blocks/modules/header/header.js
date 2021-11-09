(function fixedMenuScroll(){
    const header = document.querySelector('.header');
    // const headerbtn =document.querySelector('.header-btn');

    if (header){
        window.addEventListener('scroll', function(){
            if (window.scrollY > 0) {
                header.classList.add('header--fixed');
                // headerbtn.classList.add('header-btn--active');
            } else {
                header.classList.remove('header--fixed');
                // headerbtn.classList.add('header-btn--active');
            }
        })
    }
})();