
let links = [
    { name: "Link 1", link: "/link1" },
    { name: "Link 2", link: "/link2" },
    { name: "Link 3", link: "/link3" },
    // Add more links as needed
];

let buttonLink = "/button-link";
let buttonText = "Button Text";

let isClicked = false;

const mobileMenu = document.getElementById("header-menu");
const mobileOpenButton = document.getElementById("mobile-open-button");
const mobileCloseButton = document.getElementById("mobile-close-button");
mobileCloseButton.style.display = "none";

function toggleMenu() {
    isClicked = !isClicked;

    if (isClicked) {
        mobileMenu.style.display = "grid";
        mobileMenu.style.opacity = "1";
        mobileOpenButton.style.display = "none";
        mobileCloseButton.style.display = "block";
    } else {
        mobileMenu.style.display = "none";
        mobileMenu.style.opacity = "0";
        mobileOpenButton.style.display = "block";
        mobileCloseButton.style.display = "none";
    }
}
