// document.addEventListener("DOMContentLoaded", function () {
//     // Search Button Functionality
//     document.getElementById("search-btn").addEventListener("click", function () {
//         let searchValue = document.getElementById("search-input").value;
//         if (searchValue.trim() !== "") {
//             console.log("Searching for:", searchValue);
//         } else {
//             alert("Please enter a food item to search.");
//         }
//     });

    // Cart Modal Functionality
    // let cartModal = document.getElementById("cart-modal");
//     let cartButton = document.getElementById("cart-button");
//     let closeModal = document.getElementById("close-modal");

//     cartButton.addEventListener("click", function () {
//         cartModal.style.display = "flex";
//     });

//     closeModal.addEventListener("click", function () {
//         cartModal.style.display = "none";
//     });

//     window.addEventListener("click", function (event) {
//         if (event.target === cartModal) {
//             cartModal.style.display = "none";
//         }
//     });

//     // Carousel Functionality
//     let foodGrid = document.getElementById("food-grid");
//     let prevBtn = document.getElementById("prevBtn");
//     let nextBtn = document.getElementById("nextBtn");

//     nextBtn.addEventListener("click", function () {
//         foodGrid.scrollBy({ left: 250, behavior: "smooth" });
//     });

//     prevBtn.addEventListener("click", function () {
//         foodGrid.scrollBy({ left: -250, behavior: "smooth" });
//     });

//     const track = document.querySelector('.carousel-track');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');
//     const items = document.querySelectorAll('.item');
//     const itemWidth = items[0].offsetWidth + 20;
//     let index = 0;

//     nextButton.addEventListener('click', () => {
//         if (index < items.length - 1) {
//             index++;
//             track.style.transform = `translateX(-${index * itemWidth}px)`;
//         }
//     });

//     prevButton.addEventListener('click', () => {
//         if (index > 0) {
//             index--;
//             track.style.transform = `translateX(-${index * itemWidth}px)`;
//         }
//     });

//     const video = document.getElementById('food-video');
//     const playButton = document.querySelector('.play-button');

//     playButton.addEventListener('click', () => {
//         if (video.paused) {
//             video.play();
//             playButton.style.display = 'none';
//         } else {
//             video.pause();
//             playButton.style.display = 'block';
//         }
//     });
    
// });

document.addEventListener("DOMContentLoaded",function df () {
const decreaseButton = document.querySelector(".decrease");
const increaseButton = document.querySelector(".increase");
const quantityDisplay = document.querySelector(".itemValue");

let quantity = 1;

increaseButton.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
});

decreaseButton.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});
});
//By ayush
// function addToCart() {
//     const addToCartButton = document.querySelector(".add-button");
//     const itemAddition = document.querySelector(".quantity");

//     if (addToCartButton) {
//         addToCartButton.style.display = "none"; 
//     } else {
//         console.error("add-button element not found!");
//     }

//     if (itemAddition) {
//         itemAddition.style.display = "block"; 
//     } else {
//         console.error("quantity element not found!");
//     }
// }

//by AI
function addToCart(event) {
    const addToCartButton = event.target; // Get the clicked button
    const foodCard = addToCartButton.closest(".food-card"); // Find the parent food-card
    const itemAddition = foodCard.querySelector(".quantity"); // Find the quantity selector in this card

    if (addToCartButton) {
        addToCartButton.style.display = "none"; // Hide the Add to Cart button
    } else {
        console.error("Add to Cart button not found!");
    }

    if (itemAddition) {
        itemAddition.style.display = "flex"; // Show the quantity selector
    } else {
        console.error("Quantity element not found!");
    }
}

// Attach the function to all "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", function () {
    const addButtons = document.querySelectorAll(".add-button");
    addButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });
});
