const shrinkNavOnScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector("nav").classList.add("shrinked");
      document.querySelector("main").classList.add("shrinked");
    } else {
        document.querySelector("nav").classList.remove("shrinked");
        document.querySelector("main").classList.remove("shrinked");
    }
}

window.onscroll = function() {shrinkNavOnScroll()};

const goToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const upButton = document.querySelector(".page_up_button_container");
upButton.addEventListener("click", goToTop);

const overlayMenu = document.querySelector(".overlay_menu");
const hamburgerMenu = document.querySelector(".hamburger_menu");
hamburgerMenu.addEventListener("click", ()=> {
    overlayMenu.style.transform = "translateX(-100%)";
})

const closeButton = document.querySelector(".overlay_menu .close_button");
closeButton.addEventListener("click", ()=> {
    overlayMenu.style.transform = "translateX(0%)";
})