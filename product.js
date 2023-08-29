

var products = [
    {
        id: 1,
        info: {
            price: "$49.00",
            discount: "$44.00",
            brand: "Apple",
            category: "phone",
            img: "img/beardcleaner.jpg",
            hover: "img/bill_image.jpg",
            infoImg1: "img/phone_info1.jpg",
            infoImg2: "img/phone_info2.jpg",
            infoImg3: "img/phone_info2.jpg",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 2,
        info: {
            price: "$249.00",
            discount: "$219.00",
            brand: "Apple",
            category: "phone",
            img: "img/amazon_product.jpg",
            hover: "img/background_amazon_product.jpg",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 3,
        info: {
            price: "$229.00",
            discount: "$209.00",
            brand: "Apple",
            category: "phone",
            img: "img/amazon_product2.jpg",
            hover: "img/background_amazon_product.jpg",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 4,
        info: {
            price: "$1,499.00",
            discount: "$1,399.00",
            brand: "Apple",
            category: "phone",
            img: "img/computer.jpg",
            hover: "img/background_computer.jpg",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 5,
        info: {
            price: '$1029.00',
            discount: "$999.00",
            brand: "Apple",
            category: "phone",
            img: "img/computer2.jpg",
            hover: "img/background_computer.jpg",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 6,
        info: {
            price: "$699.00",
            discount: "$659.00",
            brand: "Apple",
            category: "phone",
            img: "img/tablet.jpg",
            hover: "img/phone_image.jpg",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 7,
        info: {
            price: "$1,299.00",
            discount: "$1,199.00",
            brand: "Apple",
            category: "phone",
            img: "img/phone1.jpg",
            hover: "img/phonebackground_img.jpg",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 8,
        info: {
            price: "$1,099.00",
            discount: "$999.00",
            brand: "Apple",
            category: "phone",
            img: "img/phone2.jpg",
            hover: "img/phonebackground_img.jpg",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
]



document.addEventListener("DOMContentLoaded", function () {
    info();
});


function info() {

    let good = document.querySelector(".gallery-wrap");


    for (var information of products) {
        var elements = `
    <div class="gallery" id="${information.id}">
         <div class="img-big-wrap img-thumbnail">
            <a href="${information.info.img}" data-type="image" data-fslightbox="mygallery">
            <img src="${information.info.img}" alt="">
            </a>
        </div>
        <div class="thumbs-wrap pt-2 " style="text-align: center;">

        <a href="${information.infoImg1}" data-type="image" data-fslightbox="mygallery">
            <img width="60" height="60" src="${information.info.infoImg1}" alt="">
        </a>
        <a href="${information.info.infoImg2}" data-type="image" data-fslightbox="mygallery">
            <img width="60" height="60" src="${information.info.infoImg2}" alt="">
        </a>
        <a href="${information.info.infoImg3}" data-type="image" data-fslightbox="mygallery">
            <img width="60" height="60" src="${information.info.infoImg3}" alt="">
        </a>
        </div>
    </div > `;

        good.insertAdjacentHTML("beforeend", elements);
    }
}






// last in here