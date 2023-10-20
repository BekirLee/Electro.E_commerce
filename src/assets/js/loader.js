document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde, kullanıcı bilgisini localStorage'dan al
    let getUserDataString = localStorage.getItem("users");
    let getUserData = JSON.parse(getUserDataString);

    if (getUserData) {  // Eğer kullanıcı bilgisi varsa
        alert("var")
        let userLogin = document.querySelector(".userLogin a");
        userLogin.innerHTML = getUserData;
    }
});