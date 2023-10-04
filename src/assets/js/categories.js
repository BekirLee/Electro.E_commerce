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
    },
    {
        id: 3,
        mainPhoto: "",
        name: 'TV',
    }
]



function productInfo() {

    let elementsInfo = document.querySelector(".products");
    if (productsSurfaceInfo.categoryId == categories.id) {

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
}