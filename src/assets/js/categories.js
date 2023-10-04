

const categories = [
    {
        id: 1,
        mainPhoto: "",
        name: 'Phone'
    },
    {
        id: 2,
        mainPhoto: "",
        name: 'TV',
    }
]

// getProducts();

// function getProducts() {
//     var elements = document.querySelector(".productsBox");

//     if (!elements) {
//         console.error(".productsBox elementi bulunamadi.");
//         return;
//     }

//     for (var category of categories) {
//         // phone_count //new 
//         let productCount = productsSurfaceInfo.filter(x => x.categoryid == category.id).length;
//         let element = `
//         <a href="./src/productInfo.html?id=${category.id}">
//             <div class="product" id="${category.id}" >
//                 <img src="${category.img}" alt="">
                
//                 <div class="div">
//                     <h2>
//                         ${category.name} <p>${productCount} products</p>
//                     </h2>
//                 </div>
//             </div>
//         </a>`;
//         elements.insertAdjacentHTML("beforeend", element);
//     }
// }

function productInfo() {

    let elementsInfo = document.querySelector(".cards");

    for (let element of productsSurfaceInfo) {
        let info = `
        
        <div class="card product-item" id="${element.id}">
            <div class="card-photo">
                <img src="${element.info.img}" class="card-img-top" alt="...">
                <img src="${element.info.hover}" class="card-img-top img" alt="...">
            </div>    
                <i class="fa-solid fa-basket-shopping basket-icon"></i>
            <span class="sale">Sale</span>
            <div class="card-body">
                <h5 class="card-title"><i class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i class="fa-regular fa-star fa-2xs"></i>
                </h5>
                <a href="src/pages/product.html?id=${element.id}">
                    <p class="card-text">${element.firstname}</p>
                    <div class="price">
                        <del>${element.info.price}$</del>
                        <span>${element.info.discount}$</span>
                    </div>
                </a>
            </div>
        </div>

    `;
        elementsInfo.insertAdjacentHTML("beforeend", info);
    }
}