let houseballoons = document.querySelector("#houseBalloons")
let box = document.querySelector("#box")

box.addEventListener("click", e =>{
    houseballoons.innerHTML+= `<a-sphere color="blue" position="8 10 -16" radius="2"></a-sphere>`
})