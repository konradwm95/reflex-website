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

const images = ["1.jpg"];
const imagesElements = document.querySelector(".images_container");
for (let i=0; i<=13; i++) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image_container");
  const img = document.createElement("img");
  img.src = "../assets/1.jpg";
  imageContainer.appendChild(img);
  imagesElements.appendChild(imageContainer);
}
