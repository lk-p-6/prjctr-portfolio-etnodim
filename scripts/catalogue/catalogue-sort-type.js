const sortType = document.querySelectorAll(".catalogue-nav__sort-type");

sortType.forEach(sT => {
    sT.addEventListener("click", () => {
        if(sT.classList.contains("catalogue-nav__sort-type--active") == false){
            sortType.forEach(sTr => {
                sTr.classList.remove("catalogue-nav__sort-type--active");
            });
            sT.classList.add("catalogue-nav__sort-type--active");
        } else {
            // pass
        }
    });
});