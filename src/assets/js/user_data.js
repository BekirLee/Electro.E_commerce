
let userLogin = document.querySelector(".userLogin a");
let loggeduser = JSON.parse(sessionStorage.getItem("user"));

let cardOfLogin = document.querySelector(".card-mine");

if (loggeduser && loggeduser.name) {
    userLogin.textContent = `Hello ,${loggeduser.name}`;
    // if (loggeduser) {
    cardOfLogin.style.display = "none";
    // }
}
// userLogin.textContent = `${currentUser.name}`


