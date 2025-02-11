console.log("Script is running!");

type Item = {
    img: string;
    name: string;
};

const bestItems: Item[] = [
    { img: "best/earrings.jpg", name: "Elegant Earrings" },
    { img: "best/mock.png", name: "Diamond Earrings" },
    { img: "best/mock.png", name: "Luxury Bracelet" },
    { img: "best/mock.png", name: "Classic Ring" }
];

const newItems: Item[] = [
    { img: "newest/mock.png", name: "Elegant Earrings" },
    { img: "newest/mock.png", name: "Diamond Earrings" },
    { img: "newest/mock.png", name: "Luxury Bracelet" },
    { img: "newest/mock.png", name: "Classic Ring" }
];

const bestGal = document.getElementById("bestGal") as HTMLElement | null;
const newsGal = document.getElementById("newsGal") as HTMLElement | null;

const bestTemp = document.getElementById("bestTemp") as HTMLTemplateElement | null;
const newsTemp = document.getElementById("newsTemp") as HTMLTemplateElement | null;

if (bestGal && bestTemp) galleryP(bestItems, bestTemp, bestGal);
if (newsGal && newsTemp) galleryP(newItems, newsTemp, newsGal);

function galleryP(items: Item[], template: HTMLTemplateElement, gallery: HTMLElement): void {
    items.forEach(item => {
        const clone = template.content.cloneNode(true) as DocumentFragment;
        const imgElement = clone.querySelector(".item-img") as HTMLImageElement | null;
        const textElement = clone.querySelector(".item-text") as HTMLElement | null;
        
        if (imgElement) {
            imgElement.src = item.img;
            imgElement.alt = item.name;
        }
        if (textElement) {
            textElement.textContent = item.name;
        }

        gallery.appendChild(clone);
    });
}

function openNav(): void {
    const drawer = document.getElementById("drawer-main") as HTMLElement | null;
    if (drawer) {
        drawer.style.width = "20%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
}

function closeNav(): void {
    const drawer = document.getElementById("drawer-main") as HTMLElement | null;
    if (drawer) {
        drawer.style.width = "0%";
    }
    document.body.style.backgroundColor = "#f9f9f9";
}
