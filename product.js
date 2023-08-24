let mainProducts = [
    {
        id: 1,
        info: {
            price: "$44.00",
            saleprice: "$4900",
            discount: 10,
            brand: "Mitsubishi",
            category: "air",
            img: "img/beardcleaner.jpg",
            hover: "img/bill_image.jpg",
        },
        name: "Air-conditioners",
        img: "img/airconditioner_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 2,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Bills",
        img: "img/bill_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 3,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Iphone",
        img: "img/phone_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 4,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Laptops",
        img: "img/laptop_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 5,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Kitchendevices",
        img: "img/kitchendevice_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 6,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Refrigerators",
        img: "img/refrigerator_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 7,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Tv",
        img: "img/tv_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 8,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
]

let products = [
    {
        id: 1,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 2,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 3,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 4,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 5,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 6,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 7,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 8,
        info: {
            price: 1800,
            discount: 10,
            brand: "Apple",
            category: "phone",
        },
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },
]


getProducts();
productInfo();

function getProducts() {

    let elements = document.querySelector(".productsBox");

    for (product of mainProducts) {
        let element = ` 
        <div class="product" id="${product.id}" >
        <img src="${product.img}" alt="">
        <h2>
         ${product.name} <p>4 products</p>
        </h2>
        </div>`;
        elements.insertAdjacentHTML("beforeend", element)
    }
}

function productInfo() {

    let elementsInfo = document.querySelector(".cards");
    for (element of mainProducts) {
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
                    <del>$49.00</del>
                    <span>$44.00</span>
                </div>
            </div>
        </div>
    </a>`;
        elementsInfo.insertAdjacentHTML("beforeend", info);
    }
}