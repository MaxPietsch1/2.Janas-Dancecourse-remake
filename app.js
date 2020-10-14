// Mobile navbar
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');

  });


}

navSlide();

// Enlarge images
const images = document.querySelectorAll(".item");
const background = document.createElement("div");
document.body.appendChild(background);
const buttons = document.querySelectorAll(".img-btn");


for (let i = 0; i < images.length; i++) {
  const image = images[i];
  image.addEventListener("click", (img) => {
    image.classList.toggle("enlarged");
    background.classList.toggle("background-enlarged");

    // button on photo, opacity "1" or "0"
    const visible = image.childNodes[0].classList.toggle("visible");
    if (visible === false) {
      image.childNodes[0].style.opacity = "0";
    } else if (visible === true) {
      image.childNodes[0].style.opacity = "1";
    }
  })
}
