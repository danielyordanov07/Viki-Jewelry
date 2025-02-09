console.log("Script is running!");

const bestItems = [
    { img: "best/earrings.jpg", name: "Elegant Earrings" },
    { img: "best/mock.png", name: "Diamond Earrings" },
    { img: "best/mock.png", name: "Luxury Bracelet" },
    { img: "best/mock.png", name: "Classic Ring" }
];

const newItems = [
    { img: "newest/mock.png", name: "Elegant Earrings" },
    { img: "newest/mock.png", name: "Diamond Earrings" },
    { img: "newest/mock.png", name: "Luxury Bracelet" },
    { img: "newest/mock.png", name: "Classic Ring" }
];

const bestGal = document.getElementById("bestGal");
const newsGal = document.getElementById("newsGal");

const bestTemp = document.getElementById("bestTemp");
const newsTemp = document.getElementById("newsTemp");

galleryP(bestItems, bestTemp, bestGal);
galleryP(newItems, newsTemp, newsGal);

function galleryP(items, template, gallery) {
    items.forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".item-img").src = item.img;
        clone.querySelector(".item-img").alt = item.name;
        clone.querySelector(".item-text").textContent = item.name;
        gallery.appendChild(clone);
    });
}


function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "#f9f9f9";
  }