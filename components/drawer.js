const drawer = () => {
    return `<nav id="drawer-main" class="drawer">
            <ul class="main-drawer-list">
                <li>
                    <h3 href="" class="expand-btn">Jewelry ▼</h3>
                    <ul class="sub-drawer-list">
                        <li class="sub-list"><a href="">Something </a></li>
                        <li class="sub-list"><a href="">Something </a></li>
                        <li class="sub-list"><a href="">Something </a></li>
                    </ul>
                </li>
                <li><a href="">Earrings</a></li>
                <li><a href="">Bracelets</a></li>
                <li><a href="">Rings</a></li>
                <li><a href="">Watches</a></li>
            </ul>
        </nav>`;
};

const openNav = () => {
    console.log("openNav called");

    document.getElementById("drawer-main").style.width = "20%";
    document.getElementsByTagName("main")[0].style.width = "80%";
    document.getElementsByTagName("main")[0].style.marginLeft = "20%";
    
    document.querySelectorAll(".item").forEach((item) => {
        item.style.backgroundColor = "rgba(0,0,0,0.1)";
        item.style.borderColor = "rgba(0,0,0,0.1)";
    });

    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.addEventListener('click', checkNav);
};

const closeNav = () => {
    console.log("closeNav called");

    document.getElementById("drawer-main").style.width = "0";
    document.getElementsByTagName("main")[0].style.width = "100%";
    document.getElementsByTagName("main")[0].style.marginLeft = "0";
    document.body.style.backgroundColor = "#f9f9f9";

    document.querySelectorAll(".item").forEach((item) => {
        console.log("closeNav foreach fired");
        item.style.backgroundColor = "#f9f9f9";
        item.style.borderColor = "pink";
    });

    const drawerBtn = document.getElementById("navBtn1");
    if (drawerBtn) drawerBtn.checked = false;
};

const checkNav = (e) => {
    let coords = getXY();
    console.log(e);
    console.log(coords);
    if (e.clientX >= coords.width && e.clientY >= coords.height) {
        closeNav();
    }
};

const getXY = () => {
    let width = (window.innerWidth / 100) * 20;
    let height = (window.innerHeight / 100) * 10;
    return { width, height };
};

const initializeDrawer = () => {
    document.addEventListener("DOMContentLoaded", function () {
        let expandBtns = document.querySelectorAll(".expand-btn");

        expandBtns.forEach((btn) => {
            let subMenu = btn.nextElementSibling;
            subMenu.style.display = "none";

            btn.addEventListener("click", function (e) {
                e.preventDefault();

                document.querySelectorAll(".sub-drawer-list").forEach((menu) => {
                    if (menu !== subMenu) {
                        menu.style.display = "none";
                    }
                });

                subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
            });
        });

        openNav();
        closeNav();
    });
};

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


// Exporting functions for modular usage
export { drawer, openNav, closeNav, initializeDrawer };
