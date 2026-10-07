const cards = document.querySelectorAll(".card")
const lists = document.querySelectorAll(".list") // Fixed: changed 'list' to 'lists'

for(const card of cards) {
    card.addEventListener("dragstart", dragStart)
    card.addEventListener("dragend", dragEnd)
}

for(const list of lists) { // Fixed: now loops over 'lists'
    list.addEventListener("dragover", dragOver)
    list.addEventListener("dragenter", dragEnter)
    list.addEventListener("dragleave", dragLeave)
    list.addEventListener("drop", dragDrop) // Fixed: matches function name below
}

function dragStart(e) {
    e.dataTransfer.setData("text/plain", this.id)
}

function dragEnd() {
    console.log("Drag ended")
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.classList.add("over") // Fixed: added class on enter to show visual state
}

function dragLeave(e) {
    this.classList.remove("over")
}

function dragDrop(e) { // Fixed: renamed from 'Drop' to 'dragDrop'
    const id = e.dataTransfer.getData("text/plain")
    const card = document.getElementById(id)

    this.appendChild(card) // Fixed: corrected typo 'appendChird' -> 'appendChild'
    this.classList.remove("over")
}