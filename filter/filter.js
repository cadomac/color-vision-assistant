let xhr = new XMLHttpRequest()
xhr.open('GET', browser.runtime.getURL('filter/filters.svg'))
xhr.addEventListener('load', (e) => {
    let filter = xhr.responseXML.documentElement
    filter.width = 0
    filter.height = 0
    document.body.appendChild(filter)
})
xhr.send()