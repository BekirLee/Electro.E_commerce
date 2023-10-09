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

let header_tag_names = [
    {
        name: "Home Apliances",

    },
]

let menu = document.querySelector(".menu");
for (let links of productsSurfaceInfo) {

    let item = `
    <li class="menu_link"><a href="src/assets/pages/productInfo.html?id="${links.id}">Home apliances</a></li>
    `;
    menu.insertAdjacentHTML("beforeend", item);
}