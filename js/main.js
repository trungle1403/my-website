const menuOverlay = document.querySelector('.menu-overlay')
const btnShowMenu = document.querySelector('.btn-menu')
const btnCloseMenu = document.querySelector('.btn-close')
const menuItem = document.querySelectorAll('.menu-item')
const btnToTop = document.querySelector('.btn-to-top')

btnShowMenu.addEventListener('click', () => {
    menuOverlay.classList.toggle('active')
    btnShowMenu.classList.toggle('active')
})
btnCloseMenu.addEventListener('click', () => {
    menuOverlay.classList.toggle('active')
    btnShowMenu.classList.toggle('active')
})

document.body.addEventListener('click', (e) => {
    if (e.target.matches('.menu-overlay')){
        menuOverlay.classList.toggle('active')
        btnShowMenu.classList.toggle('active')
    }
})

document.addEventListener("DOMContentLoaded", function(event) { // <-- add this wrapper
    var menuItem = document.querySelectorAll('.menu-item');
    if (menuItem) {
        menuItem.forEach(function(item, key){
            item.addEventListener('click', function () {
            item.classList.add("active");
                menuItem.forEach(function(items, keys){
                    if(key !== keys) {
                        items.classList.remove('active');
                    }
                });
            });
        });
    }
});



window.addEventListener('scroll',() => {
    var header = document.querySelector('.nav-bar');
    header.classList.toggle('sticky',window.scrollY>0);

    if(window.scrollY > 200){
        btnToTop.classList.add('active')
    }else {
        btnToTop.classList.remove('active')
    }
})

btnToTop.addEventListener('click',() => {
    document.documentElement.scrollTop = 0;
})

let atScroll = false;
let parallaxTitle = document.querySelectorAll(".bg-text-parallax");

const scrollProgress = () => {
    atScroll = true;
};

const raf = () => {
    if (atScroll) {
        parallaxTitle.forEach((element, index) => {
            element.style.transform = "translateX(" + window.scrollY / 30 + "%)";
        });
        atScroll = false;
    }
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollProgress);