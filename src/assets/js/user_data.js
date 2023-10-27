
let userLogin = document.querySelector(".userLogin a");
let loggeduser = JSON.parse(sessionStorage.getItem("user"));

if (loggeduser && loggeduser.name) {
    userLogin.textContent = `Hello ,${loggeduser.name}`;
}