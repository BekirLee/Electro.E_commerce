// let info_side_products = [
//     {
//         id: 1,
//         id1: 1,
//         info: {
//             price: "$49.00",
//             discount: "$44.00",
//             img: "../img/refrigerator_image2.jpeg",
//             hover: "../img/refrigerator_image4.jpeg",
//         },
//         category: "TV",
//         firstname: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
//         href: "pages/products.html"
//     },
//     {
//         id: 2,
//         id1: 2,
//         info: {
//             price: "$49.00",
//             discount: "$44.00",
//             img: "../img/refrigerator_image3.jpeg",
//             hover: "../img/refrigerator_image5.jpeg",
//         },
//         category: "Kitchen",
//         firstname: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
//         href: "pages/products.html"
//     },
//     {
//         id: 3,
//         id1: 3,
//         info: {
//             price: "$49.00",
//             discount: "$44.00",
//             img: "../img/camera_image4.jpeg",
//             hover: "../img/camera_image.jpeg",
//         },
//         category: "TV",
//         firstname: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
//         href: "pages/products.html"
//     },

// ]

// document.addEventListener("DOMContentLoaded", function () {
//     infoProductSide();
// })



// // info_side_products

// function infoProductSide() {
//     let elements = document.querySelector(".products_info .container");
//     let products_info = document.querySelector(".info_side");

//     const ItemId = new URLSearchParams(window.location.search).get('id');


//     if (!ItemId) {
//         console.error("Ürün ID'si bulunamadi.");
//         return;
//     }

//     const Item = info_side_products.find(p => p.id === parseInt(ItemId));

//     if (!Item) {
//         console.error("Ürün bulunamadi.");
//         return;
//     }

//     // products_info.innerHTML = `
//     // <h2>${product.category}</h2>
//     // `;


//     // products_info.innerHTML = `
//     // <h2></h2>

//     // `;


//     // for (let product of info_side_products) {

//     // let element =
//     elements.innerHTML = `  
     
//         <div data-id=${Item.id}>
//              <div class="card product-item" id="">
//                 <div class="card-photo">
//                 <img src="${Item.info.img}" class="card-img-top" alt="...">
//             <img src="${Item.info.hover}" class="card-img-top img" alt="...">

//                 </div>
                
//                 <button>
//                         <i class="fa-solid fa-basket-shopping basket-icon"></i>
//                 </button>
//                         <span class="sale">Sale</span>
//                         <div class="card-body">
//                         <h5 class="card-title"><i class="fa-regular fa-star fa-2xs"></i><i
//                         class="fa-regular fa-star fa-2xs"></i><i
//                         class="fa-regular fa-star fa-2xs"></i><i
//                                 class="fa-regular fa-star fa-2xs"></i><i class="fa-regular fa-star fa-2xs"></i>
//                         </h5>
//                         <p class="card-text">Iphone</p>
//                         <div class="price">
//                             <del>2000$</del>
//                             <span>4000$</span>
//                         </div>
//                         </div>
//             </div>
//         </div>
//                     `;

//     products_info.innerHTML = ` <h2>${Item.category}</h2>`;
//     // elements.insertAdjacentHTML("beforeend", element);
//     // }
// }
