function loaded(){
    let navmenu = document.querySelector('.navmenu').parentElement;
    if (window.innerWidth <= 720){
        navmenu.remove()
    }
    let burgerIcon = document.querySelector('.header__burger-icon');
    let navmenuMobile = document.querySelector('.navmenu-mobile');
    burgerIcon.onclick = function(e){
        if (burgerIcon.dataset.activated === "true"){
            burgerIcon.dataset.activated = "false"
            navmenuMobile.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        } else {
            burgerIcon.dataset.activated = "true"
            navmenuMobile.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }
    }
}

document.addEventListener("DOMContentLoaded", loaded)