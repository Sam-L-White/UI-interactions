function showItems(parent){
    let dropdown = parent.nextElementSibling
    dropdown.classList.toggle("display")
}

const navButtons = (() => {
    let dropdowns = Array.from(document.querySelectorAll(".dropbtn"))
    dropdowns.forEach(dropdown => dropdown.addEventListener("click", (e) => {
        let parent = e.currentTarget
        showItems(parent)
    }))
})();



