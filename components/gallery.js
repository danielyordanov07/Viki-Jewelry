const bestItems = [
    { img: "best/earrings.jpg", name: "Elegant Earrings", href:"" },
    { img: "best/mock.png", name: "Diamond Earrings", href:"" },
    { img: "best/mock.png", name: "Luxury Bracelet", href:"" },
    { img: "best/mock.png", name: "Classic Ring", href:"" }
];

const newItems = [
    { img: "newest/mock.png", name: "Elegant Earrings", href:"" },
    { img: "newest/mock.png", name: "Diamond Earrings", href:"" },
    { img: "newest/mock.png", name: "Luxury Bracelet", href:"" },
    { img: "newest/mock.png", name: "Classic Ring", href:"" }
];

function populateGallery(items, template, gallery) {
    items.forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".item-img").src = item.img;
        clone.querySelector(".item-img").alt = item.name;
        clone.querySelector(".item-text").textContent = item.name;
        gallery.appendChild(clone);
    });
}

    const bestGal = document.getElementById("bestGal");
    const newsGal = document.getElementById("newsGal");

    const bestTemp = document.getElementById("bestTemp");
    const newsTemp = document.getElementById("newsTemp");

    populateGallery(bestItems, bestTemp, bestGal);
    populateGallery(newItems, newsTemp, newsGal);

export { bestItems, newItems, populateGallery };
