let btn = document.querySelector(".btn")
// let h1 = document.querySelector("#h1")
let colorSpan = document.querySelector(".color-span")

function func1() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    let rgb = `rgb(${red}, ${green}, ${blue})`

    // h1.innerHTML = `Background color : <span class="color-span">${rgb}</span>`

    console.log(rgb)
    colorSpan.textContent = rgb


    document.body.style.background = rgb
}

btn.addEventListener("click", func1)
