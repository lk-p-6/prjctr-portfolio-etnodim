const openFilterBtn = document.querySelector(".dropdown-check-click");
const filterContent = document.querySelector(".aside-filter__content");
const filterArrow = document.querySelector(".dropdown-check-click__select-arrow");

openFilterBtn.addEventListener("click", () => {
    if(window.innerWidth < 1024){
        if(filterContent.classList.contains("aside-filter__content--open") == true){
            filterContent.classList.remove("aside-filter__content--open");
            filterArrow.classList.remove("dropdown-check-click__select-arrow--open");
        } else {
            filterContent.classList.add("aside-filter__content--open");
            filterArrow.classList.add("dropdown-check-click__select-arrow--open");
        }
    } else {
        // pass
    }
});

visualViewport.addEventListener("resize", () => {
    if(window.innerWidth > 1024){
        filterContent.classList.remove("aside-filter__content--open");
        filterArrow.classList.remove("dropdown-check-click__select-arrow--open");
    } else {
        //pass
    }
})
