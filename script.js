document.querySelector(".slicknav_menu").addEventListener("click", function () {
    var menulinks = document.querySelector(".menu_links")
    menulinks.classList.toggle("active");

})




// var products = document.querySelectorAll('.product-item');


// products.forEach(product => {
//     product.addEventListener('click', (e) => {
//         var id = parseInt(e.target.parentElement.id);
//         var currentProduct = mainProducts.find(x => x.id == id);
//         console.log(id);
//         favs.push(currentProduct)
//         console.log(favs)
//         createFavsHtml(product)
//     })
// })

var products = document.querySelectorAll('.product-item');

products.forEach(product => {
    product.addEventListener('click', (e) => {
        const id = parseInt(e.target.parentElement.id);
        var currentProduct = mainProducts.find(x => x.id == id);
        
        // Eğer bu ürün favs dizisinde değilse ekleyelim
        if (!favs.some(item => item.id == currentProduct.id)) {
            favs.push(currentProduct);
            console.log(favs);
            createFavsHtml(favs);
        } else {
            console.warn("Bu ürün zaten favs dizisinde!");
        }
    });
});



// pervin teacher's codes

function createFavsHtml(favs) {
    var favs = document.querySelector('.offcanvas-body')
    for (var element of products) {
        let info = ` <a href="javascript:void(0)">
        <div class="card product-item" id="${element.id}">
            <img src="${element.img}" class="card-img-top" alt="...">
            <img src="${element.hover}" class="card-img-top img" alt="...">
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
                <p class="card-text">${element.firstname}</p>
                <div class="price">
                    <del>${element.price}</del>
                    <span>${element.discount}</span>
                </div>
            </div>
        </div>
    </a>`;
        favs.insertAdjacentHTML("beforeend", info);
    }
    console.log(favs)
}

