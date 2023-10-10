
let header_tag_names = [
    {
        id: 1,
        name: "Home Apliances",
    },
    {
        id: 2,
        name: "Audio & Video",
    },
    {
        id: 3,
        name: "Refrigator",
    },
    {
        id: 4,
        name: "New arrivals",
    },
    {
        id: 5,
        name: "Today's deal",
    },
    {
        id: 6,
        name: "Gift cards",
    },
]

var productsSurfaceInfo = [
    {
        id: 1,
        categoryId: 1,
        info: {
            price: 49.00,
            discount: 44.00,
            img: "./src/assets/img/beardcleaner.jpg",
            hover: "./src/assets/img/beardsheaver.jpeg",
        },
        category: "Kitchen",
        firstname: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        href: "../src/assets/pages/products.html"
    },
    {
        id: 2,
        categoryId: 4,
        info: {
            price: 249.00,
            discount: 219.00,
            img: "./src/assets/img/amazon_product.jpg",
            hover: "./src/assets/img/background_amazon_product.jpg",
        },
        category: "Kitchen",
        firstname: "  Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
        href: "../src/assets/pages/products.html"

    },
    {
        id: 3,
        categoryId: 3,
        info: {
            price: 229.00,
            discount: 209.00,
            img: "./src/assets/img/amazon_product2.jpg",
            hover: "./src/assets/img/background_amazon_product.jpg",
        },
        category: "Kitchen",
        firstname: "  Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
        href: "../src/assets/pages/products.html"

    },
    {
        id: 4,
        categoryId: 4,
        info: {
            price: 1499.00,
            discount: 1399.00,
            img: "./src/assets/img/computer.jpg",
            hover: "./src/assets/img/background_computer.jpg",
        },
        category: "Laptop",
        firstname: " 13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
        img: "./src/assets/img/washingmachine_image.jpg",
        href: "../src/assets/pages/products.html"

    },
    {
        id: 5,
        categoryId: 4,
        info: {
            price: 1029.00,
            discount: 999.00,
            img: "./src/assets/img/computer2.jpg",
            hover: "./src/assets/img/background_computer.jpg",
        },
        category: "Laptop",
        firstname: "15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
        href: "../src/assets/pages/products.html"

    },
    {
        id: 6,
        categoryId: 4,
        info: {
            price: 699.00,
            discount: 659.00,
            img: "./src/assets/img/tablet.jpg",
            hover: "./src/assets/img/phone_image.jpg",
        },
        category: "Laptop",
        firstname: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
        href: "../src/assets/pages/products.html"

    },
    {
        id: 7,
        categoryId: 5,
        info: {
            price: 1299.00,
            discount: 1199.00,
            img: "./src/assets/img/phone1.jpg",
            hover: "./src/assets/img/phonebackground_img.jpg",
        },
        category: "phone",
        firstname: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
        href: "../src/assets/pages/products.html"

    },
    {
        id: 8,
        categoryId: 5,
        info: {
            price: 1099.00,
            discount: 999.00,
            img: "./src/assets/img/phone2.jpg",
            hover: "./src/assets/img/phonebackground_img.jpg",
        },
        category: "phone",
        firstname: "5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
        href: "../src/assets/pages/products.html"

    },
]



const productId = new URLSearchParams(window.location.search).get('id');
if (!productId) {
    console.error("CategoryElement Idsi qeyde edilməyib.");
    return;
}


const product = header_tag_names.find(p => p.id === parseInt(productId));
// const productcategory = productsSurfaceInfo.find(p => p.categoryId === parseInt(product.id));

if (!product) {
    console.error("Bu idyə uyğun məhsul tapılmadı");
    return;
}

getElements();

function getElements(){

    let products = header_tag_names.find(p => p.id == product.id);
    let menu = document.querySelector(".menu");
    
    for (let links of products) {
        
        let item = `
        <a href="src/assets/pages/header_links_page.html?id="${links.id}">
            <li class="menu_link">
                ${links.name}
            </li>
        </a>
        `;
        menu.insertAdjacentHTML("beforeend", item);
    }  

    let elements = document.querySelector(".header_link_products");

    for(let item of productsSurfaceInfo){
       let element=`<div>
        ${item.name}
        </div>`;
        elements.insertAdjacentHTML("beforeend",element);
    }
}

// getCategory();

// function getCategory() {
  
//     if (!elements) {
//         console.error(".header_link_products elementi bulunamadi.");
//         return;
//     }

//     for (var category of productsSurfaceInfo) {
//         let productCount = productsSurfaceInfo.filter(x => x.categoryId == category.id).length;
//         let element = `
//             <div class="product" id="${category.id}" >
//                 <img src="${category.img}" alt="">
                
//                 <div class="prduct_count">
//                     <h2>
//                         ${category.name}
//                     </h2>
//                 </div>
//             </div>
//         `;
//         elements.insertAdjacentHTML("beforeend", element);
//     }
// }

