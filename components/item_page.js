//Carousel
const gallery = [
    { img: "best/earrings.jpg"},
    { img: "best/earrings.jpg"},
    { img: "best/earrings.jpg"},
    { img: "best/earrings.jpg"},
];


// Quantity input
document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity-input");
    const quantityMinus = document.getElementById("quantity-minus");
    const quantityPlus = document.getElementById("quantity-plus");

    document.getElementById("item-availability").textContent = "Available: " + 5;

    quantityInput.value = quantityInput.value || 1;

    quantityMinus.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value, 10) || 1;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    quantityPlus.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value, 10) || 1;
        quantityInput.value = currentValue + 1;
    });

    quantityInput.addEventListener("input", function () {
        if (quantityInput.value < 1 || isNaN(quantityInput.value)) {
            quantityInput.value = 1;
        }
    });
});
