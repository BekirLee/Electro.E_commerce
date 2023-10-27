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

    let btn = document.querySelector(".card-width .login");
    let card = document.querySelector(".card-width");
    let loader = document.querySelector(".loader");

    // animatebottom.style.display = "none";
    btn.addEventListener("click", function () {
        console.log("hi")
        let username = document.getElementById("user").value;
        let password = document.getElementById("password").value;
        let userLogin = document.querySelector(".userLogin a");
        let currentUser = users.find(x => x.password == password && x.name == username)

        console.log(currentUser);

        if (currentUser) {
            let userData = JSON.stringify(currentUser);
            sessionStorage.setItem("user", userData);

            let getUserData = JSON.parse(sessionStorage.getItem("user"));
            sessionStorage.setItem("isLoggedIn", true);
           
            window.location.href = '/index.html';
            // loader.classList.add("activeBtn");
            // setTimeout(() => {

            //     loader.classList.remove("activeBtn");
            //     loader.classList.add("unactive");
            //     animatebottom.style.display = "block";
            //     card.classList.add("unactive");


            // }, 1000);

        }
        else {
            alert("username or pass is invalid")
        }

    })

}

