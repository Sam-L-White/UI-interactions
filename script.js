function showItems(parent){
    let dropdown = parent.nextElementSibling
    dropdown.classList.toggle("display")
}

function chooseTab(selectedTab){
    if (selectedTab.querySelector(".tab-selected") === null){
        console.log("not selected")
    }
}

const navController = (() => {
    let dropdowns = Array.from(document.querySelectorAll(".dropbtn"))
    dropdowns.forEach(dropdown => dropdown.addEventListener("click", (e) => {
        let parent = e.currentTarget
        showItems(parent)
    }))
})();

const tabController = (() => {
    let tabButtons = Array.from(document.querySelectorAll(".tab"))
    tabButtons.forEach(tab => tab.addEventListener("click", (e) => {
        let selectedTab = e.currentTarget
        chooseTab(selectedTab)
    }))
})();



