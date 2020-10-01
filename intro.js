const introArrow = document.getElementsByClassName("intro-arrow");
const arrowLeft = document.getElementById("intro-arrow-left");
// const arrowLeft = document.querySelectorAll(".fas,.fa-angle-right");
const groupimg2 = document.getElementsByClassName("dancegroup2");

introArrow[0].addEventListener("click", function () {
    groupimg2[0].classList.toggle("dancegroup2-active");
    console.log(arrowLeft.classList.toggle("intro-arrow-active"));
});