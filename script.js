function showItems(parent){
    let dropdown = parent.nextElementSibling
    dropdown.classList.toggle("display")
}

function chooseTab(selectedTab){
    if (selectedTab.querySelector(".tab-selected") === null){
        let currentlySelected = document.querySelector(".tab-selected")
        let selectedDiv = document.createElement("div")
        selectedDiv.classList.add("tab-selected")
        selectedTab.appendChild(selectedDiv)
        currentlySelected.remove()
    }
}

function moveImage(direction){
    let currentImage = document.querySelector(".img-show");
    let allImages = document.querySelectorAll(".image");
    let currentIndex
    let imagesArray = []
    let x = 0
    allImages.forEach(image => {
        imagesArray[x] = image
        if(image == currentImage){
            currentIndex = x;
        }
        x++
    })
    if(direction == 'forward'){
        if(currentIndex == (imagesArray.length - 1)){
            imagesArray[currentIndex].classList.remove('img-show');
            imagesArray[0].classList.add('img-show');
        } else {
            imagesArray[currentIndex].classList.remove('img-show');
            imagesArray[currentIndex].nextElementSibling.classList.add('img-show');
        }
        
    } else if (direction == 'back'){
        if(currentIndex === 0){
            imagesArray[currentIndex].classList.remove('img-show');
            imagesArray[imagesArray.length - 1].classList.add('img-show');
        } else {
            imagesArray[currentIndex].classList.remove('img-show');
            imagesArray[currentIndex].previousElementSibling.classList.add('img-show');
        }
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

const imageController = (() => {
    let backButton = document.querySelector(".back");
    let forwardButton = document.querySelector(".forward");

    backButton.addEventListener("click", (e) => {
        moveImage('back')
    })

    forwardButton.addEventListener("click", (e) => {
        moveImage('forward')
    })
})();


