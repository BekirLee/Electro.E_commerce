var users = [
    {
        name: "John",
        age: 30,
        password: 12345,
    },
    {
        name: "Nihad",
        age: 17.999,
        password: 12345,
    },
]

checkLogin();

function checkLogin() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;



    let btn = document.querySelector(".card-width button");
    let card = document.querySelector(".card-width");
    let loader = document.querySelector(".loader");
    let animatebottom = document.querySelector(".animate-bottom");

    // loader.style.display = "none";
    animatebottom.style.display = "none";

    deletesmthg();

    function deletesmthg() {
        for (let infos of users)



            btn.addEventListener("click", function () {
                if (username == infos.name && password == infos.password) {
                    loader.classList.add("activeBtn");

                    setTimeout(() => {
                        // loader.style.display = "block";
                        loader.classList.remove("activeBtn");
                        loader.classList.add("unactive");
                        animatebottom.style.display = "block";



                    }, 1000);

                }
                return card.classList.add("unactive");


            })



    }

}




