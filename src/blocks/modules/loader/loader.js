// Объявляем константу
const loader = document.querySelector(".loader");
// Функция 
function loaders(el) {
    el.style.opacity = 1;
    var interloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interloader);
            loader.style.display = "none";
        }
    }, 16);
}
window.onload = function () {
    setTimeout(function () {
        loaders(loader);
    }, 1000);
};