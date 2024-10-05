const main = document.querySelector('main')
main.remove()
let newHeader = document.createElement('h1')
// document.body.append(newHeader)
newHeader.setAttribute('id','victory')
newHeader.textContent = "Kevin is the champion"