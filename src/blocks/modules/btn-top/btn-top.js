(function() {
    // обьявленм переменую
    let btn = document.querySelector('.back-to-top');
    
    // Отслеживаем прокрутку 
    window.addEventListener('scroll', trackScroll);
    // Событие на кнопку 
    btn.addEventListener('click', topUp);
    // Функция добавление класса 
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
        if (scrolled > coords) {
            btn.classList.add('back-to-top--open');
        } else if (scrolled < coords) {
            btn.classList.remove('back-to-top--open');
        }
    }
    // Функция скола
    function topUp() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -60);
            setTimeout(topUp, 0);
        }
    }
    }());
