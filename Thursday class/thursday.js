const paragraph= document.getElementById("paragraph")
console.dir(paragraph)

console.log("button")
const button = document.getElementById("click")
console.log(button)
button.addEventListener("click",function () {
    console.log("clicked")
})

const formElemant document.querySelector("form")

formElemant.addEventListener("submit", function(event){
    event.preventDefault()
})