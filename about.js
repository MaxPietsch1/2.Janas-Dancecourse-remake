const img2 = document.getElementsByClassName("about-image2");
const leftArrow = document.getElementsByClassName("fas fa-angle-left");

leftArrow[0].addEventListener("click", function () {
    img2[0].classList.toggle("img-active");
    leftArrow[0].parentNode.classList.toggle("arrow-active");
});