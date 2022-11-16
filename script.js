function showItems(parentClass){
    let items = document.querySelector(`.${parentClass} > .hidden`)
    items.classList.remove("hidden")
    
}

const navButtons = (() => {
    let navbar = document.querySelector(".navbar")
    let navbarItems = Array.from(navbar.children)
    navbarItems.forEach(item => item.addEventListener("click", (e) => {
        let parentClass = e.target.className
        showItems(parentClass)
    }))
})();



