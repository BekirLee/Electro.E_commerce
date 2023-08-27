let mainProducts = [
    {
        id: 1,
        category: "air-conditioner",
        name: "Air-conditioners",
        img: "img/airconditioner_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 2,
        category: "phone",
        name: "Bills",
        img: "img/bill_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 3,
        category: "phone",
        name: "Iphone",
        img: "img/phone_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 4,

        category: "phone",
        name: "Laptops",
        img: "img/laptop_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 5,

        category: "phone",
        name: "Kitchendevices",
        img: "img/kitchendevice_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 6,

        category: "phone",
        name: "Refrigerators",
        img: "img/refrigerator_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 7,

        category: "phone",
        name: "Tv",
        img: "img/tv_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 8,
        category: "phone",
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
]

let products = [
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


document.addEventListener('DOMContentLoaded', function () {
    getProducts();
    // Diğer fonksiyonlarınızı da burada çağırabilirsiniz.
    productInfo();  
    info();
});


function getProducts() {
    let elements = document.querySelector(".productsBox");

    if (!elements) {
        console.error(".productsBox elementi bulunamıyor.");
        return; // Eğer eleman bulunamazsa fonksiyonu burada sonlandır.
    }

    for (let product of mainProducts) {
        let element = `
        <div class="product" id="${product.id}" >
        <img src="${product.img}" alt="">
        <h2>
         ${product.name} <p>4 products</p>
        </h2>
        </div>`;
        elements.insertAdjacentHTML("beforeend", element);
    }
}

// function getProducts() {

//     var elementler = document.querySelector(".productsBox");
//     if (!elementler) {
//         console.log(".productsBox elementi bulunamiyor.");
//     }
//     for (let product of mainProducts) {
//         let element = ` 
//             <div class="product" id="${product.id}" >
//             <img src="${product.img}" alt="">
//             <h2>
//             ${product.name} <p>4 products</p>
//             </h2>
//             </div>`;
//         elementler.insertAdjacentHTML("beforeend", element);
//     }
// }

function productInfo() {

    let elementsInfo = document.querySelector(".cards");
    for (let element of products) {
        let info = ` <a href="product.html">
        <div class="card" id="${element.id}">
            <img src="${element.info.img}" class="card-img-top" alt="...">
            <img src="${element.info.hover}" class="card-img-top img" alt="...">
            <i class="fa-solid fa-basket-shopping"></i>
            <span class="sale">Sale</span>
            <div class="card-body">
                <h5 class="card-title"><i class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i class="fa-regular fa-star fa-2xs"></i>
                </h5>
                <p class="card-text">Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
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
// dfs

function info() {

    let element = document.querySelector(".all_product_gallery");
    for (let information of products) {
        let elements = `
    <div class="gallery-wrap" id="${information.id}">
         <div class="img-big-wrap img-thumbnail">
            <a href="${information.info.img}" data-type="image" data-fslightbox="mygallery">
            <img src="${information.info.img}" alt="">
            </a>
        </div>
        <div class="thumbs-wrap pt-2 " style="text-align: center;">

        <a href="${information.info.infoImg1}" data-type="image" data-fslightbox="mygallery">
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

        element.insertAdjacentHTML("beforeend", elements);
    }
}

// last in here