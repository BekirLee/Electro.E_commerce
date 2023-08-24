let products = [
    {
        id: 1,
        price: 1800,
        discount: 10,
        brand: "Apple",
        category: "phone",
        name: "Air-conditioners",
        img: "img/airconditioner_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 2,
        price: 1800,
        discount: 10,
        brand: "Apple",
        category: "phone",
        name: "Bills",
        img: "img/bill_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 3,
        price: 1800,
        discount: 10,
        brand: "Apple",
        category: "phone",
        name: "Iphone",
        img: "img/phone_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 4,
        price: 1800,
        discount: 10,
        brand: "Apple",
        category: "phone",
        name: "Laptops",
        img: "img/laptop_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 5,
        price: 1800,
        discount: 10,
        brand: "Apple",
        category: "phone",
        name: "Kitchendevices",
        img: "img/kitchendevice_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 6,
        price: 1800,
        discount: 10,
        brand: "Apple",
        category: "phone",
        name: "Refrigerators",
        img: "img/refrigerator_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 7,
        price: 1800,
        discount: 10,
        brand: "Apple",
        category: "phone",
        name: "Tv",
        img: "img/tv_image.jpg",
        href: "pages/products.html"
    },
    {
        id: 8,
        price: 1800,
        discount: 10,
        brand: "Apple",
        category: "phone",
        name: "Washingmachines",
        img: "img/washingmachine_image.jpg",
        href: "pages/products.html"
    },


]

getProducts();

function getProducts() {

    let elements = document.querySelector(".productsBox");

    for (product of products) {
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