

document.querySelector(".slicknav_menu").addEventListener("click", function () {
    var menulinks = document.querySelector(".menu_links")
    menulinks.classList.toggle("active");

})




var products = document.querySelectorAll('.product-item')


products.forEach(product => {
    product.addEventListener('click', (e) => {
        const id = e.target.parentElement.id

        var currentProduct = mainProducts.find(x => x.id = id);
        favs.push(currentProduct)
        console.log(favs)
        createFavsHtml(favs)
    })
})



// pervin teacher's codes

function createFavsHtml(products) {
    let favs = document.querySelector('.offcanvas-body')
    for (let element of products) {
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
        console.log(favs)
        favs.insertAdjacentHTML("beforeend", info);
    }

}

// loader for page

var timer;

function showPage() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader_box").style.display = "block";
}

function myFunction() {
    timer = setTimeout(showPage, 3000);
}


// info_side_products
