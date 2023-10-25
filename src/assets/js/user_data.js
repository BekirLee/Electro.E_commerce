
let userLogin = document.querySelector(".userLogin a");
let loggeduser = JSON.parse(localStorage.getItem("user"));

if (loggeduser && loggeduser.name) {
    userLogin.textContent = `Hello ,${loggeduser.name}`;
}