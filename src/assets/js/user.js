var users = [
    {
        name: "John",
        // age: 30,
        password: "12345",
    },
    {
        name: "Nihad",
        // age: 17.999,
        password: "12345",
    },
]


var animatebottom = document.querySelector(".animate-bottom");

document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
        let card = document.querySelector('.card-width');
        card.style.display = 'none';
        animatebottom.style.display = "block";
    }
})

checkLogin();
function checkLogin() {

    let btn = document.querySelector(".card-width button");
    let card = document.querySelector(".card-width");
    let loader = document.querySelector(".loader");

    animatebottom.style.display = "none";

    btn.addEventListener("click", function () {
        let username = document.getElementById("user").value;
        let password = document.getElementById("password").value;
        let userLogin = document.querySelector(".userLogin a");


        let currentUser = users.find(x=>x.password == password && x.name == username  )

            if (currentUser) {
                loader.classList.add("activeBtn");
                setTimeout(() => {

                    loader.classList.remove("activeBtn");
                    loader.classList.add("unactive");
                    animatebottom.style.display = "block";
                    card.classList.add("unactive");

                    let userData = JSON.stringify(currentUser);
                    localStorage.setItem("user", userData);

                    let getUserData = JSON.parse(localStorage.getItem("users"));


                    localStorage.setItem('isLoggedIn', true);

                }, 1000);

            }
            else{
                alert("username or pass is invalid")
            }

    })

}




