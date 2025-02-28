import { openNav, closeNav } from './drawer.js';

const header = () => {
    return `<header>
            <div class="drawer-button-div">
                <input type="checkbox" id="navBtn1" class="navBtn"></input>
                <label for="navBtn1">≡</label>
            </div>
            <div class="head-main">Viki's Designs</div>
            <div class="head-right"></div>
        </header>`;
};

const initializeHeader = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const navBtn = document.getElementById("navBtn1");
        if (navBtn) {
            navBtn.addEventListener("change", function () {
                if (this.checked) {
                    openNav();
                }
            });
        }
    });
    const drawerBtn = document.getElementById("navBtn1");
        if (drawerBtn) {
            drawerBtn.addEventListener('change', function () {
                if (!this.checked) {
                    closeNav();
                }
            });
        }
};

export { header, initializeHeader };
