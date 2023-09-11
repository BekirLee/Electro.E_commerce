const products = [
    {
        id: 1,
        info: {
            price: "$49.00",
            discount: "$44.00",
            brand: "Toshiba",
            delivery: "Newest technology",
            status: "Best in class components",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            category: "Home",
            img: "img/beardcleaner.jpg",
            hover: "img/bill_image.jpg",
            infoImg1: "img/phone_info1.jpg",
            infoImg2: "img/phone_info2.jpg",
            infoImg3: "img/phone_info2.jpg",
        },
        name: "Beard cleaner",
        image: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 2,
        info: {
            price: "$249.00",
            discount: "$219.00",
            brand: "Tefal",
            delivery: "Newest technology",
            status: "Best in class components",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            category: "Home",
            img: "img/amazon_product.jpg",
            hover: "img/background_amazon_product.jpg",
            infoImg1: "img/amazon_product2.jpg",
            infoImg2: "img/background_amazon_product.jpg",
            infoImg3: "img/amazon_product.jpg",
        },
        name: "Cleaner",
        image: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 3,
        info: {
            price: "$229.00",
            discount: "$209.00",
            brand: "Tefal",
            delivery: "Newest technology",
            status: "Best in class components",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            category: "Home",
            img: "img/amazon_product2.jpg",
            hover: "img/background_amazon_product.jpg",
            infoImg1: "img/amazon_product2.jpg",
            infoImg2: "img/background_amazon_product.jpg",
            infoImg3: "img/amazon_product.jpg",
        },
        name: "Cleaner",
        image: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 4,
        info: {
            price: "$1,499.00",
            discount: "$1,399.00",
            brand: "İntel",
            delivery: "Newest technology",
            status: "Best in class components",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            category: "Laptop",
            img: "img/computer.jpg",
            hover: "img/background_computer.jpg",
            infoImg1: "img/computer2.jpg",
            infoImg2: "img/background_computer.jpg",
            infoImg3: "img/laptop_image.jpg",
        },
        name: "İntel420",
        image: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 5,
        info: {
            price: '$1029.00',
            discount: "$999.00",
            brand: "İntel",
            delivery: "Newest technology",
            status: "Best in class components",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            category: "Laptop",
            img: "img/computer2.jpg",
            hover: "img/background_computer.jpg",
            infoImg1: "img/computer.jpg",
            infoImg2: "img/background_computer.jpg",
            infoImg3: "img/laptop_image.jpg",
        },
        name: "İntel200",
        image: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 6,
        info: {
            price: "$699.00",
            discount: "$659.00",
            brand: "Apple",
            delivery: "Newest technology",
            status: "Best in class components",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            category: "phone",
            img: "img/tablet.jpg",
            hover: "img/phone_image.jpg",
            infoImg1: "img/phone_image.jpg",
            infoImg2: "img/phone1.jpg",
            infoImg3: "img/phone_info2.jpg",
        },
        name: "Iphone13",
        image: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 7,
        info: {
            price: "$1,299.00",
            discount: "$1,199.00",
            brand: "Apple",
            delivery: "Newest technology",
            status: "Best in class components",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            category: "phone",
            img: "img/phone1.jpg",
            hover: "img/phonebackground_img.jpg",
            infoImg1: "img/phone2.jpg",
            infoImg2: "img/phonebackground_img.jpg",
            infoImg3: "img/phone_info1.jpg",
        },
        name: "Iphone14 Pro",
        image: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 8,
        info: {
            price: "$1,099.00",
            discount: "$999.00",
            brand: "Apple",
            delivery: "Newest technology",
            status: "Best in class components",
            size: "Dimensions -69.5 x 75.0 x 169.0",
            guarantee: "12 years warranty",
            category: "phone",
            img: "img/phone2.jpg",
            hover: "img/phonebackground_img.jpg",
            infoImg1: "img/phone_info2.jpg",
            infoImg2: "img/phone_image.jpg",
            infoImg3: "img/phone_info1.jpg",
        },
        name: "Iphone13 Mini    ",
        image: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
]

document.addEventListener("DOMContentLoaded", function () {
    info();
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

    feautures.innerHTML = `
                        <li class="feauture">${product.info.price}</li>
                        <li class="feauture">${product.info.discount} </li>
                        <li class="feauture">${product.name}</li>
                        <li class="feauture"> ${product.info.size}</li>
                        <li class="feauture"> ${product.info.delivery}</li>
                        <li class="feauture"> ${product.info.brand}</li>
                        
    `;


}
// last in here