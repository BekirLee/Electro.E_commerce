
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

let menu = document.querySelector(".menu");
for (let links of header_tag_names) {

    let item = `
    <a href="src/assets/pages/header_links_page.html?id="${links.id}">
        <li class="menu_link">
            ${links.name}
        </li>
    </a>
    `;
    menu.insertAdjacentHTML("beforeend", item);
}