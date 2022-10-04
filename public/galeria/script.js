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