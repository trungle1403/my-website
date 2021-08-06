const menuOverlay = document.querySelector('.menu-overlay')
const btnShowMenu = document.querySelector('.btn-menu')
const btnCloseMenu = document.querySelector('.btn-close')
const menuItem = document.querySelectorAll('.menu-item')

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
menuItem.forEach(item => {
    item.addEventListener('click', (i) => {
        
    })
})



window.addEventListener('scroll',function(){
    var header = document.querySelector('.nav-bar');
    header.classList.toggle('sticky',window.scrollY>0);
})
