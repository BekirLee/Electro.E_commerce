
let logoutbtn = document.querySelector(".logout");


if (loggeduser && loggeduser.name) {
    logout.classList.remove("unactive");

    logoutbtn.addEventListener("click", function () {
        let logginOut = sessionStorage.removeItem("user");
        window.location.href = "/index.html";
    })
    groupClass.classList.add("unactive");

}
