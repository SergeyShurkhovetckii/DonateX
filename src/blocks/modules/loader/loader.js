const loader = document.querySelector(".loader");

function fadeOutnojquery(el) {
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
        fadeOutnojquery(loader);
    }, 1000);
};

