var timer;

function showPage() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader_box").style.display = "block";
}


function myFunction() {
    timer = setTimeout(showPage, 1000);
}
