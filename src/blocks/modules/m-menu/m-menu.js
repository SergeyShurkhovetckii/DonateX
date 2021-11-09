// Функция открытия меню 
(function DropMenu(){
    // Константы
    const btn = document.querySelector('.header__burger');
    const block = document.querySelector('.m-menu');
    let menuOpen = false;
    // Ослеживаем событие открытия
    if (btn && block) {
        btn.addEventListener('click', toggle);
// Сам функция открытия 
        function toggle() {
            if (menuOpen == true) {
                block.classList.remove('m-menu--active');
                menuOpen = false;
            } else {
                block.classList.add('m-menu--active');
                menuOpen = true;
            }
        }
    }
})();
