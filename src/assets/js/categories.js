// let categories = [
//     {
//         id: 1,
//         mainPhoto: "",
//         name: 'Phone'
//     },
//     {
//         id: 2,
//         mainPhoto: "",
//         name: 'TV',
//     },
//     {
//         id: 3,
//         mainPhoto: "",
//         name: 'TV',
//     }, {
//         id: 4,
//         mainPhoto: "",
//         name: 'Home',
//     },
//     {
//         id: 5,
//         mainPhoto: "",
//         name: 'KItchen',
//     }, {
//         id: 6,
//         mainPhoto: "",
//         name: 'Laptop',
//     },
//     {
//         id: 7,
//         mainPhoto: "",
//         name: 'Home',
//     },
// ]


let mainCategories = [
    {
        id: 1,
        categoryId: 1,
        mainPhoto: "",
        name: 'Phone',
        img: "./src/assets/img/airconditioner_image.jpg",
    },
    {
        id: 2,
        categoryId: 2,
        mainPhoto: "",
        name: 'TV',
        img: "./src/assets/img/airconditioner_image.jpg",
    },
    {
        id: 3,
        categoryId: 3,
        mainPhoto: "",
        name: "Air-conditioners",
        img: "./src/assets/img/airconditioner_image.jpg",
    },

]




productInfo();

function productInfo() {
    let info_side_category=document.querySelector(".info_side");
    let  categoryproducts=document.querySelector(".container .products");

    const productId = new URLSearchParams(window.location.search).get('id');
    if (!productId) {
        console.error("CategoryElment Idsi qeyd edilməyib.");
        return;
    }


    const product = mainCategories.find(p => p.id === parseInt(productId));

    if (!product) {
        console.error("Bu idyə uyğun məhsul tapılmadı");
        return;
    }

        
    info_side_category.innerHTML=`
        <div id="${product.id}">
        ${product.name}
   
        </div>`;
        
     categoryproducts.innerHTML=`
     <div id="" >
     ${}
     </div>
     `;

}
     
     

// }

// function getQueryParam(param) {
        //     let urlParams = new URLSearchParams(window.location.search);
        //     return urlParams.get(param);
        // }
        
        // function productInfo() {
        //     let categoryIdFromURL = getQueryParam("id"); // URL'den id parametresini alıyoruz
        
        //     // URL'den aldığımız id değerine sahip kategoriyi buluyoruz
        //     let category = categories.find(x => x.id == categoryIdFromURL);
        //     let productCategory = mainCategories.find(y => y.id == categoryIdFromURL);
        
        //     if (category && productCategory && category.name == productCategory.name) {
        //         let info_side = document.querySelector(".info_side");
        //         if(info_side) {
        //             info_side.innerHTML = `${productCategory.name}`;
        //         }
        //     }
        // }

    // var mainCategories = [
    //     {
    //         id: 1,
    //         mainPhoto: "",
    //         name: 'Phone',
    //         img: "./src/assets/img/airconditioner_image.jpg",
    //     },
    //     {
    //         id: 2,
    //         mainPhoto: "",
    //         name: 'TV',
    //         img: "./src/assets/img/airconditioner_image.jpg",
    //     },
    //     {
    //         id: 3,
    //         mainPhoto: "",
    //         name: "Air-conditioners",
    //         img: "./src/assets/img/airconditioner_image.jpg",
    //     },
    
    // ]


   // let elementsInfo = document.querySelector(".container .products");
    // if (productsSurfaceInfo.categoryId == categories.id) {

    //     for (let element of productsSurfaceInfo) {
        //         let info = `
        
        //         <div class="card product-item" id="${element.id}">
        //             <div class="card-photo">
        //                 <img src="${element.info.img}" class="card-img-top" alt="...">
        //                 <img src="${element.info.hover}" class="card-img-top img" alt="...">
        //             </div>    
        //                 <i class="fa-solid fa-basket-shopping basket-icon"></i>
        //             <span class="sale">Sale</span>
    //             <div class="card-body">
    //                 <h5 class="card-title"><i class="fa-regular fa-star fa-2xs"></i><i
    //                         class="fa-regular fa-star fa-2xs"></i><i
    //                         class="fa-regular fa-star fa-2xs"></i><i
    //                         class="fa-regular fa-star fa-2xs"></i><i class="fa-regular fa-star fa-2xs"></i>
    //                 </h5>
    //                 <a href="src/pages/product.html?id=${element.id}">
    //                     <p class="card-text">${element.firstname}</p>
    //                     <div class="price">
    //                         <del>${element.info.price}$</del>
    //                         <span>${element.info.discount}$</span>
    //                     </div>
    //                 </a>
    //             </div>
    //         </div>

    //     `;
    //         elementsInfo.insertAdjacentHTML("beforeend", info);
    //     }
    // }