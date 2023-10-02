

const categories = [
    {
        id: 14,
        mainPhoto: "",
        name: 'Phone'
    },
    {
        id: 345,
        name: 'TV', mainPhoto: "",
    }
]

getProducts();

function getProducts() {
    var elements = document.querySelector(".productsBox");

    if (!elements) {
        console.error(".productsBox elementi bulunamadi.");
        return;
    }

    for (var category of categories) {
        // phone_count //new 
        let productCount = productsSurfaceInfo.filter(x => x.categoryid == category.id).length;
        let element = `
        <a href="./src/productInfo.html?id=${category.id}">
            <div class="product" id="${category.id}" >
                <img src="${category.img}" alt="">
                
                <div class="div">
                    <h2>
                        ${category.name} <p>${productCount} products</p>
                    </h2>
                </div>
            </div>
        </a>`;
        elements.insertAdjacentHTML("beforeend", element);
    }
}
