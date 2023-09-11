let products = [
    {
        id: 1,
        id1: 1,
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
        firstname: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 2,
        id1: 2,
        info: {
            price: "$249.00",
            discount: "$219.00",
            brand: "Apple",
            category: "phone",
            img: "img/amazon_product.jpg",
            hover: "img/background_amazon_product.jpg",
        },
        firstname: "  Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 3,
        id1: 3,
        info: {
            price: "$229.00",
            discount: "$209.00",
            brand: "Apple",
            category: "phone",
            img: "img/amazon_product2.jpg",
            hover: "img/background_amazon_product.jpg",
        },
        firstname: "  Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 4,
        id1: 4,
        info: {
            price: "$1,499.00",
            discount: "$1,399.00",
            brand: "Apple",
            category: "phone",
            img: "img/computer.jpg",
            hover: "img/background_computer.jpg",
        },
        firstname: " 13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 5,
        id1: 5,
        info: {
            price: '$1029.00',
            discount: "$999.00",
            brand: "Apple",
            category: "phone",
            img: "img/computer2.jpg",
            hover: "img/background_computer.jpg",
        },
        firstname: "15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 6,
        id1: 6,
        info: {
            price: "$699.00",
            discount: "$659.00",
            brand: "Apple",
            category: "phone",
            img: "img/tablet.jpg",
            hover: "img/phone_image.jpg",
        },
        firstname: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
        name: "Washingmachines",
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
            category: "phone",
            img: "img/phone1.jpg",
            hover: "img/phonebackground_img.jpg",
        },
        firstname: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
        name: "Washingmachines",
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
            category: "phone",
            img: "img/phone2.jpg",
            hover: "img/phonebackground_img.jpg",
        },
        firstname: "5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
]


document.addEventListener("DOMContentLoaded", function () {
    info();
    linkWay();
});


function info() {

    let good = document.querySelector(".gallery-wrap");
    let feautures = document.querySelector(".feautures_ul");
    const productId = new URLSearchParams(window.location.search).get('id');


    if (!productId) {
        console.error("Ürün ID'si bulunamadı.");
        return;
    }

    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        console.error("Ürün bulunamadı.");
        return;
    }

    good.innerHTML = `
    <div data-id="${product.id}" class="gallery product-link">
        <div class="img-big-wrap img-thumbnail">
        <a href="${product.info.img}" data-type="image" data-fslightbox="mygallery">
            <img src="${product.info.img}" alt="">
            </a>
            </div>
      <div class="thumbs-wrap pt-2 " style="text-align: center;">

      <a href="${product.info.infoImg1}" data-type="image" data-fslightbox="mygallery">
            <img width="60" height="60" src="${product.info.infoImg1}" alt="">
            </a>
            <a href="${product.info.infoImg2}" data-type="image" data-fslightbox="mygallery">
            <img width="60" height="60" src="${product.info.infoImg2}" alt="">
        </a>
        <a href="${product.info.infoImg3}" data-type="image" data-fslightbox="mygallery">
            <img width="60" height="60" src="${product.info.infoImg3}" alt="">
            </a>
    </div>
    </div > 
    `;

    // feautures.innerHTML = `
    //                         <li class="feauture">${product.info.price}</li>
    //                         <li class="feauture">${product.info.discount} </li>
    //                         <li class="feauture">${product.name}</li>
    //                         <li class="feauture"> ${product.info.size}</li>
    //                         <li class="feauture"> ${product.info.delivery}</li>
    //                         <li class="feauture"> ${product.info.brand}</li>

    //                     `;

}

function linkWay() {

    let link_way = document.querySelector(".gallery_info");

    for (let eleman of products) {

        link_way.innerHTML = `
                        <span class="infoWay">Home/${eleman.info.category} / ${eleman.firstname}</span>
                        <h2 class="productName">
                           ${eleman.firstname}
                        </h2>
                        <p class="price">1234$</p>
                        <span>Key feautures:</span>
                        <div class="feautures">
                            <ul class="feautures_ul">
                            <li class="feauture">${eleman.info.price}</li>
                                                     <li class="feauture">${eleman.info.discount} </li>
                                                     <li class="feauture">${eleman.name}</li>
                                                 <li class="feauture"> ${eleman.info.size}</li>
                                                 <li class="feauture"> ${eleman.info.delivery}</li>
                                                  <li class="feauture"> ${eleman.info.brand}</li>
                            </ul>
                        </div>
                        `;

    }
}


