let favs = [];


var products = document.querySelectorAll('.product-item');

products.forEach(product => {
    product.addEventListener('click', (e) => {
        let basketIcon = product.querySelector('.basket-icon');
        basketIcon.addEventListener('click', (e) => {
            var id = parseInt(product.id);
            var currentProduct = productsSurfaceInfo.find(x => x.id == id);
            console.log(id);
            favs.push(currentProduct);
            createFavsHtml(favs);

            if (!favs.some(item => item.id == currentProduct.id)) {
                favs.push(currentProduct);
                console.log(favs);
                createFavsHtml(currentProduct);
            } else {
                console.warn("Bu ürün zaten favs dizisinde!");
            }
        })

    })
})


function createFavsHtml(productsSurfaceInfo) {
    let offcanvas = document.querySelector('.offcanvas-body');
    var numberOfFavProduct = favs.length;
    let fav_product = 0;
    let icon_number = document.querySelector(".menu_link .number");
    offcanvas.innerHTML = '';
    let total = 0;
    let discount = 0;
    // Tüm ürünler yerine sadece belirli bir ürünü ekleyeceğiz.
    // let element = mainProducts;



    for (let element of productsSurfaceInfo) {
        total += element.info.price;
        discount += element.info.discount;
        let info = ` 
        <a href="javascript:void(0)">
            <div class="card product-item" id="${element.id}">
            <img src="${element.info.img}" class="card-img-top card_basket_photo" alt="...">
                 <div class="card-body">
                    <h5 class="card-title"><i class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i
                        class="fa-regular fa-star fa-2xs"></i><i class="fa-regular fa-star fa-2xs"></i>
                    </h5>
                    <div class="price">
                         <del>${element.info.price}$</del>
                    <span>${element.info.discount} $</span>
                    </div>
                </div>
            </div>
            <div class="basket_price">
            </div>
     </a>`;
        offcanvas.insertAdjacentHTML("beforeend", info);
    }

    icon_number.innerHTML = `
    <i class="fa-solid fa-basket-shopping"></i>
    <div class="num">${numberOfFavProduct}</div>
    `;

    let totalPriceInfo = `<div class="basket_price"><p>Price without discount: ${total}$</p></div>`;
    let discountPriceINfo = `<div class="basket_price"><p>Price with discount : ${discount}$</p></div>`;
    offcanvas.insertAdjacentHTML("beforeend", totalPriceInfo);
    offcanvas.insertAdjacentHTML("beforeend", discountPriceINfo);

    console.log(favs)
}

// ...
// favs.push(currentProduct);
// console.log(favs);
// createFavsHtml(currentProduct);


document.querySelector(".slicknav_menu").addEventListener("click", function () {
    var menulinks = document.querySelector(".menu_links")
    menulinks.classList.toggle("active");

})