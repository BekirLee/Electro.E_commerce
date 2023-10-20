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

checkLogin();

function checkLogin() {



    let btn = document.querySelector(".card-width button");
    let card = document.querySelector(".card-width");
    let loader = document.querySelector(".loader");
    let animatebottom = document.querySelector(".animate-bottom");

    // loader.style.display = "none";
    animatebottom.style.display = "none";

    // deletesmthg();

    // function deletesmthg() {
    btn.addEventListener("click", function () {
        let username = document.getElementById("user").value;
        let password = document.getElementById("password").value;
        let userLogin = document.querySelector(".userLogin a");

        for (let i = 0; i < users.length; i++) {



            if (username == users[i].name && password == users[i].password) {
                console.log("true user infos")
                loader.classList.add("activeBtn");

                setTimeout(() => {
                    // loader.style.display = "block";
                    loader.classList.remove("activeBtn");
                    loader.classList.add("unactive");
                    animatebottom.style.display = "block";
                    card.classList.add("unactive");
                    userLogin.textContent = `Hello ,${users[i].name}`;

                    let userData = JSON.stringify(userLogin.textContent);
                    localStorage.setItem("users", userData);

                    let getUserDataString = localStorage.getItem("users");
                    let getUserData = JSON.parse(getUserDataString);

                }, 1000);

                break;
            }
        }
    })

}




