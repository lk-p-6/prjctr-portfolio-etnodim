const dropdownClickBtn = document.querySelectorAll(".dropdown-click__select");
const dropdownClickOpt = document.querySelectorAll(".dropdown-click__option");
const dropdownClickArrow = document.querySelectorAll(".dropdown-click__select-arrow");

dropdownClickBtn.forEach((dropdownCB, indexCB) => {
    dropdownCB.addEventListener("click", () => {
        if(dropdownClickOpt[indexCB].classList.contains("dropdown-click__option--active") == true){
            dropdownClickOpt[indexCB].classList.remove("dropdown-click__option--active");
            dropdownClickArrow[indexCB].classList.remove("dropdown-click__select-arrow--open");
        } else {
            dropdownClickOpt[indexCB].classList.add("dropdown-click__option--active");
            dropdownClickArrow[indexCB].classList.add("dropdown-click__select-arrow--open");
        }
    });
});