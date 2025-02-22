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

document.addEventListener('DOMContentLoaded', () => {
    const bestGal = document.getElementById("bestGal");
    const newsGal = document.getElementById("newsGal");

    const bestTemp = document.getElementById("bestTemp");
    const newsTemp = document.getElementById("newsTemp");

    populateGallery(bestItems, bestTemp, bestGal);
    populateGallery(newItems, newsTemp, newsGal);
});

function populateGallery(items, template, gallery) {
    items.forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".item-img").src = item.img;
        clone.querySelector(".item-img").alt = item.name;
        clone.querySelector(".item-text").textContent = item.name;
        gallery.appendChild(clone);
    });
}

function openNav() {
    document.getElementById("drawer-main").style.width = "20%";
    document.getElementsByTagName("main")[0].style.width = "80%";
    document.getElementsByTagName("main")[0].style.marginLeft = "20%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.addEventListener('click', checkNav);
}

function checkNav(e){
    let coords = getXY();
    console.log(e);
    console.log(coords);
    if (e.clientX >= coords.width && e.clientY >= coords.height) {
        closeNav();
    }
}

function closeNav() {
    console.log("closeNav called");
    document.getElementById("drawer-main").style.width = "0";
    document.getElementsByTagName("main")[0].style.marginLeft = "0";
    document.getElementsByTagName("main")[0].style.width = "100%";
    document.body.style.backgroundColor = "#f9f9f9";
}

function getXY(){
    let width = (window.innerWidth / 100) * 20;
    let height = (window.innerHeight / 100) * 10;
    return { width, height };
}

document.addEventListener("DOMContentLoaded", function () {
    let expandBtns = document.querySelectorAll(".expand-btn");

    expandBtns.forEach((btn) => {
        let subMenu = btn.nextElementSibling;
        subMenu.style.display = "none"; // Ensure all submenus are closed on page load

        btn.addEventListener("click", function (e) {
            e.preventDefault();

            // Close any other open submenus
            document.querySelectorAll(".sub-drawer-list").forEach((menu) => {
                if (menu !== subMenu) {
                    menu.style.display = "none";
                }
            });

            // Toggle the clicked submenu
            subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
        });
    });
});
