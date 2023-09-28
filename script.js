let favs = [];


var products = document.querySelectorAll('.product-item');

products.forEach(product => {
    product.addEventListener('click', (e) => {
        var id = parseInt(e.target.parentElement.id);
        var currentProduct = productsSurfaceInfo.find(x => x.id == id);
        console.log(id);
        favs.push(currentProduct);
        // console.log(favs);
        createFavsHtml(favs);
    })
})


function createFavsHtml(productsSurfaceInfo) {
    let offcanvas = document.querySelector('.offcanvas-body');
    offcanvas.innerHTML = '';
    let total = 0;
    // Tüm ürünler yerine sadece belirli bir ürünü ekleyeceğiz.
    // let element = mainProducts;

    for (let element of productsSurfaceInfo) {
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
                         <del>${element.info.price}</del>
                    <span>${element.info.discount}</span>
                    </div>
                </div>
            </div>
            <div class="basket_price">
            <p>Total price:${total += element.info.price}$</p>
            </div>
     </a>`;
        offcanvas.insertAdjacentHTML("beforeend", info);
    }
    console.log(favs)
}

// ...
favs.push(currentProduct);
console.log(favs);
createFavsHtml(currentProduct);


document.querySelector(".slicknav_menu").addEventListener("click", function () {
    var menulinks = document.querySelector(".menu_links")
    menulinks.classList.toggle("active");

})