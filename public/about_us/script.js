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