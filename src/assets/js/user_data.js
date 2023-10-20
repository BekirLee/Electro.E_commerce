document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde, kullanıcı bilgisini localStorage'dan al
    let userLogin = document.querySelector(".userLogin a");

    let getUserDataString = localStorage.getItem("users");

    if (getUserDataString) {  // Eğer kullanıcı bilgisi varsa
        userLogin.textContent = getUserDataString;
    }
});