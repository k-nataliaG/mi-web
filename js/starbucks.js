let iceGreen = document.getElementById("iceGreen");
let iceRose = document.getElementById("iceRose");
let icePink = document.getElementById ("icePink");
let mainCircle = document.getElementById("mainCircle");
let mainImg = document.getElementById ("mainImg");

iceGreen.addEventListener("mouseover", function() {
    mainCircle.classList.add ("main-circle-green");
    mainCircle.classList.remove("main-circle-rose");
    mainCircle.classList.remove("main-circle-pink");
    mainImg.setAttribute("src","starbucks/img1.png")
})
iceRose.addEventListener("mouseover", function() {
    mainCircle.classList.remove ("main-circle-green");
    mainCircle.classList.add("main-circle-rose");
    mainCircle.classList.remove("main-circle-pink");
    mainImg.setAttribute("src","starbucks/img2.png")
})
icePink.addEventListener("mouseover", function() {
    mainCircle.classList.remove ("main-circle-green");
    mainCircle.classList.remove("main-circle-rose");
    mainCircle.classList.add("main-circle-pink");
    mainImg.setAttribute("src","starbucks/img3.png")
})