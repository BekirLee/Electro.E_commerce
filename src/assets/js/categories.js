
let categories = [
    {
        id: 1,
        mainPhoto: "src/assets/img/amazon_product.jpg",
        name: 'phone',
        photo: "/src/assets/img/airconditioner_image.jpg",
    },
    {
        id: 2,
        mainPhoto: "",
        name: 'TV',
        photo: "/src/assets/img/camera_image4.jpeg",
    },
    {
        id: 3,
        mainPhoto: "",
        name: "Air-conditioners",
        photo: "/src/assets/img/camera_image2.jpeg",
    },
    {
        id: 4,
        mainPhoto: "",
        name: "Kitchen",
        photo: "/src/assets/img/kitchen_image.jpg",
    },
    {
        id: 5,
        mainPhoto: "",
        name: "Home",
        photo: "/src/assets/img/kitchendevice_image.jpg",
    },
    {
        id: 6,
        mainPhoto: "",
        name: "HeadPhones",
        photo: "/src/assets/img/headphone1.png",
    },
    {
        id: 7,
        mainPhoto: "",
        name: "Laptop",
        photo: "/src/assets/img/laptop_image3.webp ",
    },
    {
        id: 8,
        mainPhoto: "",
        name: "Refrigerators",
        photo: "src/assets/img/refrigerator_image.jpg",
    },
]


var productsSurfaceInfo = [
    {
        id: 1,
        categoryId: 2,
        price: 49.00,
        discount: 44.00,
        photo: "/src/assets/img/beardcleaner.jpg",
        hoverPhoto: "/src/assets/img/beardsheaver.jpeg",
        category: "Kitchen",
        text: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
    },
    {
        id: 2,
        categoryId: 4,
        price: 249.00,
        discount: 219.00,
        photo: "/src/assets/img/amazon_product.jpg",
        hoverPhoto: "/src/assets/img/background_amazon_product.jpg",
        category: "Kitchen",
        text: "  Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",

    },
    {
        id: 3,
        categoryId: 4,
        price: 229.00,
        discount: 209.00,
        photo: "/src/assets/img/amazon_product2.jpg",
        hoverPhoto: "/src/assets/img/background_amazon_product.jpg",
        category: "Kitchen",
        text: "  Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",

    },
    {
        id: 4,
        categoryId: 2,
        price: 1499.00,
        discount: 1399.00,
        photo: "/src/assets/img/computer.jpg",
        hoverPhoto: "/src/assets/img/background_computer.jpg",
        category: "Laptop",
        text: " 13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",

    },
    {
        id: 5,
        categoryId: 2,
        price: 1029.00,
        discount: 999.00,
        photo: "/src/assets/img/computer2.jpg",
        hoverPhoto: "/src/assets/img/background_computer.jpg",
        category: "Laptop",
        text: "15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",

    },
    {
        id: 6,
        categoryId: 2,
        price: 699.00,
        discount: 659.00,
        photo: "/src/assets/img/tablet.jpg",
        hoverPhoto: "/src/assets/img/phone_image.jpg",
        category: "Laptop",
        text: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",

    },
    {
        id: 7,
        categoryId: 1,
        price: 1299.00,
        discount: 1199.00,
        photo: "/src/assets/img/phone1.jpg",
        hoverPhoto: "/src/assets/img/phonebackground_img.jpg",
        category: "phone",
        text: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",

    },
    {
        id: 8,
        categoryId: 1,
        price: 1099.00,
        discount: 999.00,
        photo: "/src/assets/img/phone2.jpg",
        hoverPhoto: "/src/assets/img/phonebackground_img.jpg",
        category: "phone",
        text: "5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",

    },
    {
        id: 9,
        categoryId: 8,
        price: 1199.00,
        discount: 999.00,
        photo: "/src/assets/img/refrigerator_image3.jpeg",
        hoverPhoto: "/src/assets/img/refrigerator_image1.jpeg",
        category: "Refrigerators",
        text: "Refrigerator of -13 degree cold in it for all kind of food"
    },
    {
        id: 10,
        categoryId: 8,
        price: 1199.00,
        discount: 999.00,
        photo: "/src/assets/img/refrigerator_image4.jpeg",
        hoverPhoto: "/src/assets/img/refrigerator_image5.jpeg",
        category: "Refrigerators",
        text: "Refrigerator of -13 degree cold in it for all kind of food",

    },
    {
        id: 11,
        categoryId: 6,
        price: 599.00,
        discount: 499.00,
        photo: "/src/assets/img/headphone.png",
        hoverPhoto: "/src/assets/img/headphone1.png",
        category: "HeadPhones",
        text: "Wifi Wireless Headphone Apple",

    },
    {
        id: 12,
        categoryId: 7,
        price: 1599.00,
        discount: 1499.00,
        photo: "/src/assets/img/computer2.jpg",
        hoverPhoto: "/src/assets/img/laptop_image.jpg",
        category: "Laptop",
        text: "13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",

    },
    {
        id: 13,
        categoryId: 7,
        price: 1299.00,
        discount: 1099.00,
        photo: "/src/assets/img/laptop_image.jpg",
        hoverPhoto: "/src/assets/img/laptop_image3.webp",
        category: "Laptop",
        text: "13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",

    },
    {
        id: 14,
        categoryId: 3,
        price: 799.00,
        discount: 599.00,
        photo: "/src/assets/img/airconditioner_image.jpg",
        hoverPhoto: "/src/assets/img/airconditioner1.jpg",
        category: "Air-conditioners",
        text: "Summer is waiting for this air-conditioner to cool itself",

    },
    {
        id: 15,
        categoryId: 3,
        price: 799.00,
        discount: 599.00,
        photo: "/src/assets/img/airconditioner3.jpg",
        hoverPhoto: "/src/assets/img/airconditioner2.jpeg",
        category: "Air-conditioners",
        text: "Summer is waiting for this air-conditioner to cool itself",

    },
]



document.addEventListener("DOMContentLoaded", function () {
    productInfo();
})

function productInfo() {
    let info_side_category = document.querySelector(".info_side");
    let productCategory = document.querySelector("#products");

    const productId = new URLSearchParams(window.location.search).get('id');
    if (!productId) {
        console.error("CategoryElement Idsi qeyde edilməyib.");
        return;
    }


    const product = categories.find(p => p.id === parseInt(productId));
    const productcategory = productsSurfaceInfo.find(p => p.categoryId === parseInt(product.id));

    if (!product) {
        console.error("Bu idyə uyğun məhsul tapılmadı");
        return;
    }


    info_side_category.innerHTML = `
        <div id="${product.id}">
        ${product.name}
   
        </div>`;


    let similarProducts = productsSurfaceInfo.filter(p => p.categoryId == product.id);
    let categories_link = document.querySelector(".categories");

    for (let items of similarProducts) {
        let item = `
                  
                    <div class="card product-item" id="${items.categoryId}">
                    <div class="card-photo">
                        <img src="${items.photo}" class="card-img-top" alt="...">
                        <img src="${items.hoverPhoto}" class="card-img-top img" alt="...">
                    </div>    
                    <span class="sale">Sale</span>
                    <div class="card-body">
                        <h5 class="card-title">
                        <i class="fa-regular fa-star fa-2xs"></i>
                        <i class="fa-regular fa-star fa-2xs" style="color:orange"></i>
                        <i class="fa-regular fa-star fa-2xs"></i>
                        <i class="fa-regular fa-star fa-2xs"></i>
                        <i class="fa-regular fa-star fa-2xs"></i>
                        </h5>
                            <p class="card-text">${items.text}</p>
                            <div class="price">
                                <del>${items.price}$</del>
                                <span>${items.discount}$</span>
                            </div>
                    </div>
                </div>
                `;
        productCategory.insertAdjacentHTML("beforeend", item);
    }


    for (let links of categories) {
        let link = `
        <a href="src/pages/productInfo.html?id=${links.id}">
            <p class="categorie">${links.name}</p>
         </a> 
         `;
        categories_link.insertAdjacentHTML("beforeend", link);
    }
}


document.querySelector(".slicknav_menu").addEventListener("click", function () {
    var menulinks = document.querySelector(".menu_links")
    menulinks.classList.toggle("active");

})


// backtotop 

let backtotop_button = document.getElementById("backtotop");
let header_fluid = document.querySelector(".header_fluid");
let main_menu = document.querySelector(".main_menu");


window.onscroll = function () {
    scrollEvent();
}

function scrollEvent() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        backtotop_button.style.opacity = 1;
        header_fluid.style.height = "50px";
        main_menu.style.height = "49px"
    }
    else {
        backtotop_button.style.opacity = 0;
        header_fluid.style.height = "70px";
        main_menu.style.height = "53px"
    }

}

