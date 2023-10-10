
let header_tag_names = [
    {
        id: 1,
        name: "Home Apliances",
    },
    {
        id: 2,
        name: "Audio & Video",
    },
    {
        id: 3,
        name: "Refrigator",
    },
    {
        id: 4,
        name: "New arrivals",
    },
    {
        id: 5,
        name: "Today's deal",
    },
    {
        id: 6,
        name: "Gift cards",
    },
]


const productId = new URLSearchParams(window.location.search).get('id');
if (!productId) {
    console.error("CategoryElement Idsi qeyde edilməyib.");
    return;
}


const product = header_tag_names.find(p => p.id === parseInt(productId));
// const productcategory = productsSurfaceInfo.find(p => p.categoryId === parseInt(product.id));

if (!product) {
    console.error("Bu idyə uyğun məhsul tapılmadı");
    return;
}
let products = header_tag_names.find(p => p.id == product.id);
let menu = document.querySelector(".menu");

for (let links of products) {

    let item = `
    <a href="src/assets/pages/header_links_page.html?id="${links.id1}">
        <li class="menu_link">
            ${links.name}
        </li>
    </a>
    `;
    menu.insertAdjacentHTML("beforeend", item);
}