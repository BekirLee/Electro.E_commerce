
var products = document.querySelectorAll('.product-item');

let favs = [];

products.forEach(product => {
    let basketIcon = product.querySelector('.basket-icon');
    basketIcon.addEventListener('click', (e) => {
        var id = parseInt(product.id);
        var currentProduct = productsSurfaceInfo.find(x => x.id == id);



        if (!favs.some(item => item.id == currentProduct.id)) {
            favs.push(currentProduct);
            addProductToFavs();
        } else {
            alert("There is product like that in favs!");
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
        total += element.info.price;
        discount += element.info.discount;
        var info = ` 
        <a href="javascript:void(0)">
            <div class="product-item" id="${element.id}">
                <div class="off-canvas_photo">
                    <img src="${element.info.img}" class="card-img-top card_basket_photo photo_width" style=height:200px alt="...">
                </div>      
                <div class="card-body">
                    <div class="price">
                         <del>${element.info.price}$</del>
                    <span>${element.info.discount} $</span>
                    <i class="fa-solid fa-square-minus minus_icon"></i>
                    </div>
                </div>
            </div>
          
        </a>`;
        offcanvas.insertAdjacentHTML("beforeend", info);
    }

    icon_number.innerHTML = `
    <div class="num">${numberOfFavProduct}</div>
    `;

    let totalPriceInfo = `  <div class="basket_price">
    <div class=" withoutDiscount"><p>Price without discount: ${total}$</p></div>
    <div class=" withDiscount"><p>Total price after discount : ${discount}$</p></
    </div>
    `;

    offcanvas.insertAdjacentHTML("beforeend", totalPriceInfo);

    let minus = document.querySelector(".minus_icon");
    // deleteFav()

    // function deleteFav() {




        minus.addEventListener("click", function () {

            console.log("click yapildi")
            // Örneğin 30 değerini silmek istiyoruz.
            let silinecekIndeks = favs.indexOf(currentProduct);

            if (silinecekIndeks !== -1) {
                favs.splice(silinecekIndeks, 1);
                // console.log("Yeni dizi:", dizi);
            }

        })

    // }
    // })

    console.log(favs)
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
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        backtotop_button.style.opacity = 1;
        header_fluid.style.height = "50px";
        main_menu.style.height = "49px"
    }
    else {
        backtotop_button.style.opacity = 0;
        header_fluid.style.height = "70px";
        main_menu.style.height = "53px"
    }

}

// loader for page

function myFunction() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader_box").style.display = "block";
}

// deleting element

