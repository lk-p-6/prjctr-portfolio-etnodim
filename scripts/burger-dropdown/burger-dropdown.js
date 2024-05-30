// variables
const burgerToOpen = document.querySelector(".nav__burger");
const burgerToClose = document.querySelector(".burger-menu__icon");
const burgerContent = document.querySelector(".burger-menu");

// functions
function openBurgerMenu(toOpen, toClose, content){
    toClose.classList.add("burger--active");
    content.classList.add("burger-menu--active");
}

function closeBurgerMenu(toOpen, toClose, content){
    content.classList.remove("burger-menu--active");
    setTimeout(() => toClose.classList.remove("burger--active"), 1000);
}

// open burger code
burgerToOpen.addEventListener("click", () => openBurgerMenu(burgerToOpen, burgerToClose, burgerContent));

burgerToClose.addEventListener("click", () => closeBurgerMenu(burgerToOpen, burgerToClose, burgerContent));