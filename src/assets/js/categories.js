
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
        name: "Air-conditioners",
        photo: "/src/assets/img/camera_image2.jpeg",
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
        categoryId: 2,
        price: 249.00,
        discount: 219.00,
        photo: "/src/assets/img/amazon_product.jpg",
        hoverPhoto: "/src/assets/img/background_amazon_product.jpg",
        category: "Kitchen",
        text: "  Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",

    },
    {
        id: 3,
        categoryId: 3,
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

    for (let item of similarProducts) {
        let items = `
                  
                    <div class="card product-item" id="${item.categoryId}">
                    <div class="card-photo">
                        <img src="${item.photo}" class="card-img-top" alt="...">
                        <img src="${item.hoverPhoto}" class="card-img-top img" alt="...">
                    </div>    
                        <i class="fa-solid fa-basket-shopping basket-icon"></i>
                    <span class="sale">Sale</span>
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-regular fa-star fa-2xs"></i><i
                                class="fa-regular fa-star fa-2xs"></i><i
                                class="fa-regular fa-star fa-2xs"></i><i
                                class="fa-regular fa-star fa-2xs"></i><i class="fa-regular fa-star fa-2xs"></i>
                        </h5>
                            <p class="card-text">${item.text}</p>
                            <div class="price">
                                <del>${item.price}$</del>
                                <span>${item.discount}$</span>
                            </div>
                    </div>
                </div>
                `;
        productCategory.insertAdjacentHTML("beforeend", items);
    }
}

// <div class="">
// categoryId=${item.categoryId}
// <img src="${item.photo}">
// </div>


