const items = [
    { img: "images/earrings.jpg", name: "Elegant Earrings" },
    { img: "images/candle.jpg", name: "Diamond Earrings" },
    { img: "images/mock.png", name: "Luxury Bracelet" },
    { img: "images/mock.png", name: "Classic Ring" }
];

const container = document.getElementById("items-container");
const template = document.getElementById("items-template");

items.forEach(item => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".item-img").src = item.img;
    clone.querySelector(".item-img").alt = item.name;
    clone.querySelector("item-text").textContent = item.name;
    container.appendChild(clone);
});