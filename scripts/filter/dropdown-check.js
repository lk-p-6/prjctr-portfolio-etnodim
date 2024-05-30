const dropdownSelect = document.querySelectorAll(".dropdown-check__select");
const dropdownOption = document.querySelectorAll(".dropdown-check__option");
const dropdownArrow = document.querySelectorAll(".dropdown-check__select-arrow");

// dropdown-check__select-arrow--open

dropdownSelect.forEach((drop, index) => {
    drop.addEventListener("click", () => {
        if(window.innerWidth > 1024){
            if(dropdownOption[index].classList.contains("dropdown-check__option--open") == true){
                dropdownOption[index].classList.remove("dropdown-check__option--open");
                dropdownArrow[index].classList.remove("dropdown-check__select-arrow--open");
            } else {
                dropdownOption[index].classList.add("dropdown-check__option--open");
                dropdownArrow[index].classList.add("dropdown-check__select-arrow--open");
            }
        } else {
            // pass
        }
    });
})

visualViewport.addEventListener("resize", () => {
    if(window.innerWidth < 1024){
        dropdownOption.forEach(opt => {
            opt.classList.remove("dropdown-check__option--open");
        })
        dropdownArrow.forEach(arw => {
            arw.classList.remove("dropdown-check__select-arrow--open");
        })
    } else {
        //pass
    }
})
