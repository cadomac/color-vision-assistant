const availableFilters = [
    {
        "name": "Protanomaly",
        "id": "protanomaly"
    },
    {
        "name": "Achromatopsia",
        "id": "achromatopsia"
    },
]

let filterList = document.getElementById('filters-list')

availableFilters.forEach((filter) => {
    let filterItem = document.createElement('li')
    filterItem.innerText = filter.name
    filterList.appendChild(filterItem)
    filterItem.addEventListener('click', () => {
        browser.tabs.insertCSS({code: `body: { filter: url(#${filter.id}); }`})
    })
})

function listenForClick() {
    document.addEventListener("click", (e) => {
        
    })
}

browser.tabs.executeScript({file: "../content_scripts/assistant.js"})
.then()