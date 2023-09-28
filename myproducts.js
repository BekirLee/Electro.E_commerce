var mainProducts = [
    {
        id: 1,
        id1:1,
        category: "Air-conditioner",
        name: "Air-conditioners",
        img: "img/airconditioner_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 2,
        id1:2,
        category: "Furnace",
        name: "Furnace",
        img: "img/bill_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 3,
        id1:3,
        category: "phone",
        name: "Iphone",
        img: "img/phone_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 4,
        id1:4,
        category: "Laptops",
        name: "Laptops",
        img: "img/laptop_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 5,
        id1:5,
        category: "Kitchen",
        name: "Kitchen",
        img: "img/kitchendevice_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 6,
        id1:6,
        category: "Refrigerators",
        name: "Refrigerators",
        img: "img/refrigerator_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 7,
        id1:7,
        category: "Tv",
        name: "Tv",
        img: "img/tv_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 8,
        id1:8,
        category: "Washingmachines",
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
]


let productsSurfaceInfo = [
    {
        id: 1,
        id1: 1,
        info: {
            price: "$49.00",
            discount: "$44.00",
            img: "img/beardcleaner.jpg",
            hover: "img/beardsheaver.jpeg",
        },
        category: "Kitchen",
        firstname: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        href: "pages/products.html"
    },
    {
        id: 2,
        id1: 2,
        info: {
            price: "$249.00",
            discount: "$219.00",
            img: "img/amazon_product.jpg",
            hover: "img/background_amazon_product.jpg",
        },
        category: "Kitchen",
        firstname: "  Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
        href: "pages/products.html"
    },
    {
        id: 3,
        id1: 3,
        info: {
            price: "$229.00",
            discount: "$209.00",
            img: "img/amazon_product2.jpg",
            hover: "img/background_amazon_product.jpg",
        },
        category: "Kitchen",
        firstname: "  Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
        href: "pages/products.html"
    },
    {
        id: 4,
        id1: 4,
        info: {
            price: "$1,499.00",
            discount: "$1,399.00",
            img: "img/computer.jpg",
            hover: "img/background_computer.jpg",
        },
        category: "Laptop",
        firstname: " 13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 5,
        id1: 5,
        info: {
            price: '$1029.00',
            discount: "$999.00",
            img: "img/computer2.jpg",
            hover: "img/background_computer.jpg",
        },
        category: "Laptop",
        firstname: "15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
        href: "pages/products.html"
    },
    {
        id: 6,
        id1: 6,
        info: {
            price: "$699.00",
            discount: "$659.00",
            img: "img/tablet.jpg",
            hover: "img/phone_image.jpg",
        },
        category: "Laptop",
        firstname: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
        href: "pages/products.html"
    },
    {
        id: 7,
        id1: 7,
        info: {
            price: "$1,299.00",
            discount: "$1,199.00",
            img: "img/phone1.jpg",
            hover: "img/phonebackground_img.jpg",
        },
        category: "phone",
        firstname: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
        href: "pages/products.html"
    },
    {
        id: 8,
        id1: 8,
        info: {
            price: "$1,099.00",
            discount: "$999.00",
            img: "img/phone2.jpg",
            hover: "img/phonebackground_img.jpg",
        },
        category: "phone",
        firstname: "5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
        href: "pages/products.html"
    },
]

var favs = [];


getProducts();
productInfo();

function getProducts() {
    var elements = document.querySelector(".productsBox");

    if (!elements) {
        console.error(".productsBox elementi bulunamadi.");
        return;
    }

    for (var product of mainProducts) {
        // phone_count //new 
        let productCount = productsSurfaceInfo.filter(x => x.category == product.category).length;
        let element = `
        <a href="./src/productInfo.html?id=${product.id1}">
            <div class="product" id="${product.id}" >
                <img src="${product.img}" alt="">
                
                <div class="div">
                    <h2>
                        ${product.name} <p>${productCount} products</p>
                    </h2>
                </div>
            </div>
        </a>`;
        elements.insertAdjacentHTML("beforeend", element);
    }
}



function productInfo() {

    let elementsInfo = document.querySelector(".cards");
    // href="product.html?id=${element.id1}"
    for (let element of productsSurfaceInfo) {
        let info = `

        <div class="card product-item" id="${element.id}">
        <div class="card-photo">
            <img src="${element.info.img}" class="card-img-top" alt="...">
            <img src="${element.info.hover}" class="card-img-top img" alt="...">
        </div>    
            <button>  
                <i class="fa-solid fa-basket-shopping basket-icon"></i>
             </button>
            <span class="sale">Sale</span>
            <div class="card-body">
                <h5 class="card-title"><i class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i class="fa-regular fa-star fa-2xs"></i>
                </h5>
                <p class="card-text">${element.firstname}</p>
                <div class="price">
                    <del>${element.info.price}</del>
                    <span>${element.info.discount}</span>
                </div>
            </div>
        </div>
    </a>`;
        elementsInfo.insertAdjacentHTML("beforeend", info);
    }
}

document.querySelector(".basket-icon").addEventListener("click", function (event) {
    let basket = document.querySelector(".cards .card");
    event.preventDefault();

    console.log(basket);
});