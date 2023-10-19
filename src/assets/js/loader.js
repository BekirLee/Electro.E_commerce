
let btn = document.querySelector(".logInBtn button");
let card = document.querySelector(".card-width");
// let loaderall = document.querySelector(".loader");
let loader = document.querySelector(".loader");
let animatebottom = document.querySelector(".animate-bottom");

loader.style.display = "none";
animatebottom.style.display = "none";

deletesmthg();
function deletesmthg() {


    btn.addEventListener("click", function () {
        loader.classList.add("unactive");   

        window.addEventListener('load', function () {

            setTimeout(() => {
                // loader.style.display = "none";
                animatebottom.style.display = "block";
                loader.classList.remove("unactive");
                loader.classList.add('active')

            }, 2000);


        });
    })
}




