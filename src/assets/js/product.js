

const categories = [
    {
        id: 14,
        mainPhoto: "",
        name: 'Phone'
    },
    {
        id: 345,
        mainPhoto: "",
        name: 'TV',
    }
]

let products = [
    {
        id: 1,
        categoryid: 1,
        title: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        price: "$49.00",
        discount: "$44.00",
        brand: "Mitsubishi",
        img: "/src/assets/img/beardcleaner.jpg",
        size: "Dimensions -69.5 x 75.0 x 169.0",
        guarantee: "12 years warranty",
        status: "Newest technology",
        secondImage: "/src/assets/img/beardsheaver.jpeg",
        mainPhoto: "/src/assets/img/washingmachine_image.jpg",
        additionalPhotos: [
            "/src/assets/img/amazon_product2.jpg",
            "/src/assets/img/amazon_product.jpg",
            "/src/assets/img/beardcleaner.jpg",
        ],
    },
    {
        id: 2,
        categoryid: 2,

        price: "$249.00",
        discount: "$219.00",
        brand: "Canon",
        size: "Dimensions -69.5 x 75.0 x 169.0",
        guarantee: "12 years warranty",
        status: "Newest technology",
        category: "Home",
        img: "/src/assets/img/amazon_product.jpg",
        // hover: "./src/assets/img/background_amazon_product.jpg",
        additionalPhotos: [
            "/src/assets/img/amazon_product.jpg",
            "/src/assets/img/amazon_product2.jpg",
            "/src/assets/img/amazon_product2.jpg",
        ],
        title: "Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
        // img: "./src/assets/img/washingmachine_image.jpg",
        // href: "pages/products.html"
    },
    {
        id: 3,
        categoryid: 3,


        price: "$229.00",
        discount: "$209.00",
        brand: "Mitsubishi",
        size: "Dimensions -69.5 x 75.0 x 169.0",
        guarantee: "12 years warranty",
        status: "Newest technology",
        category: "Home",
        img: "/src/assets/img/amazon_product2.jpg",
        // hover: "./src/assets/img/background_amazon_product.jpg",
        additionalPhotos: [
            "/src/assets/img/amazon_product2.jpg",
            "/src/assets/img/amazon_product.jpg",
            "/src/assets/img/amazon_product2.jpg",
        ],


        title: "  Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
        // img: "./src/assets/img/washingmachine_image.jpg",
        // href: "pages/products.html"
    },
    {
        id: 4,
        categoryid: 4,


        price: "$1,499.00",
        discount: "$1,399.00",
        brand: "Intel",
        size: "Dimensions -69.5 x 75.0 x 169.0",
        guarantee: "12 years warranty",
        status: "Newest technology",
        category: "Laptop",
        img: "/src/assets/img/computer.jpg",
        // hover: "./src/assets/img/background_computer.jpg",

        additionalPhotos: [
            "/src/assets/img/computer2.jpg",
            "/src/assets/img/laptop_image.jpg",
            "/src/assets/img/computer.jpg",

        ],

        title: " 13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
        // img: "./src/assets/img/washingmachine_image.jpg",
        // href: "pages/products.html"
    },
    {
        id: 5,
        categoryid: 5,


        price: '$1029.00',
        discount: "$999.00",
        brand: "Intel",
        size: "Dimensions -69.5 x 75.0 x 169.0",
        guarantee: "12 years warranty",
        status: "Newest technology",
        category: "Laptop",
        img: "/src/assets/img/computer2.jpg",
        // hover: "./src/assets/img/background_computer.jpg",
        additionalPhotos: [
            "/src/assets/img/laptop_image.jpg",
            "/src/assets/img/computer.jpg",
            "/src/assets/img/computer2.jpg",

        ],



        title: "15.6″ FHD Display Laptop Intel i7  Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
        // img: "./src/assets/img/washingmachine_image.jpg",
        // href: "pages/products.html"
    },
    {
        id: 6,
        categoryid: 6,


        price: "$699.00",
        discount: "$659.00",
        brand: "Samsung",
        size: "Dimensions -69.5 x 75.0 x 169.0",
        guarantee: "12 years warranty",
        status: "Newest technology",
        category: "Phone and Tablet",
        img: "/src/assets/img/tablet.jpg",
        // hover: "./src/assets/img/phone_image.jpg",
        additionalPhotos: [
            "/src/assets/img/phone_image.jpg",
            "/src/assets/img/phone_info2.jpg",
            "/src/assets/img/phone2.jpg",

        ],


        title: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
        // img: "./src/assets/img/washingmachine_image.jpg",
        // href: "pages/products.html"
    },
    {
        id: 7,
        categoryid: 7,


        price: "$1,299.00",
        discount: "$1,199.00",
        brand: "Apple",
        size: "Dimensions -69.5 x 75.0 x 169.0",
        guarantee: "12 years warranty",
        status: "Newest technology",
        category: "Phone and Tablet",
        img: "/src/assets/img/phone1.jpg",
        // hover: "./src/assets/img/phonebackground_img.jpg",
        additionalPhotos: [

            "/src/assets/img/phone_info1.jpg",
            "/src/assets/img/phone_image.jpg",
            "/src/assets/img/phone2.jpg",
        ],

        title: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
        // img: "./src/assets/img/washingmachine_image.jpg",
        // href: "pages/products.html"
    },
    {
        id: 8,
        categoryid: 8,


        price: "$1,099.00",
        discount: "$999.00",
        brand: "Apple",
        size: "Dimensions -69.5 x 75.0 x 169.0",
        guarantee: "12 years warranty",
        status: "Newest technology",
        category: "Phone and Tablet",
        img: "/src/assets/img/phone2.jpg",
        // hover: "./src/assets/img/phonebackground_img.jpg",
        additionalPhotos: [

            "/src/assets/img/phone_info1.jpg",
            "/src/assets/img/phone1.jpg",
            "/src/assets/img/phone_info2.jpg",
        ],


        title: "6G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
        // img: "./src/assets/img/washingmachine_image.jpg",
        // href: "pages/products.html"
    },
]

document.addEventListener("DOMContentLoaded", function () {
    info();
    rateProduct();
});


function info() {
    const productId = new URLSearchParams(window.location.search).get('id');
    if (!productId) {
        console.error("Id qeyd edilməyib.");
        return;
    }


    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        console.error("Bu idyə uyğun məhsul tapılmadı");
        return;
    }

    let good = document.querySelector(".gallery-wrap");
    let feautures = document.querySelector(".feautures_ul");

    good.innerHTML = `
    <div data-id="${product.id}" class="gallery ">

        <div class="img-big-wrap img-thumbnail">
           <a target="_blank" href="${product.img}" data-type="image" data-fslightbox="mygallery">
             <img src="${product.img}" alt="">
            </a>
        </div>

        <div class="thumbs-wrap pt-2 additionalPhotos" style="text-align: center;">

        
        </div>    
        `;

    let additionalPhotos = document.querySelector(".additionalPhotos")
    let htmlOutput = '';
    product.additionalPhotos.forEach(photoUrl => {
        htmlOutput += `
            <a target="_blank" href="${photoUrl}" data-type="image" data-fslightbox="mygallery">
                <img width="60" height="60" src="${photoUrl}" alt="">
            </a>
        `;
    });

    document.querySelector('.additionalPhotos').innerHTML = htmlOutput;


    feautures.innerHTML = `
    <span class="infoWay"> 
    Home / ${product.category} / ${product.title}</span >
                             <h2 class="productName">
                                ${product.title}
                             </h2>
                            <p class="price price_info">${product.price}$</p>
                            <p>${product.discount}</p>
                           <span>Key feautures:</span>
                           
                           <li class="feauture"> ${product.guarantee}</li>
                            <li class="feauture"> ${product.size}</li>
                            <li class="feauture"> ${product.brand}</li>
                            <li class="feauture"> ${product.status}</li>
                                <i id="" class="fa-solid fa-star  black star">
                                <i id="" class="fa-solid fa-star  black star">
                                <i id="" class="fa-solid fa-star  black star">
                                <i id="" class="fa-solid fa-star  black star">
                                <i id="" class="fa-solid fa-star  black star"></i></i></i></i></i>
                            `;

}

// rate product 
function rateProduct() {
    // let starIcon = document.querySelector(".fa-star");
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", function () {
            star.classList.toggle("orange");
        });
    });
}