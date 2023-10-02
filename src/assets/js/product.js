

const categories = [
    {
        id: 14,
        mainPhoto: "",
        name: 'Phone'
    },
    {
        id: 345,
        name: 'TV', mainPhoto: "",
    }
]

let products = [
    {
        id: 1,
        categoryid: 14,
        title: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        price: "$49.00",
        discount: "$44.00",
        brand: "Mitsubishi",

        img: "img/beardcleaner.jpg",
        size: "Dimensions -69.5 x 75.0 x 169.0",
        guarantee: "12 years warranty",
        status: "Newest technology",
        secondImage: "img/beardsheaver.jpeg",
        mainPhoto: "img/washingmachine_image.jpg",
        additionalPhotos: [
            "img/amazon_product.jpg",
            "img/amazon_product2.jpg",
            "img/beardcleaner.jpg",
        ],
    },
    {
        id: 2,
        categoryid:14,
        info: {
            price: "$249.00",
            discount: "$219.00",
            brand: "Canon",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            status: "Newest technology",
            category: "Home",
            img: "img/amazon_product.jpg",
            hover: "img/background_amazon_product.jpg",
            infoImg1: "img/amazon_product.jpg",
            infoImg2: "img/amazon_product2.jpg",
            infoImg3: "img/amazon_product2.jpg",
        },
        firstname: "Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 3,
        id1: 3,
        info: {
            price: "$229.00",
            discount: "$209.00",
            brand: "Mitsubishi",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            status: "Newest technology",
            category: "Home",
            img: "img/amazon_product2.jpg",
            hover: "img/background_amazon_product.jpg",
            infoImg1: "img/amazon_product2.jpg",
            infoImg2: "img/amazon_product.jpg",
            infoImg3: "img/amazon_product2.jpg",
        },
        firstname: "  Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 4,
        id1: 4,
        info: {
            price: "$1,499.00",
            discount: "$1,399.00",
            brand: "Intel",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            status: "Newest technology",
            category: "Laptop",
            img: "img/computer.jpg",
            hover: "img/background_computer.jpg",
            infoImg1: "img/computer2.jpg",
            infoImg2: "img/laptop_image.jpg",
            infoImg3: "img/computer.jpg",
        },
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
            brand: "Intel",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            status: "Newest technology",
            category: "Laptop",
            img: "img/computer2.jpg",
            hover: "img/background_computer.jpg",
            infoImg1: "img/laptop_image.jpg",
            infoImg2: "img/computer.jpg",
            infoImg3: "img/computer2.jpg",
        },
        firstname: "15.6″ FHD Display Laptop Intel i7  Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 6,
        id1: 6,
        info: {
            price: "$699.00",
            discount: "$659.00",
            brand: "Samsung",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            status: "Newest technology",
            category: "Phone and Tablet",
            img: "img/tablet.jpg",
            hover: "img/phone_image.jpg",
            infoImg1: "img/phone_image.jpg",
            infoImg2: "img/phone_info2.jpg",
            infoImg3: "img/phone2.jpg",
        },
        firstname: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 7,
        id1: 7,
        info: {
            price: "$1,299.00",
            discount: "$1,199.00",
            brand: "Apple",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            status: "Newest technology",
            category: "Phone and Tablet",
            img: "img/phone1.jpg",
            hover: "img/phonebackground_img.jpg",
            infoImg1: "img/phone_info1.jpg",
            infoImg2: "img/phone_image.jpg",
            infoImg3: "img/phone2.jpg",
        },
        firstname: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 8,
        id1: 8,
        info: {
            price: "$1,099.00",
            discount: "$999.00",
            brand: "Apple",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            status: "Newest technology",
            category: "Phone and Tablet",
            img: "img/phone2.jpg",
            hover: "img/phonebackground_img.jpg",
            infoImg1: "img/phone_info1.jpg",
            infoImg2: "img/phone1.jpg",
            infoImg3: "img/phone_info2.jpg",
        },
        firstname: "6G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
]

document.addEventListener("DOMContentLoaded", function () {
});
info();


function info() {
    const productId = new URLSearchParams(window.location.search).get('id');
    if (!productId) {
        console.error("Id qeyd edilməyib.");
        return;
    }


    const product = items.find(p => p.id === parseInt(productId));

    if (!product) {
        console.error("Bu idyə uyğun məhsul tapılmadı");
        return;
    }
    let good = document.querySelector(".gallery-wrap");
    let feautures = document.querySelector(".feautures_ul");

    good.innerHTML = `
    <div data-id="${product.id}" class="gallery ">
        <div class="img-big-wrap img-thumbnail">
           <a target="_blank" href="${product.info.img}" data-type="image" data-fslightbox="mygallery">
             <img src="${product.info.img}" alt="">
            </a>
        </div>
      
        <div class="thumbs-wrap pt-2 " style="text-align: center;">


        // loop
          <a target="_blank"  href="${product.info.infoImg1}" data-type="image" data-fslightbox="mygallery">
            <img width="60" height="60" src="${product.info.infoImg1}" alt="">
          </a>
          <a target="_blank" href="${product.info.infoImg2}" data-type="image" data-fslightbox="mygallery">
            <img width="60" height="60" src="${product.info.infoImg2}" alt="">
          </a>
          <a
           target="_blank" href="${product.info.infoImg3}" data-type="image" data-fslightbox="mygallery">
            <img width="60" height="60" src="${product.info.infoImg3}" alt="">
          </a>
        </div>
    </div > 
    `;

    feautures.innerHTML = `
                         <span class="infoWay">Home/${product.info.category} / ${product.firstname}</span>
                             <h2 class="productName">
                                ${product.firstname}
                             </h2>
                            <p class="price price_info">${product.info.price}$</p>
                            <p>${product.info.discount}</p>
                           <span>Key feautures:</span>
                           
                           <li class="feauture"> ${product.info.guarantee}</li>
                            <li class="feauture"> ${product.info.size}</li>
                            <li class="feauture"> ${product.info.brand}</li>
                            <li class="feauture"> ${product.info.status}</li>
                        `;

}



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

// loader for page

var timer;

function showPage() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader_box").style.display = "block";
}

function myFunction() {
    timer = setTimeout(showPage, 1000);
}
