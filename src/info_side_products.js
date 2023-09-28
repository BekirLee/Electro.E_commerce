let info_side_products = [
    {
        id: 1,
        id1: 1,
        info: {
            price: "$49.00",
            discount: "$44.00",
            img: "../img/refrigerator_image2.jpeg",
            hover: "../img/refrigerator_image4.jpeg",
        },
        category: "TV",
        firstname: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        href: "pages/products.html"
    },
    {
        id: 2,
        id1: 2,
        info: {
            price: "$49.00",
            discount: "$44.00",
            img: "../img/refrigerator_image3.jpeg",
            hover: "../img/refrigerator_image5.jpeg",
        },
        category: "Kitchen",
        firstname: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        href: "pages/products.html"
    },
    {
        id: 3,
        id1: 3,
        info: {
            price: "$49.00",
            discount: "$44.00",
            img: "../img/camera_image4.jpeg",
            hover: "../img/camera_image.jpeg",
        },
        category: "TV",
        firstname: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        href: "pages/products.html"
    },

]
document.addEventListener("DOMContentLoaded", function () {
    content();
})

function content() {
    const productid = new URLSearchParams(window.location.search).get('id');
    let elements = document.querySelector(".products_info .container");
    const product2 = info_side_products.find(p => p.id === parseInt(productid));


    for (let element of info_side_products) {
        let product = `
        <div data-id=${element.id}>
        <div class="card product-item" id="">
           <div class="card-photo">
           <img src="${element.info.img}" class="card-img-top" alt="...">
       <img src="${element.info.hover}" class="card-img-top img" alt="...">
    
           </div>
           
           <button>
                   <i class="fa-solid fa-basket-shopping basket-icon"></i>
           </button>
                   <span class="sale">Sale</span>
                   <div class="card-body">
                   <h5 class="card-title"><i class="fa-regular fa-star fa-2xs"></i><i
                   class="fa-regular fa-star fa-2xs"></i><i
                   class="fa-regular fa-star fa-2xs"></i><i
                           class="fa-regular fa-star fa-2xs"></i><i class="fa-regular fa-star fa-2xs"></i>
                   </h5>
                   <p class="card-text">Iphone</p>
                   <div class="price">
                       <del>2000$</del>
                       <span>4000$</span>
                   </div>
                   </div>
       </div>
    </div>
        `;
        elements.insertAdjacentHTML("beforeend", product);
    }

    let info_side = document.querySelector(".products_info .info_side");

    let product_info_text = `
    <div class="basket_price" id="${product2.id}"><p> ${product2.category}</p></div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos velit reprehenderit harum
    quia,
    vero nam quibusdam, soluta tempore, asperiores deleniti? Error voluptates corrupti, et ut sit
    accusantium quibusdam blanditiis.
    </p>
    <span>Showing all number results</span>`;
    info_side.insertAdjacentHTML("beforeend", product_info_text);



    //     elements.innerHTML = `
    //     <div data-id=${product2.id}>
    //     <div class="card product-item" id="">
    //        <div class="card-photo">
    //        <img src="${product2.info.img}" class="card-img-top" alt="...">
    //    <img src="${product2.info.hover}" class="card-img-top img" alt="...">

    //        </div>

    //        <button>
    //                <i class="fa-solid fa-basket-shopping basket-icon"></i>
    //        </button>
    //                <span class="sale">Sale</span>
    //                <div class="card-body">
    //                <h5 class="card-title"><i class="fa-regular fa-star fa-2xs"></i><i
    //                class="fa-regular fa-star fa-2xs"></i><i
    //                class="fa-regular fa-star fa-2xs"></i><i
    //                        class="fa-regular fa-star fa-2xs"></i><i class="fa-regular fa-star fa-2xs"></i>
    //                </h5>
    //                <p class="card-text">Iphone</p>
    //                <div class="price">
    //                    <del>2000$</del>
    //                    <span>4000$</span>
    //                </div>
    //                </div>
    //    </div>
    // </div>
    //     `;
}


var timer;

function showPage() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader_box").style.display = "block";
}

function myFunction() {
    timer = setTimeout(showPage, 1000);
}
