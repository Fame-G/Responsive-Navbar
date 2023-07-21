let openBtn = document.querySelector("#icon1");
let closeBtn = document.querySelector("#icon2");
let menu = document.querySelector(".navbar__menu");

openBtn.addEventListener("click", function(){
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden")
});

closeBtn.addEventListener("click", function(){
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden")
});