
let btn = document.querySelector(".logInBtn button");
let card = document.querySelector(".card-width");
// let loaderall = document.querySelector(".loader");
let loader = document.querySelector(".loader");
let animatebottom = document.querySelector(".animate-bottom");

// loader.style.display = "none";
animatebottom.style.display = "none";

deletesmthg();
function deletesmthg() {


    btn.addEventListener("click", function () {
        // loader.classList.add("active");
        window.addEventListener('load', function () {

            setTimeout(() => {
                // loader.style.display = "block";
                loader.classList.remove("active");
                loader.classList.add("unactive");
                animatebottom.style.display = "block";



            }, 1000);


        });

        loader.classList.add("active");

    })
}




