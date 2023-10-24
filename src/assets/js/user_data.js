document.addEventListener("DOMContentLoaded", function () {

    let userLogin = document.querySelector(".userLogin a");
    let getUserDataString = localStorage.getItem("users");

    if (getUserDataString) {
        userLogin.textContent = getUserDataString;
        userLogin.textContent = `Hello ,${getUserDataString}`;

    }
});