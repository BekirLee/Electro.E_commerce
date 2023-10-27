
// let userLogin = document.querySelector(".userLogin a");
// let loggeduser = JSON.parse(sessionStorage.getItem("user"));
// var logout = document.querySelector(".logOut");

// let cardOfLogin = document.querySelector(".card-mine");
let logoutbtn = document.querySelector(".logout");


if (loggeduser && loggeduser.name) {
    logout.classList.remove("unactive");

    logoutbtn.addEventListener("click", function () {
        let logginOut = sessionStorage.removeItem("user");
    })

    // userLogin.textContent = `Hello ,${loggeduser.name}`;
    // if (loggeduser) {
    // cardOfLogin.style.display = "none";
    // }
}
