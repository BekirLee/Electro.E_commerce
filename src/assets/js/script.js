
var productsList = document.querySelectorAll('.product-item');

let favs = [];


document.querySelector(".fa-heart").addEventListener("click", function (event) {
    let basket = document.querySelector(".cards .card");
    event.preventDefault();

    console.log(basket);
});

productsList.forEach(product => {
    let basketIcon = product.querySelector('.fa-heart');
    basketIcon.addEventListener('click', (e) => {
        var id = parseInt(product.id);
        var currentProduct = products.find(x => x.id == id);
        basketIcon.style.color = "red";

        if (!favs.some(item => item.id == currentProduct.id)) {
            favs.push(currentProduct);
            alertify.success('Added product');
            addProductToFavs();
        } else {
            // alert("There is product like that in favs!");
            alertify.warning("There is product like that in favs!")
        }
    })

})


function addProductToFavs() {
    let offcanvas = document.querySelector('.offcanvas-body');
    var numberOfFavProduct = favs.length;
    let icon_number = document.querySelector(".menu_link .number .fa-basket-shopping");
    offcanvas.innerHTML = '';
    let total = 0;
    let discount = 0;



    for (let element of favs) {
        total += +element.price;
        discount += +element.discount;
        var item = ` 
        <a href="javascript:void(0)">
            <div class="product-item" id="${element.id}">
                <div class="off-canvas_photo">
                    <img src="${element.photo}" class="card-img-top card_basket_photo photo_width" style=height:200px alt="...">
                </div>      
                <div class="card-body">
                    <div class="price">
                         <del>${element.price}$</del>
                    <span>${element.discount} $</span>
                    <i id="${element.id}" class="fa-solid fa-square-minus minus_icon"></i>
                    </div>
                </div>
            </div>
          
        </a>`;
        offcanvas.insertAdjacentHTML("beforeend", item);
    }

    icon_number.innerHTML = `
    <div class="num">${numberOfFavProduct}</div>
    `;

    let totalPriceInfo = `  <div class="basket_price">
    <div class=" withoutDiscount"><p>Price without discount: ${total}$</p></div>
    <div class=" withDiscount"><p>Total price after discount : ${discount}$</p>
    </div>
    `;

    offcanvas.insertAdjacentHTML("beforeend", totalPriceInfo);

    let      = document.querySelectorAll(".minus_icon");
    minusIcons.forEach(minus => {
        minus.addEventListener("click", function () {
            let id = parseInt(minus.getAttribute('id')); // idni int. edir
            deleteproductFromFavs(id)
        });
    });
}





function deleteproductFromFavs(id) {
    let currentProduct = favs.find(item => item.id == id); // favsin icinden indexi tapir

    if (currentProduct) {
        favs.splice(currentProduct, 1);
        addProductToFavs(); // Call this function again to refresh the UI
    }
}
// 
document.querySelector(".slicknav_menu").addEventListener("click", function () {
    var menulinks = document.querySelector(".menu_links")
    menulinks.classList.toggle("active");

})


// backtotop 

let backtotop_button = document.getElementById("backtotop");
let header_fluid = document.querySelector(".header_fluid");
let main_menu = document.querySelector(".main_menu");


window.onscroll = function () {
    scrollEvent();
}

function scrollEvent() {
    let bodyheight = document.body.scrollHeight;
    let scrollHalfBody = bodyheight / 4;

    if (document.body.scrollTop > scrollHalfBody || document.documentElement.scrollTop > scrollHalfBody) {
        backtotop_button.style.opacity = 1;
        header_fluid.style.height = "55px";
        main_menu.style.display = "none";
    }
    else {
        backtotop_button.style.opacity = 0;
        header_fluid.style.height = "70px";
        main_menu.style.display = "block";
        main_menu.style.height = "53px"
    }

}
