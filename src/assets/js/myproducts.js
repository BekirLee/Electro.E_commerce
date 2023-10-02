

const categories = [
    {
        id: 14,
        mainPhoto: "",
        name: 'Phone',
        img: "img/airconditioner_image.jpg",
    },
    {
        id: 345,
        name: 'TV', mainPhoto: "",
        img: "img/airconditioner_image.jpg",
    },
    {
        id: 3,
        name: "Air-conditioners",
        img: "img/airconditioner_image.jpg",
    },

]




document.querySelector(".basket-icon").addEventListener("click", function (event) {
    let basket = document.querySelector(".cards .card");
    event.preventDefault();

    console.log(basket);
});